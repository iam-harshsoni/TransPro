using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Routes
{
    public class RouteHandler(
        AppDbContext _db,
        IValidator<CreateRouteRequest> _createValidator,
        IValidator<UpdateRouteRequest> _updateValidator)
    {
        public async Task<ApiResponses<RouteResponse>> CreateAsync(CreateRouteRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<RouteResponse>.Fail("Validation failed.",
                    validation.Errors.Select(e => e.ErrorMessage).ToList());

            // Business rule: same origin→destination route should not be duplicated
            if (await _db.Routes.AnyAsync(r =>
                    r.Origin == request.Origin &&
                    r.Destination == request.Destination))
                return ApiResponses<RouteResponse>.Fail(
                    "A route with this origin and destination already exists.");

            var route = new Domain.Entities.Route
            {
                Origin = request.Origin,
                Destination = request.Destination,
                DistanceKm = request.DistanceKm,
                EstimatedHours = request.EstimatedHours
            };

            _db.Routes.Add(route);
            await _db.SaveChangesAsync();

            return ApiResponses<RouteResponse>.Ok(route.ToResponse(), "Route created.");
        }

        public async Task<ApiResponses<PagedResponse<RouteResponse>>> GetAllAsync(RouteQueryParams query)
        {
            query.Validate();

            var q = _db.Routes
                .AsNoTracking()
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(query.Search))
            {
                var search = query.Search.ToLower().Trim();
                q = q.Where(r =>
                    r.Origin.ToLower().Contains(search) ||
                    r.Destination.ToLower().Contains(search));
            }

            if (!string.IsNullOrWhiteSpace(query.Origin))
                q = q.Where(r => r.Origin.ToLower() == query.Origin.ToLower());

            if (!string.IsNullOrWhiteSpace(query.Destination))
                q = q.Where(r => r.Destination.ToLower() == query.Destination.ToLower());

            var totalCount = await _db.Routes.CountAsync();

            var routes = await q
                .AsNoTracking()
                .Skip((query.PageNumber - 1) * query.PageSize)
                .Take(query.PageSize)
                .OrderBy(r => r.Origin)
                .Select(r => r.ToResponse())
                .ToListAsync();

            var result = new PagedResponse<RouteResponse>
            {
                TotalCount = totalCount,
                PageNumber = query.PageNumber,
                PageSize = query.PageSize,
                Data = routes
            };

            return ApiResponses<PagedResponse<RouteResponse>>.Ok(result);
        }

        public async Task<ApiResponses<RouteResponse>> GetByIdAsync(int id)
        {
            var route = await _db.Routes
                .Where(r => r.Id == id)
                .Select(r => r.ToResponse())
                .FirstOrDefaultAsync();

            return route is null
                ? ApiResponses<RouteResponse>.Fail("Route not found.")
                : ApiResponses<RouteResponse>.Ok(route);
        }

        public async Task<ApiResponses<string>> UpdateAsync(int id, UpdateRouteRequest request)
        {
            var validation = await _updateValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<string>.Fail("Validation failed.",
                    validation.Errors.Select(e => e.ErrorMessage).ToList());

            var route = await _db.Routes.FindAsync(id);
            if (route is null)
                return ApiResponses<string>.Fail("Route not found.");

            route.DistanceKm = request.DistanceKm;
            route.EstimatedHours = request.EstimatedHours;

            await _db.SaveChangesAsync();
            return ApiResponses<string>.Ok("Route updated.");
        }

        public async Task<ApiResponses<string>> DeleteAsync(int id)
        {
            var route = await _db.Routes.FindAsync(id);
            if (route is null)
                return ApiResponses<string>.Fail("Route not found.");

            var hasTrips = await _db.Trips.AnyAsync(t => t.RouteId == id);
            if (hasTrips)
                return ApiResponses<string>.Fail(
                    "Cannot delete a route that has trips associated with it.");

            _db.Routes.Remove(route);
            await _db.SaveChangesAsync();
            return ApiResponses<string>.Ok("Route deleted.");
        }
    }
}