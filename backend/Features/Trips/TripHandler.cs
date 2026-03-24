using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Quic;
using System.Threading.Tasks;
using FluentValidation;
using FluentValidation.TestHelper;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Trips
{
    public class TripHandler(
        AppDbContext _db,
        IValidator<CreateTripRequest> _createValidator,
        ILogger<TripHandler> _logger
        )
    {
        public async Task<ApiResponses<TripDetailResponse>> CreateAsync(CreateTripRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);

            if (!validation.IsValid)
            {
                // Log validation failures — helps identify bad clients or UI bugs
                _logger.LogWarning(
                    "Trip creation validation failed. CustomerId: {CustomerId} Errors: {Errors}",
                    request.CustomerId,
                    string.Join(", ", validation.Errors.Select(e => e.ErrorMessage)));

                return ApiResponses<TripDetailResponse>.Fail("Validation failed", validation.Errors.Select(x => x.ErrorMessage).ToList());
            }

            var customer = await _db.Customers.FirstOrDefaultAsync(c => c.Id == request.CustomerId && c.IsActive);
            if (customer is null)
                return ApiResponses<TripDetailResponse>.Fail($"Customer with ID {request.CustomerId} was not found or is inavtive");

            var driver = await _db.Drivers.FirstOrDefaultAsync(d => d.Id == request.DriverId);
            if (driver is null)
                return ApiResponses<TripDetailResponse>.Fail($"Driver with ID {request.DriverId} was not found");

            if (!driver.IsAvailable)
                return ApiResponses<TripDetailResponse>.Fail(
                    $"Driver '{driver.FullName}' is currently unavailable. " +
                    $"They may be assigned to another active trip.");

            var truck = await _db.Trucks.FirstOrDefaultAsync(t => t.Id == request.TruckId);
            if (truck is null)
                return ApiResponses<TripDetailResponse>.Fail($"Truck with ID {request.TruckId} was not found");

            if (!truck.IsAvailable)
                return ApiResponses<TripDetailResponse>.Fail(
                    $"Truck '{truck.PlateNumber}' is currently unavailable. " +
                    $"It may be assigned to another active trip.");

            var route = await _db.Routes.FirstOrDefaultAsync(x => x.Id == request.RouteId);
            if (route is null)
                return ApiResponses<TripDetailResponse>.Fail(
                    $"Route with ID {request.RouteId} was not found.");

            var containers = await _db.Containers.
                    Where(x => request.ContainerIds.Contains(x.Id))
                    .ToListAsync();

            if (containers.Count != request.ContainerIds.Count)
            {
                var foundIds = containers.Select(c => c.Id).ToList();
                var missingIds = request.ContainerIds.Except(foundIds).ToList();

                return ApiResponses<TripDetailResponse>.Fail(
                    $"The following container IDs were not found: " +
                    $"{string.Join(", ", missingIds)}");
            }

            var unavailableContainers = containers.Where(uc => !uc.IsAvailable).ToList();

            if (unavailableContainers.Count != 0)
            {
                return ApiResponses<TripDetailResponse>.Fail(
                    $"The following containers are currently unavailable: " +
                    $"{string.Join(", ", unavailableContainers.Select(c => c.ContainerNumber))}. " +
                    $"They may be assigned to another active trip.");
            }

            await using var transaction = await _db.Database.BeginTransactionAsync();

            try
            {
                var trip = new Trip
                {
                    CustomerId = request.CustomerId,
                    DriverId = request.DriverId,
                    TruckId = request.TruckId,
                    RouteId = request.RouteId,
                    DepartureDate = request.DepartureDate,
                    Notes = request.Notes.Trim(),
                    Status = TripStatus.Planned,
                    CreatedAt = DateTime.UtcNow
                };

                _db.Trips.Add(trip);
                await _db.SaveChangesAsync();

                var tripContainers = containers
                    .Select(x => new TripContainer
                    {
                        TripId = trip.Id,
                        ContainerId = x.Id
                    }).ToList();

                await _db.TripContainers.AddRangeAsync(tripContainers);

                driver.IsAvailable = false;
                truck.IsAvailable = false;

                foreach (var container in containers)
                    container.IsAvailable = false;

                await _db.SaveChangesAsync();
                await transaction.CommitAsync();

                // Log successful creation with key identifiers
                _logger.LogInformation(
                    "Trip created successfully. TripId: {TripId} CustomerId: {CustomerId} " +
                    "DriverId: {DriverId} TruckId: {TruckId} RouteId: {RouteId}",
                    trip.Id,
                    trip.CustomerId,
                    trip.DriverId,
                    trip.TruckId,
                    trip.RouteId);

                var response = await BuildDetailsReponseAsync(trip.Id);
                return ApiResponses<TripDetailResponse>.Ok(response!, "Trip created successfully.");
            }
            catch (Exception)
            {
                await transaction.RollbackAsync();

                // Log that rollback happened — middleware logs the exception itself
                _logger.LogError(
                    "Trip creation failed and was rolled back. CustomerId: {CustomerId}",
                    request.CustomerId);

                throw;
            }
        }

        public async Task<ApiResponses<PagedResponse<TripSummaryResponse>>> GetAllAsync(TripQueryParams request)
        {
            request.Validate();

            var query = _db.Trips.AsNoTracking().AsQueryable();

            // Can simplify this If conditions Using WhereIf extension, will do it later
            if (request.Search > 0)
            {
                var search = request.Search;
                query = query.Where(c =>
                    c.Id == request.Search);
            }

            if (request.Status.HasValue)
                query = query.Where(t => t.Status == request.Status.Value);

            if (request.CustomerId.HasValue)
                query = query.Where(t => t.CustomerId == request.CustomerId.Value);

            if (request.DriverId.HasValue)
                query = query.Where(t => t.DriverId == request.DriverId.Value);

            if (request.FromDate.HasValue)
                query = query.Where(t => t.DepartureDate >= request.FromDate.Value);

            if (request.ToDate.HasValue)
                query = query.Where(t => t.DepartureDate <= request.ToDate.Value);

            var totalCount = await query.CountAsync();

            var trips = await query
                .OrderByDescending(x => x.Id)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new TripSummaryResponse(
                    x.Id,
                    x.Customer.FullName,
                    x.Driver.FullName,
                    x.Truck.PlateNumber,
                    x.Route.Origin,
                    x.Route.Destination,
                    x.Status.ToString(),
                    x.DepartureDate,
                    x.ArrivalDate
                    ))
                .ToListAsync();

            var response = new PagedResponse<TripSummaryResponse>()
            {
                TotalCount = totalCount,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Data = trips,
            };

            return ApiResponses<PagedResponse<TripSummaryResponse>>.Ok(response);
        }

        public async Task<ApiResponses<TripDetailResponse>> GetByIdAsync(int id)
        {
            var response = await BuildDetailsReponseAsync(id);

            return response is null
                ? ApiResponses<TripDetailResponse>.Fail($"Trip with ID {id} was not found.")
                : ApiResponses<TripDetailResponse>.Ok(response);
        }

        public async Task<ApiResponses<TripDetailResponse>> UpdateStatusAsync(int id, UpdateTripStatusRequest request)
        {
            var trip = await _db.Trips
                .Include(x => x.Driver)
                .Include(x => x.Truck)
                .Include(x => x.TripContainers)
                    .ThenInclude(x => x.Container)
                .FirstOrDefaultAsync(x => x.Id == id);

            if (trip is null)
                return ApiResponses<TripDetailResponse>.Fail($"Trip with ID {id} was not found.");

            var isValidTransition = (trip.Status, request.NewStatus) switch
            {
                (TripStatus.Planned, TripStatus.InTransit)   => true,
                (TripStatus.Planned, TripStatus.Cancelled)   => true,
                (TripStatus.InTransit, TripStatus.Cancelled) => true,
                (TripStatus.InTransit, TripStatus.Completed) => true,
                _                                            => false
            };

            if (!isValidTransition)
                return ApiResponses<TripDetailResponse>.Fail($"Cannot transition from '{trip.Status} to '{request.NewStatus}'.");

            await using var transaction = await _db.Database.BeginTransactionAsync();

            try
            {
                trip.Status = request.NewStatus;

                if (request.NewStatus == TripStatus.Completed || request.NewStatus == TripStatus.Cancelled)
                {
                    trip.ArrivalDate = DateTime.UtcNow;
                    trip.Driver.IsAvailable = true;
                    trip.Truck.IsAvailable = true;

                    foreach (var items in trip.TripContainers)
                        items.Container.IsAvailable = true;
                }

                await _db.SaveChangesAsync();
                await transaction.CommitAsync();

                // Log every status transition — this is an audit trail
                _logger.LogInformation(
                    "Trip status updated. TripId: {TripId} From: {OldStatus} To: {NewStatus}",
                    trip.Id,
                    trip.Status,
                    request.NewStatus);

                var response = await BuildDetailsReponseAsync(trip.Id);
                return ApiResponses<TripDetailResponse>.Ok(
                    response!,
                    $"Trip status updated to '{request.NewStatus}' successfully.");
            }
            catch (Exception)
            {
                await transaction.RollbackAsync();
                throw;
            }
        }

        public async Task<ApiResponses<string>> CancelAsync(int id)
        {
            var trip = await _db.Trips.FirstOrDefaultAsync(t => t.Id == id);

            if (trip is null)
                return ApiResponses<string>.Fail($"Trip with ID {id} was not found.");

            if (trip.Status == TripStatus.Completed)
                return ApiResponses<string>.Fail("Cannot cancel a completed trip. The trip has already been delivered.");

            if (trip.Status == TripStatus.Cancelled)
                return ApiResponses<string>.Fail("This trip is already cancelled.");

            var cancelRequest = new UpdateTripStatusRequest(TripStatus.Cancelled);
            var result = await UpdateStatusAsync(id, cancelRequest);

            return result.Success
                ? ApiResponses<string>.Ok("Trip cancelled successfully. All resources have been released.")
                : ApiResponses<string>.Fail(result.Message);
        }

        private async Task<TripDetailResponse?> BuildDetailsReponseAsync(int tripId)
        {
            return await _db.Trips
                .AsNoTracking()
                .Where(t => t.Id == tripId)
                .Select(t => new TripDetailResponse(
                    t.Id,

                    new CustomerInfo(
                        t.Customer.Id,
                        t.Customer.FullName,
                        t.Customer.Email,
                        t.Customer.Phone),

                    new DriverInfo(
                        t.Driver.Id,
                        t.Driver.FullName,
                        t.Driver.LicenseNumber,
                        t.Driver.Phone),

                    new TruckInfo(
                        t.Truck.Id,
                        t.Truck.PlateNumber,
                        t.Truck.Model,
                        t.Truck.Capacity),

                    new RouteInfo(
                        t.Route.Id,
                        t.Route.Origin,
                        t.Route.Destination,
                        t.Route.DistanceKm,
                        t.Route.EstimatedHours),

                    t.TripContainers.Select(tc => new ContainerInfo(
                        tc.Container.Id,
                        tc.Container.ContainerNumber,
                        tc.Container.Type,
                        tc.Container.WeightCapacity
                    )).ToList(),

                    t.Status.ToString(),
                    t.DepartureDate,
                    t.ArrivalDate,
                    t.Notes,
                    t.CreatedAt))
                .FirstOrDefaultAsync();
        }
    }
}