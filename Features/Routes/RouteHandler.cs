using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Routes
{
    public class RouteHandler(
        AppDbContext _db,
        IValidator<CreateRouteRequest> _createValidator,
        IValidator<UpdateRouteRequest> _updateValidator,
        IDistributedCache _cache)
    {
        private const string RoutesCacheKey = "routes_all";

        public async Task<ApiResponses<RouteResponse>> CreateAsync(CreateRouteRequest request)
        {
            var validation = await _createValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<RouteResponse>.Fail("Validation failed.",
                    validation.Errors.Select(e => e.ErrorMessage).ToList());

            // Business rule: same origin→destination route should not be duplicated
            if (await _db.Routes.AnyAsync(r => r.Origin == request.Origin && r.Destination == request.Destination))
                return ApiResponses<RouteResponse>.Fail(
                    "A route with this origin and destination already exists.");

            var routes = new Domain.Entities.Route
            {
                Origin = request.Origin.Trim().ToUpper(),
                Destination = request.Destination.Trim().ToUpper(),
                DistanceKm = request.DistanceKm,
                EstimatedHours = request.EstimatedHours
            };

            _db.Routes.Add(routes);
            await _db.SaveChangesAsync();

            await _cache.RemoveAsync(RoutesCacheKey);

            return ApiResponses<RouteResponse>.Ok(routes.ToResponse(), "Route created.");
        }

        public async Task<ApiResponses<PagedResponse<RouteResponse>>> GetAllAsync(RouteQueryParams query)
        {
            query.Validate();

            // ── Try cache first ───────────────────────────────────────────────
            List<RouteResponse>? allRoutes = null;

            var cached = await _cache.GetStringAsync(RoutesCacheKey);

            if (!string.IsNullOrEmpty(cached))
            {
                // Cache HIT — deserialize from JSON back to list
                allRoutes = JsonSerializer.Deserialize<List<RouteResponse>>(cached);
            }

            if (allRoutes == null)
            {
                // Cache MISS — load from DB
                allRoutes = await _db.Routes
                    .AsNoTracking()
                    .OrderBy(r => r.Origin)
                    .Select(r => r.ToResponse())
                    .ToListAsync();

                // Serialize and store in cache
                var serialized = JsonSerializer.Serialize(allRoutes);

                await _cache.SetStringAsync(
                    RoutesCacheKey,
                    serialized,
                    new DistributedCacheEntryOptions
                    {
                        // Cache for 1 hour — survives app restarts, shared across instances
                        AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1)
                    });
            }

            // ── Apply filters in memory from cached data ──────────────────────
            var filtered = allRoutes.AsEnumerable();

            if (!string.IsNullOrWhiteSpace(query.Search))
            {
                var search = query.Search.ToLower().Trim();
                filtered = filtered.Where(r =>
                    r.Origin.ToLower().Contains(search) ||
                    r.Destination.ToLower().Contains(search));
            }

            if (!string.IsNullOrWhiteSpace(query.Origin))
                filtered = filtered.Where(r =>
                    r.Origin.ToLower() == query.Origin.ToLower().Trim());

            if (!string.IsNullOrWhiteSpace(query.Destination))
                filtered = filtered.Where(r =>
                    r.Destination.ToLower() == query.Destination.ToLower().Trim());

            var filteredList = filtered.ToList();

            var page = filteredList
                .Skip((query.PageNumber - 1) * query.PageSize)
                .Take(query.PageSize)
                .ToList();

            return ApiResponses<PagedResponse<RouteResponse>>.Ok(
                new PagedResponse<RouteResponse>
                {
                    Data = page,
                    TotalCount = filteredList.Count,
                    PageNumber = query.PageNumber,
                    PageSize = query.PageSize
                });
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
            await _cache.RemoveAsync(RoutesCacheKey);

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

            await _cache.RemoveAsync(RoutesCacheKey);

            return ApiResponses<string>.Ok("Route deleted.");
        }
    }
}