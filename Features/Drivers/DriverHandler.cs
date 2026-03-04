using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Microsoft.VisualBasic;
using Npgsql.Replication;
using TransProAPI.Common;
using TransProAPI.Domain;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;
using static TransProAPI.Features.Drivers.DriverDtos;

namespace TransProAPI.Features.Drivers
{
    public class DriverHandler(
        AppDbContext _db,
        IValidator<CreateDriverRequest> _createValidator,
        IValidator<UpdateDriverRequest> _updateValidotor)
    {
        public async Task<ApiResponses<DriverResponse>> CreateAsync(CreateDriverRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<DriverResponse>.Fail("Validation Failed.", validation.Errors.Select(x => x.ErrorMessage).ToList());

            // Business Rule: License number must be unique accross all drivers
            if (await _db.Drivers.AnyAsync(d => d.LicenseNumber == request.LicenseNumber))
                return ApiResponses<DriverResponse>.Fail("A driver with this license number already exists.");

            var driver = new Driver
            {
                FullName = request.FullName,
                LicenseNumber = request.LicenseNumber,
                Phone = request.Phone,
                IsAvailable = true,
                CreatedAt = DateTime.UtcNow
            };

            await _db.AddAsync(driver);
            await _db.SaveChangesAsync();

            return ApiResponses<DriverResponse>.Ok(driver.ToResponse(), "Driver created successfully.");
        }

        public async Task<ApiResponses<PagedResponse<DriverResponse>>> GetAllAsync(PaginationRequest request, bool? availableOnly = null)
        {
            var query = _db.Drivers.AsQueryable();

            // Optional filter — caller can ask for only available drivers
            // This is useful when the Trip creation screen needs to show
            // only drivers that can actually be assigned
            if (availableOnly.HasValue)
                query = query.Where(d => d.IsAvailable == availableOnly.HasValue);

            var totalCount = await query.CountAsync();

            var drivers = await query
                .AsNoTracking()
                .OrderByDescending(d => d.CreatedAt)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(d => d.ToResponse())
                .ToListAsync();

            var response = new PagedResponse<DriverResponse>()
            {
                TotalCount = totalCount,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Data = drivers
            };

            return ApiResponses<PagedResponse<DriverResponse>>.Ok(response);
        }

        public async Task<ApiResponses<DriverResponse>> GetByIdAsync(int id)
        {
            var driver = await _db.Drivers
                .Where(d => d.Id == id)
                .Select(d => d.ToResponse())
                .FirstOrDefaultAsync();

            return driver is null
                ? ApiResponses<DriverResponse>.Fail("Driver not found.")
                : ApiResponses<DriverResponse>.Ok(driver);
        }

        public async Task<ApiResponses<string>> UpdateAsync(int id, UpdateDriverRequest request)
        {
            var validation = await _updateValidotor.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<string>.Fail("Validation failed.");

            var driver = await _db.Drivers.FindAsync(id);
            if (driver is null)
                return ApiResponses<string>.Fail("Driver not found.");

            driver.FullName = request.FullName;
            driver.Phone = request.Phone;

            await _db.SaveChangesAsync();
            return ApiResponses<string>.Ok("Driver updated successfully.");
        }

        // Toggles the driver's availability status.
        // Prevents marking a driver as available if they are currently assigned to an active (InTransit) trip.
        public async Task<ApiResponses<string>> ToggleAvailabilityAsync(int id)
        {
            var driver = await _db.Drivers.FindAsync(id);
            if (driver is null)
                return ApiResponses<string>.Fail("Driver not found.");

            //Business Rule: Cannot manually mark as available if driver is currently assigned to an active (InTransit) trip

            if (!driver.IsAvailable)
            {
                var hasActivetrip = await _db.Trips.AnyAsync(
                    t => t.DriverId == id && t.Status == TripStatus.InTransit);

                if (hasActivetrip)
                    return ApiResponses<string>.Fail("Driver is currently assigned to an active trip and cannot be marked available manually");
            }

            driver.IsAvailable = !driver.IsAvailable;
            await _db.SaveChangesAsync();

            var statusText = driver.IsAvailable ? "available" : "unavailable";
            return ApiResponses<string>.Ok($"Driver marked as {statusText}.");
        }

        public async Task<ApiResponses<string>> DeleteAsync(int id)
        {
            var driver = await _db.Drivers.FindAsync(id);
            if (driver is null)
                return ApiResponses<string>.Fail("Driver not found.");

            var hasActivetrip = await _db.Trips.AnyAsync(
                t => t.DriverId == id &&
                (t.Status == TripStatus.Planned || t.Status == TripStatus.InTransit));

            if (hasActivetrip)
                return ApiResponses<string>.Fail("Cannot delete a driver with active or planned trips. Reassign or complete those trips first.");

            _db.Drivers.Remove(driver);
            await _db.SaveChangesAsync();

            return ApiResponses<string>.Ok("Driver deleted successfully.");
        }
    }
}
