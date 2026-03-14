using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Containers
{
    public class ContainerHandler(AppDbContext _db,
        IValidator<CreateContainerRequest> _createValidator,
        IValidator<UpdateContainerRequest> _updateValidator
        )
    {
        public async Task<ApiResponses<ContainerResponse>> CreateAsync(CreateContainerRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<ContainerResponse>.Fail("Validation Error", validation.Errors.Select(x => x.ErrorMessage).ToList());

            if (await _db.Containers.AnyAsync(c => c.ContainerNumber == request.ContainerNumber))
                return ApiResponses<ContainerResponse>.Fail("Container number already exists");

            var contianer = new TransProAPI.Domain.Entities.Container
            {
                ContainerNumber = request.ContainerNumber,
                Type = request.Type,
                WeightCapacity = request.WeightCapacity,
                IsAvailable = true,
                CreatedAt = DateTime.UtcNow,
            };

            _db.Containers.Add(contianer);
            await _db.SaveChangesAsync();

            return ApiResponses<ContainerResponse>.Ok(contianer.ToResponse(), "Container created.");
        }

        public async Task<ApiResponses<string>> UpdateAsync(int id, UpdateContainerRequest request)
        {
            var validation = await _updateValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<string>.Fail("Validation Error", validation.Errors.Select(x => x.ErrorMessage).ToList());

            var container = await _db.Containers.FindAsync(id);
            if (container is null)
                return ApiResponses<string>.Fail("Container not found");

            container.Type = request.Type;
            container.WeightCapacity = request.WeightCapacity;

            await _db.SaveChangesAsync();
            return ApiResponses<string>.Ok("Container Updated.");
        }

        public async Task<ApiResponses<PagedResponse<ContainerResponse>>> GetAllAsync(ContainerQueryParams query)
        {
            query.Validate();

            var q = _db.Containers
                .AsNoTracking()
                .AsQueryable();

            if (!string.IsNullOrEmpty(query.Search))
            {
                var search = query.Search.ToLower();
                q = q.Where(c =>
                    c.ContainerNumber.ToLower().Contains(search));
            }

            if (query.IsAvailable.HasValue)
                q = q.Where(x => x.IsAvailable == query.IsAvailable.Value);

            if (!string.IsNullOrEmpty(query.Type))
                q = q.Where(c => c.Type.ToLower() == query.Type.ToLower());

            var totalCount = await _db.Containers.CountAsync();

            var list = await q
                .OrderByDescending(x => x.CreatedAt)
                .Skip((query.PageNumber - 1) * query.PageSize)
                .Take(query.PageSize)
                .Select(x => x.ToResponse())
                .ToListAsync();

            var result = new PagedResponse<ContainerResponse>()
            {
                TotalCount = totalCount,
                PageNumber = query.PageNumber,
                PageSize = query.PageSize,
                Data = list
            };

            return ApiResponses<PagedResponse<ContainerResponse>>.Ok(result);
        }

        public async Task<ApiResponses<ContainerResponse>> GetByIdAsync(int id)
        {
            var container = await _db.Containers
                .Where(c => c.Id == id)
                .Select(c => c.ToResponse())
                .FirstOrDefaultAsync();

            return container is null
                ? ApiResponses<ContainerResponse>.Fail("Container not found.")
                : ApiResponses<ContainerResponse>.Ok(container);
        }

        public async Task<ApiResponses<string>> DeleteAsync(int id)
        {
            var container = await _db.Containers.FindAsync(id);
            if (container is null)
                return ApiResponses<string>.Fail("Container not found.");

            var isAssigned = await _db.TripContainers.AnyAsync(tc =>
                tc.ContainerId == id &&
                (tc.Trip.Status == TripStatus.Planned ||
                 tc.Trip.Status == TripStatus.InTransit));

            if (isAssigned)
                return ApiResponses<string>.Fail("Container is assigned to an active trip.");

            _db.Containers.Remove(container);
            await _db.SaveChangesAsync();
            return ApiResponses<string>.Ok("Container deleted.");
        }

    }
}

