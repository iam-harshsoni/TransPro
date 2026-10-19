using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Features.Reports.Stevedoring
{
    [ApiController]
    [ApiVersion(1.0)]
    [Route("api/v{version:apiVersion}/reports/stevedoring/vesselwise-summary")]
    [EnableRateLimiting("general")]
    public class VesselwiseSummaryController(VesselwiseSummaryHandler handler) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> GetVesselwiseSummaryReportAsync([FromBody] VesselwiseSummaryRequest request, CancellationToken ct = default)
        {
            if (request is null)
                return BadRequest(new { message = "Request body could not be parsed - request is null" });

            var result = await handler.GetVesselwiseSummaryReportAsync(request, ct);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpGet("search-invoiceno")]
        public async Task<IActionResult> SearchInvoiceNo([FromQuery] InvoiceNofilterRequest request)
        {
            if (request is null)
                return BadRequest(new { message = "Request body could no be parsed- required is null" });

            var result = await handler.GetInvoiceNosAsync(request);
            return Ok(result);
        }

        //[HttpGet("export")]
        //public async Task<IActionResult> GenerateVesselwiseSummaryReport([FromQuery] VesselwiseSummaryRequest request, CancellationToken ct = default)
        //{
        //    if (request is null)
        //        return BadRequest(new { message = "Request body could not be parsed - request is null" });

        //    var stream = await handler.GenerateVesselwiseSummaryAsync(request, ct);

        //    var fileName = $"VesselwiseSummaryReport_{DateTime.UtcNow:yyyyMMdd_HHmmss}.xlsx";

        //    return File(
        //        stream,
        //        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        //        fileName);

        //}

        [HttpPost("export")]
        public async Task<IActionResult> GenerateVesselwiseSummaryReport([FromBody] VesselwiseSummaryRequest request, CancellationToken ct = default)
        {
            if (request is null)
                return BadRequest(new { message = "Request body could not be parsed - request is null" });

            var stream = await handler.GenerateVesselwiseSummaryAsync(request, ct);

            var fileName = $"VesselwiseSummaryReport_{DateTime.UtcNow:yyyyMMdd_HHmmss}.xlsx";

            return File(
                stream,
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                fileName);

        }
    }
}
