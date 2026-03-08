using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Trips
{
    public class TripHandler(
        AppDbContext _db,
        IValidator<CreateTripRequest> _createValidator)
    {
        public async Task<ApiResponses<TripDetailResponse>> CreateAsync(CreateTripRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<TripDetailResponse>.Fail("Validation failed", validation.Errors.Select(x => x.ErrorMessage).ToList());

            // Customer check
            var customer = await _db.Customers.FirstOrDefaultAsync(c => c.Id == request.CustomerId && c.IsActive);
            if (customer is null)
                return ApiResponses<TripDetailResponse>.Fail($"Customer with ID {request.CustomerId} was not found or is inavtive");

            // Driver check
            var driver = await _db.Drivers.FirstOrDefaultAsync(d => d.Id == request.DriverId);
            if (driver is null)
                return ApiResponses<TripDetailResponse>.Fail($"Driver with ID {request.DriverId} was not found");

            if (!driver.IsAvailable)
                return ApiResponses<TripDetailResponse>.Fail(
                    $"Driver '{driver.FullName}' is currently unavailable. " +
                    $"They may be assigned to another active trip.");

            // Truck check
            var truck = await _db.Trucks.FirstOrDefaultAsync(t => t.Id == request.TruckId);
            if (truck is null)
                return ApiResponses<TripDetailResponse>.Fail($"Truck with ID {request.TruckId} was not found");

            if (!truck.IsAvailable)
                return ApiResponses<TripDetailResponse>.Fail(
                    $"Truck '{truck.PlateNumber}' is currently unavailable. " +
                    $"It may be assigned to another active trip.");

            // Route Check
            var route = await _db.Routes.FirstOrDefaultAsync(x => x.Id == request.RouteId);
            if (route is null)
                return ApiResponses<TripDetailResponse>.Fail(
                    $"Route with ID {request.RouteId} was not found.");

            /* Containers Check  (IMP Query)
                Fetch all requested containers in ONE query
                Never query inside a loop — that's N+1 problem territory  
            */
            var containers = await _db.Containers.
                    Where(x => request.ContainerIds.Contains(x.Id))
                    .ToListAsync();

            /*  Check if every requested ID was found
                The count check tells us IF some are missing
                The Except tells us WHICH ones are missing
            */
            if (containers.Count != request.ContainerIds.Count)
            {
                var foundIds = containers.Select(c => c.Id).ToList();
                var missingIds = request.ContainerIds.Except(foundIds).ToList();

                return ApiResponses<TripDetailResponse>.Fail(
                    $"The following container IDs were not found: " +
                    $"{string.Join(", ", missingIds)}");
            }

            /* Containers — Availability
                Separate from existence check — gives a clearer error message
                We report by ContainerNumber, not ID, because that's what operations staff actually know and care about
            */
            var unavailableContainers = containers.Where(uc => !uc.IsAvailable).ToList();

            if (unavailableContainers.Count != 0)
            {
                return ApiResponses<TripDetailResponse>.Fail(
                    $"The following containers are currently unavailable: " +
                    $"{string.Join(", ", unavailableContainers.Select(c => c.ContainerNumber))}. " +
                    $"They may be assigned to another active trip.");
            }

            /*  LAYER 3: Atomic Operation (Transaction)
                All checks passed. Now we execute the actual operation.
            
                WHY a transaction?
                We're about to write to multiple tables:
                - Trips table          (insert)
                - TripContainers table (insert multiple rows)
                - Drivers table        (update IsAvailable)
                - Trucks table         (update IsAvailable)
                - Containers table     (update IsAvailable for each)
            
                If ANYTHING fails mid-way, we need ALL changes to roll back.
                Without a transaction, a crash after inserting the Trip but
                before marking the driver unavailable leaves your data
                permanently inconsistent.
            
                With a transaction: either everything succeeds, or
                nothing changes. This is ACID compliance in action.
            */

            await using var transaction = await _db.Database.BeginTransactionAsync();

            try
            {
                //Create the trip record
                var trip = new Trip
                {
                    CustomerId = request.CustomerId,
                    DriverId = request.DriverId,
                    TruckId = request.TruckId,
                    RouteId = request.RouteId,
                    DepartureDate = request.DepartureDate,
                    Notes = request.Notes,
                    Status = TripStatus.Planned,
                    CreatedAt = DateTime.UtcNow
                };

                _db.Trips.Add(trip);
                await _db.SaveChangesAsync();

                // Link containers to this trip (Entry in tripContainers Model)
                var tripContainers = containers
                    .Select(x => new TripContainer
                    {
                        TripId = trip.Id,
                        ContainerId = x.Id
                    }).ToList();

                await _db.TripContainers.AddRangeAsync(tripContainers);  // inserts all 3 rows into the database in one operation.

                // Lock all resources (Update driver and truck availability - EF Core already tracking it from above)
                driver.IsAvailable = false;
                truck.IsAvailable = false;

                foreach (var container in containers)
                    container.IsAvailable = false;

                //Persist everything and commit
                await _db.SaveChangesAsync();
                await transaction.CommitAsync();

                // Build and return the full detail response
                var response = await BuildDetailsReponseAsync(trip.Id);

                return ApiResponses<TripDetailResponse>.Ok(response!, "Trip created successfully.");
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return ApiResponses<TripDetailResponse>.Fail(
                    $"An error occurred while creating the trip. " + $"All changes have been rolled back. Error: {ex.Message}");
            }
        }

        /* PRIVATE HELPER
             Builds the full TripDetailResponse by loading all related entities
            
             WHY a separate private method?
             We'll reuse this same query in GetByIdAsync and UpdateStatusAsync later.
             One method, used in multiple places — no duplication.
             If the response shape changes, we update it in one place only.
            
             WHY AsNoTracking()?
             This is a READ operation — we're not going to modify these entities.
             AsNoTracking tells EF Core to skip change tracking for this query,
             which is faster and uses less memory. Always use it for read-only queries.
            
             WHY project with .Select() instead of loading entities then mapping?
             .Select() translates directly to a SQL SELECT with only the columns
             we need. Loading full entities first pulls every column from every
             related table, then we discard most of it. On large tables,
             projection is significantly faster.
        */
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