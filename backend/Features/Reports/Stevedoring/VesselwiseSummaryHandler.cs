using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Reports.Stevedoring
{
    public class VesselwiseSummaryHandler(AppDbContext context)
    {
        public async Task<ApiResponses<PagedResponse<VesselwiseSummaryResponse>>> GetVesselwiseSummaryReportAsync(VesselwiseSummaryRequest request, CancellationToken ct = default)
        {
            if (request.FromDate == default)
                return ApiResponses<PagedResponse<VesselwiseSummaryResponse>>.Fail("Fromdate is required");
            if (request.ToDate == default)
                return ApiResponses<PagedResponse<VesselwiseSummaryResponse>>.Fail("Todate is required");
            if (request.FromDate > request.ToDate)
                return ApiResponses<PagedResponse<VesselwiseSummaryResponse>>.Fail("FromDate cannot be after ToDate");

            var query = context.VesselInvoices
                .AsNoTracking()
                .Where(x => x.Date >= request.FromDate && x.Date <= request.ToDate.AddDays(1));

            var totalCount = await query.CountAsync(ct);

            var result = await query
                .OrderByDescending(x => x.Date)
                .ThenByDescending(x => x.Id)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(x => new VesselwiseSummaryResponse(
                    x.Id,
                    x.Id2Format,
                    x.Date,
                    x.Customer.FullName,

                    x.VesselInvoiceJobs.Select(j => new JobResponse(
                        j.Job.Vessel.Name!,
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

            var response = new PagedResponse<VesselwiseSummaryResponse>()
            {
                TotalCount = totalCount,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Data = result
            };

            return ApiResponses<PagedResponse<VesselwiseSummaryResponse>>.Ok(response);
        }
    }
}
