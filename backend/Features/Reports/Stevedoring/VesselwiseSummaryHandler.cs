using ClosedXML.Excel;
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

                    return new VesselwiseSummaryResponse(pagedResponse);
                });

            return ApiResponses<VesselwiseSummaryResponse>.Ok(cachedResponse!);
        }

        public async Task<Stream> GenerateVesselwiseSummaryAsync(VesselwiseSummaryRequest request, CancellationToken ct)
        {
            var data = request.PartyIds;

            using (var workbook = new XLWorkbook())
            {
                var worksheet = workbook.Worksheets.Add("VesselwiseSummary");

                worksheet.Cell(1, 1).Value = "Sr.";
                worksheet.Cell(1, 2).Value = "Invoice no";
                worksheet.Cell(1, 3).Value = "Invoice Date";
                worksheet.Cell(1, 4).Value = "Party";
                worksheet.Cell(1, 5).Value = "Vessels";

                var headerRange = worksheet.Range(1, 1, 1, 5);

                headerRange.Style.Font.Bold = true;
                headerRange.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
                headerRange.Style.Alignment.Vertical = XLAlignmentVerticalValues.Center;

                var query = context.VesselInvoices.AsNoTracking();

                if (request.PartyIds.Length > 0)
                    query = query.Where(x => request.PartyIds.Contains(x.PartyId));

                if (request.InvoiceNos.Length > 0)
                    query = query.Where(x => request.InvoiceNos.Contains(x.Id));

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
                    )).ToListAsync(ct);

                var rowIndex = 2;
                var srNo = 1;
                foreach (var item in result)
                {
                    worksheet.Cell(rowIndex, 1).Value = srNo;
                    worksheet.Cell(rowIndex, 2).Value = item.InvoiceNo.Trim();
                    worksheet.Cell(rowIndex, 3).Value = item.InvoiceDate.ToString();
                    worksheet.Cell(rowIndex, 4).Value = item.Party.Trim();
                    worksheet.Cell(rowIndex, 5).Value = string.Join(", ", item.Jobs!.Select(v => v.VesselName));

                    rowIndex++;
                    srNo++;
                }

                if (rowIndex > 2)
                {
                    worksheet.Range(2, 3, rowIndex - 1, 3).Style.DateFormat.Format = "dd/MM/yyyy";
                }

                worksheet.Column(1).Width = 8;
                worksheet.Column(2).Width = 20;
                worksheet.Column(3).Width = 15;
                worksheet.Column(4).Width = 30;
                worksheet.Column(5).Width = 50;

                worksheet.Column(5).Style.Alignment.WrapText = true;

                worksheet.SheetView.FreezeRows(1);

                var stream = new MemoryStream();
                workbook.SaveAs(stream);
                stream.Position = 0;

                return stream;

                //var fileName = $"VesselwiseSummaryReport_{Guid.NewGuid()}.xlsx";

                //using (var memoryStream = new MemoryStream())
                //{
                //    workbook.SaveAs(memoryStream);
                //    memoryStream.Seek(0, SeekOrigin.Begin);

                //    return File(memoryStream.ToArray(),
                //        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                //        , fileName);
                //}
            }
        }

        public async Task<List<InvoiceNoFilterResponse>> GetInvoiceNosAsync(InvoiceNofilterRequest request)
        {
            var search = request.Search?.Trim() ?? "";

            return await context.VesselInvoices
                .AsNoTracking()
                .Where(x => x.Id2Format.Contains(search))
                .OrderBy(x => x.Id)
                .Take(request.PageSize)
                .Select(x => new InvoiceNoFilterResponse(
                    x.Id,
                    x.Id2Format
                ))
                .ToListAsync();

        }
    }
}
