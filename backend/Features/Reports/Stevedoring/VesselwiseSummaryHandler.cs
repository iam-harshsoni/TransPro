using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Reports.Stevedoring
{
    public class VesselwiseSummaryHandler(AppDbContext context, IMemoryCache memoryCache)
    {
        public async Task<ApiResponses<VesselwiseSummaryResponse>> GetVesselwiseSummaryReportAsync(VesselwiseSummaryRequest request, CancellationToken ct = default)
        {
            if (request.FromDate == default)
                return ApiResponses<VesselwiseSummaryResponse>.Fail("Fromdate is required");
            if (request.ToDate == default)
                return ApiResponses<VesselwiseSummaryResponse>.Fail("Todate is required");
            if (request.FromDate > request.ToDate)
                return ApiResponses<VesselwiseSummaryResponse>.Fail("FromDate cannot be after ToDate");
            if (request.PageNumber < 1)
                return ApiResponses<VesselwiseSummaryResponse>.Fail("PageNumber must be greater than 0");
            if (request.PageSize < 1)
                return ApiResponses<VesselwiseSummaryResponse>.Fail("PageSize must be greater than 0");

            var partyIdsKey = request.PartyIds is { Length: > 0 }
                ? string.Join(",", request.PartyIds.Order())
                : "all";

            var invoiceNosKey = request.InvoiceNos is { Length: > 0 }
                ? string.Join(",", request.InvoiceNos.Order())
                : "all";

            var filterCacheKey = $"vessel-summary-filters:{request.FromDate:yyyyMMdd}:{request.ToDate:yyyyMMdd}";

            var filters = await memoryCache.GetOrCreateAsync(filterCacheKey, async entry =>
            {
                entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(15);

                var filterQuery = context.VesselInvoices
                    .AsNoTracking()
                    .Where(x => x.Date >= request.FromDate && x.Date <= request.ToDate);

                var parties = await filterQuery
                    .Select(x => new { x.PartyId, x.Customer.FullName })
                    .Distinct()
                    .OrderBy(x => x.FullName)
                    .Select(x => new PartyFilterResponse(x.PartyId, x.FullName))
                    .ToListAsync(ct);

                var invNos = await filterQuery
                    .Select(x => new { x.Id, x.Id2Format })
                    .Distinct()
                    .OrderBy(x => x.Id2Format)
                    .Select(x => new InvoiceNoFilterResponse(x.Id, x.Id2Format))
                    .ToListAsync(ct);

                return new FiltersReponse(parties, invNos);
            });

            var cacheKey =
                $"vessel-summary:" +
                $"{request.FromDate:yyyyMMdd}:" +
                $"{request.ToDate:yyyyMMdd}:" +
                $"{partyIdsKey}:" +
                $"{invoiceNosKey}:" +
                $"{request.Search?.Trim()}:" +
                $"{request.PageNumber}:" +
                $"{request.PageSize}";

            var cachedResponse = await memoryCache.GetOrCreateAsync(
                cacheKey,
                async entry =>
                {
                    entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(15);
                    entry.SlidingExpiration = TimeSpan.FromMinutes(5);

                    var query = context.VesselInvoices
                        .AsNoTracking()
                        .Where(x => x.Date >= request.FromDate && x.Date <= request.ToDate);

                    //filter
                    if (request.PartyIds.Length > 0)
                        query = query.Where(x => request.PartyIds.Contains(x.PartyId));

                    if (request.InvoiceNos.Length > 0)
                        query = query.Where(x => request.InvoiceNos.Contains(x.Id));

                    if (!string.IsNullOrWhiteSpace(request.Search))
                    {
                        var search = request.Search.Trim().ToLower();
                        //query = query.Where(x => x.Id2Format.Contains(search) || x.Customer.FullName.ToLower().Contains(search));
                        query = query.Where(x =>
                            EF.Functions.ILike(x.Id2Format, $"%{search}%") ||
                            EF.Functions.ILike(x.Customer.FullName, $"%{search}%")
                        );
                    }

                    var totalCount = await query.CountAsync(ct);

                    var result = await query
                        .OrderByDescending(x => x.Date)
                        .ThenByDescending(x => x.Id)
                        .Skip((request.PageNumber - 1) * request.PageSize)
                        .Take(request.PageSize)
                        .AsSplitQuery()
                        .Select(x => new VesselwiseSummary(
                            x.Id,
                            x.Id2Format,
                            x.Date,
                            x.Customer.FullName,

                            x.VesselInvoiceJobs.Select(j => new JobResponse(
                                j.Job.Vessel.Prefix! + " - " + j.Job.Vessel.Name!,
                                j.Job.ShipmentType,
                                j.Job.VesselVoyage.ArrivalDate,
                                j.Job.VesselVoyage.SailingDate,

                                j.Job.JobProducts.Select(p => new CargoResponse(
                                    p.Product.Name,
                                    p.Pcs,
                                    p.Cbm,
                                    p.Frt,
                                    p.Length,
                                    EF.Functions.Like(p.Product.Name, "%Project%")
                                )).ToList()
                            )).ToList()
                        )).ToListAsync();

                    var pagedResponse = new PagedResponse<VesselwiseSummary>()
                    {
                        TotalCount = totalCount,
                        PageNumber = request.PageNumber,
                        PageSize = request.PageSize,
                        Data = result
                    };

                    return new VesselwiseSummaryResponse(pagedResponse, filters!);
                });

            return ApiResponses<VesselwiseSummaryResponse>.Ok(cachedResponse!);
        }
    }
}
