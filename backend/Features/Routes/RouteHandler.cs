using FluentValidation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using System.Text.Json;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Routes;

public class RouteHandler(
    AppDbContext _db,
    IValidator<CreateRouteRequest> _createValidator,
    IValidator<UpdateRouteRequest> _updateValidator,
    ILogger<RouteHandler> _logger,
    IDistributedCache _l2Cache,       // Redis — shared across instances
    IMemoryCache _l1Cache)            // Local memory — sub-millisecond
{
    // ── Cache Configuration ───────────────────────────────────────────────────

    // L1 — local memory, 5 minutes
    // Short because it's per-instance — stale data window is small
    private static readonly MemoryCacheEntryOptions L1Options = new()
    {
        AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5),
        SlidingExpiration = TimeSpan.FromMinutes(2)  // reset timer on access
    };

    // L2 — Redis, 1 hour
    // Longer because it's shared — all instances benefit
    private static readonly DistributedCacheEntryOptions L2Options = new()
    {
        AbsoluteExpirationRelativeToNow = TimeSpan.FromHours(1)
    };

    // Version key — increment this to invalidate ALL route cache keys at once
    private const string VersionKey = "routes_version";

    // ── Public Methods ────────────────────────────────────────────────────────

    public async Task<ApiResponses<RouteResponse>> CreateAsync(CreateRouteRequest request)
    {
        var validation = await _createValidator.ValidateAsync(request);
        if (!validation.IsValid)
            return ApiResponses<RouteResponse>.Fail("Validation failed.",
                validation.Errors.Select(e => e.ErrorMessage).ToList());

        if (await _db.Routes.AnyAsync(r =>
            r.Origin == request.Origin.Trim().ToUpper() &&
            r.Destination == request.Destination.Trim().ToUpper()))
            return ApiResponses<RouteResponse>.Fail(
                "A route with this origin and destination already exists.");

        var route = new Domain.Entities.Route
        {
            Origin = request.Origin.Trim().ToUpper(),
            Destination = request.Destination.Trim().ToUpper(),
            DistanceKm = request.DistanceKm,
            EstimatedHours = request.EstimatedHours
        };

        _db.Routes.Add(route);
        await _db.SaveChangesAsync();

        await BumpVersionAsync();

        return ApiResponses<RouteResponse>.Ok(route.ToResponse(), "Route created.");
    }

    public async Task<ApiResponses<PagedResponse<RouteResponse>>> GetAllAsync(
        RouteQueryParams query)
    {
        query.Validate();

        var cacheKey = await BuildCacheKeyAsync(query);

        // ── L1: Local Memory ─────────────────────────────────────────────────
        // Zero network — sub-millisecond on cache hit
        if (_l1Cache.TryGetValue(cacheKey, out PagedResponse<RouteResponse>? l1Result)
            && l1Result != null)
        {
            _logger.LogDebug("L1 HIT {Key}", cacheKey);
            _logger.LogDebug("L2 Redis HIT {Key}", cacheKey);
            _logger.LogDebug("Cache MISS — hitting DB for {Key}", cacheKey);
            return ApiResponses<PagedResponse<RouteResponse>>.Ok(l1Result);
        }

        // ── L2: Redis ────────────────────────────────────────────────────────
        // ~15-30ms on cache hit (same region)
        var l2Result = await GetFromRedisAsync<PagedResponse<RouteResponse>>(cacheKey);
        if (l2Result != null)
        {
            // Populate L1 so next request from this instance is instant
            _l1Cache.Set(cacheKey, l2Result, L1Options);

            _logger.LogInformation("L2 Redis HIT {Key}", cacheKey);
            return ApiResponses<PagedResponse<RouteResponse>>.Ok(l2Result);
        }

        // ── L3: Database ─────────────────────────────────────────────────────
        _logger.LogInformation("Cache MISS — hitting DB for {Key}", cacheKey);

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

        var totalCount = await q.CountAsync();

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

        // Store in both caches
        _l1Cache.Set(cacheKey, result, L1Options);
        await SetRedisAsync(cacheKey, result);

        return ApiResponses<PagedResponse<RouteResponse>>.Ok(result);
    }

    public async Task<ApiResponses<RouteResponse>> GetByIdAsync(int id)
    {
        var route = await _db.Routes
            .AsNoTracking()
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
        await BumpVersionAsync();

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
        await BumpVersionAsync();

        return ApiResponses<string>.Ok("Route deleted.");
    }

    // ── Private Helpers ───────────────────────────────────────────────────────

    // Build a versioned cache key
    // When version bumps — all old keys become stale automatically
    // because the key string changes (v1 → v2)
    private async Task<string> BuildCacheKeyAsync(RouteQueryParams query)
    {
        var version = await GetVersionAsync();
        var search = query.Search?.ToLower().Trim() ?? "";
        var origin = query.Origin?.ToLower().Trim() ?? "";
        var destination = query.Destination?.ToLower().Trim() ?? "";

        return $"routes_v{version}_s{search}_o{origin}_d{destination}_p{query.PageNumber}_ps{query.PageSize}";
    }

    // Get current cache version from Redis
    // If not set — defaults to 0
    private async Task<int> GetVersionAsync()
    {
        try
        {
            var v = await _l2Cache.GetStringAsync(VersionKey);
            return int.TryParse(v, out var version) ? version : 0;
        }
        catch
        {
            return 0;  // Redis down — use version 0, still works
        }
    }

    // Increment version — invalidates ALL existing route cache keys
    // Also clears L1 memory cache on this instance
    private async Task BumpVersionAsync()
    {
        try
        {
            var current = await GetVersionAsync();
            var newVersion = current + 1;

            await _l2Cache.SetStringAsync(
                VersionKey,
                newVersion.ToString(),
                new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromDays(30)
                });

            // Clear L1 on this instance — old keys are stale
            if (_l1Cache is MemoryCache mc)
                mc.Compact(1.0);

            _logger.LogInformation(
                "Route cache invalidated. Version bumped to {Version}", newVersion);
        }
        catch (Exception ex)
        {
            _logger.LogWarning("Cache version bump failed. Error: {Error}", ex.Message);
        }
    }

    private async Task<T?> GetFromRedisAsync<T>(string key)
    {
        try
        {
            var cached = await _l2Cache.GetStringAsync(key);
            if (string.IsNullOrEmpty(cached)) return default;
            return JsonSerializer.Deserialize<T>(cached);
        }
        catch (Exception ex)
        {
            _logger.LogWarning("Redis read failed for {Key}. Error: {Error}", key, ex.Message);
            return default;
        }
    }

    private async Task SetRedisAsync<T>(string key, T value)
    {
        try
        {
            var serialized = JsonSerializer.Serialize(value);
            await _l2Cache.SetStringAsync(key, serialized, L2Options);
        }
        catch (Exception ex)
        {
            _logger.LogWarning("Redis write failed for {Key}. Error: {Error}", key, ex.Message);
        }
    }
}