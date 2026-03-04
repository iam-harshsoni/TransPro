using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain;
using TransProAPI.Infrastructure.Persistence;
using static TransProAPI.Features.Trucks.TruckDto;

namespace TransProAPI.Features.Trucks
{
    public class TruckHandler(
        AppDbContext _db,
        IValidator<CreateTruckRequest> _createValidator, IValidator<UpdateTruckRequest> _updateValidator)
    {
        [HttpPost]
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
                Model       = request.Model,
                Capacity    = request.Capacity,
                IsAvailable = true,
                CreatedAt   = DateTime.UtcNow
            };

            _db.Trucks.Add(truck);
            await _db.SaveChangesAsync();

            return ApiResponses<TruckResponse>.Ok(truck.ToResponse(), "Truck created successfully.");
        }
    }
}