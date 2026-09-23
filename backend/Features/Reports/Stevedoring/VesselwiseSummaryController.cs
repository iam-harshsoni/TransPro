using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace TransProAPI.Features.Reports.Stevedoring
{
    [Route("api/[controller]")]
    [ApiVersion(1)]
    [ApiController]
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
    }
}
