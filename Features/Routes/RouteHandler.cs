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
        ILogger<RouteHandler> _logger,
        IDistributedCache _cache)
    {
        private const string RoutesCacheKey = "routes_all";

        private static readonly DistributedCacheEntryOptions CacheOptions = new()
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1)
        };

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

        public async Task<ApiResponses<PagedResponse<RouteResponse>>> GetAllAsync(
             RouteQueryParams query)
        {
            query.Validate();

            var cacheKey = BuildCacheKey(query);

            // ── Try cache first ───────────────────────────────────────────────────
            // Cache stores the FINAL paged result — not the full dataset
            // On hit: deserialize ~10 records instead of 10,000
            var cached = await GetFromCacheAsync<PagedResponse<RouteResponse>>(cacheKey);
            if (cached != null)
                return ApiResponses<PagedResponse<RouteResponse>>.Ok(cached);

            // ── Cache miss — query DB with filters and pagination ─────────────────
            var q = _db.Routes.AsNoTracking().AsQueryable();

            if (!string.IsNullOrWhiteSpace(query.Search))
            {
                var search = query.Search.ToLower().Trim();
                q = q.Where(r =>
                    r.Origin.ToLower().Contains(search) ||
                    r.Destination.ToLower().Contains(search));
            }

            if (!string.IsNullOrWhiteSpace(query.Origin))
                q = q.Where(r => r.Origin.ToLower() == query.Origin.ToLower().Trim());

            if (!string.IsNullOrWhiteSpace(query.Destination))
                q = q.Where(r => r.Destination.ToLower() == query.Destination.ToLower().Trim());

            // Count filtered total — runs as SELECT COUNT(*)
            var totalCount = await q.CountAsync();

            // Fetch only the requested page from DB
            var items = await q
                .OrderBy(r => r.Origin)
                .Skip((query.PageNumber - 1) * query.PageSize)
                .Take(query.PageSize)
                .Select(r => r.ToResponse())
                .ToListAsync();

            var result = new PagedResponse<RouteResponse>
            {
                Data = items,
                TotalCount = totalCount,
                PageNumber = query.PageNumber,
                PageSize = query.PageSize
            };

            // Cache the FINAL result — only 10 records, tiny JSON, fast to deserialize
            await SetCacheAsync(cacheKey, result);

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

        private async Task<List<RouteResponse>?> GetFromCacheAsync()
        {
            try
            {
                var cached = await _cache.GetStringAsync(RoutesCacheKey);

                if (string.IsNullOrEmpty(cached))
                    return null;

                return JsonSerializer.Deserialize<List<RouteResponse>>(cached);
            }
            catch (Exception ex)
            {
                // Redis is down or unreachable — log and continue to DB
                // Don't crash the request just because cache is unavailable
                _logger.LogWarning("Redis cache unavailable, falling back to database. Error: {Error}",
                    ex.Message);
                return null;
            }
        }

        private async Task SetCacheAsync(List<RouteResponse> routes)
        {
            try
            {
                var serialized = JsonSerializer.Serialize(routes);
                await _cache.SetStringAsync(RoutesCacheKey, serialized, CacheOptions);
            }
            catch (Exception ex)
            {
                // Redis write failed — log and move on
                // The request already has data from DB, don't fail because of cache
                _logger.LogWarning("Failed to write to Redis cache. Error: {Error}", ex.Message);
            }
        }

        public async Task InvalidateCacheAsync()
        {
            try
            {
                await _cache.RemoveAsync(RoutesCacheKey);
            }
            catch (Exception ex)
            {
                _logger.LogWarning("Failed to invalidate Redis cache. Error: {Error}", ex.Message);
            }
        }

        private static string BuildCacheKey(RouteQueryParams query)
        {
            // Unique key per unique combination of filters + page
            var search = query.Search?.ToLower().Trim() ?? "";
            var origin = query.Origin?.ToLower().Trim() ?? "";
            var destination = query.Destination?.ToLower().Trim() ?? "";

            return $"routes_s{search}_o{origin}_d{destination}_p{query.PageNumber}_ps{query.PageSize}";
        }

        private async Task<T?> GetFromCacheAsync<T>(string key)
        {
            try
            {
                var cached = await _cache.GetStringAsync(key);
                if (string.IsNullOrEmpty(cached)) return default;
                return JsonSerializer.Deserialize<T>(cached);
            }
            catch (Exception ex)
            {
                _logger.LogWarning("Redis read failed for key {Key}. Error: {Error}", key, ex.Message);
                return default;
            }
        }

        private async Task SetCacheAsync<T>(string key, T value)
        {
            try
            {
                var serialized = JsonSerializer.Serialize(value);
                await _cache.SetStringAsync(key, serialized, CacheOptions);
            }
            catch (Exception ex)
            {
                _logger.LogWarning("Redis write failed for key {Key}. Error: {Error}", key, ex.Message);
            }
        }
    }
}