using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Quic;
using System.Security.Principal;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;
using static TransProAPI.Features.Trucks.TruckDto;

namespace TransProAPI.Features.Trucks
{
    public class TruckHandler(
        AppDbContext _db,
        IValidator<CreateTruckRequest> _createValidator,
        IValidator<UpdateTruckRequest> _updateValidator)
    {
        public async Task<ApiResponses<TruckResponse>> CreateAsync(CreateTruckRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<TruckResponse>.Fail("Validation failed.", validation.Errors.Select(x => x.ErrorMessage).ToList());

            if (await _db.Trucks.AnyAsync(t => t.PlateNumber == request.PlateNumber))
                return ApiResponses<TruckResponse>.Fail("A truck with this plate number already exists.");

            var truck = new Truck
            {
                PlateNumber = request.PlateNumber,
                Model = request.Model,
                Capacity = request.Capacity,
                IsAvailable = true,
                CreatedAt = DateTime.UtcNow
            };

            _db.Trucks.Add(truck);
            await _db.SaveChangesAsync();

            return ApiResponses<TruckResponse>.Ok(truck.ToResponse(), "Truck created successfully.");
        }

        public async Task<ApiResponses<PagedResponse<TruckResponse>>> GetAllAsync(PaginationRequest request, bool? availableOnly = true)
        {
            var query = _db.Trucks.AsQueryable();

            if (availableOnly.HasValue)
                query = query.Where(x => x.IsAvailable == availableOnly.Value);

            var totalCount = await query.CountAsync();

            var trucks = await query
                .AsNoTracking()
                .OrderByDescending(x => x.CreatedAt)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => x.ToResponse())
                .ToListAsync();

            var response = new PagedResponse<TruckResponse>()
            {
                TotalCount = totalCount,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Data = trucks
            };

            return ApiResponses<PagedResponse<TruckResponse>>.Ok(response);
        }

        public async Task<ApiResponses<TruckResponse>> GetByIdAsync(int id)
        {
            var trucks = await _db.Trucks
                .Where(x => x.Id == id)
                .Select(t => t.ToResponse())
                .FirstOrDefaultAsync();

            return trucks is null
            ? ApiResponses<TruckResponse>.Fail("Truck Not found")
            : ApiResponses<TruckResponse>.Ok(trucks);
        }

        public async Task<ApiResponses<string>> UpdateAsync(int id, UpdateTruckRequest request)
        {
            var validation = await _updateValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<string>.Fail("Validation failed.");

            var truck = await _db.Trucks.FindAsync(id);
            if (truck is null)
                return ApiResponses<string>.Fail("Truck not found.");

            truck.Model = request.Model;
            truck.Capacity = request.Capacity;

            await _db.SaveChangesAsync();
            return ApiResponses<string>.Ok("Driver updated successfully");
        }

        public async Task<ApiResponses<string>> ToggleAvailabilityAsync(int id)
        {
            var truck = await _db.Trucks.FindAsync(id);
            if (truck is null)
                return ApiResponses<string>.Fail("Truck not found");

            if (!truck.IsAvailable)
            {
                var hasActivetrip = await _db.Trips.AnyAsync(t =>
                    t.TruckId == id &&
                    t.Status == TripStatus.InTransit);

                if (hasActivetrip)
                    return ApiResponses<string>.Fail(
                    "Truck is currently on an active trip and cannot be marked available manually.");
            }

            truck.IsAvailable = !truck.IsAvailable;
            await _db.SaveChangesAsync();

            var statusText = truck.IsAvailable ? "available" : "unavailable";
            return ApiResponses<string>.Ok($"Truck marked as {statusText}.");
        }

        public async Task<ApiResponses<string>> DeleteAsync(int id)
        {
            var truck = await _db.Trucks.FindAsync(id);
            if (truck is null)
                return ApiResponses<string>.Fail("Truck not found");

            var hasActivetrip = await _db.Trips.AnyAsync(
                t => t.TruckId == id &&
                (t.Status == TripStatus.Planned || t.Status == TripStatus.InTransit)
            );
            if (hasActivetrip)
                return ApiResponses<string>.Fail("Cannot delete a truck with active or planned trips. Reassign or complete those trips first.");

            _db.Trucks.Remove(truck);
            await _db.SaveChangesAsync();

            return ApiResponses<string>.Ok("Truck deleted successfully");
        }
    }
}