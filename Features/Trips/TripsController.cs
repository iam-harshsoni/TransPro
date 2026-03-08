using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace TransProAPI.Features.Trips
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TripsController(TripHandler _handler) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTripRequest request)
        {
            var result = await _handler.CreateAsync(request);
            return result.Success ? Ok(result) : BadRequest(request);
        }
    }
}