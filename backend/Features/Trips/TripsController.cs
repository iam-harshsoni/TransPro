using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace TransProAPI.Features.Trips
{
    [ApiController]
    [ApiVersion(1)]
    [Route("api/[controller]")]
    [Authorize]
    [EnableRateLimiting("general")]
    public class TripsController(TripHandler _handler) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTripRequest request)
        {
            if (request is null)
                return BadRequest(new { message = "Request body could not be parsed - request is null" });

            var result = await _handler.CreateAsync(request);
            return result.Success ? CreatedAtAction(nameof(GetById), new { id = result.Data!.Id }, result) : BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] TripQueryParams request)
        {
            var result = await _handler.GetAllAsync(request);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _handler.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpPatch("{id:int}/status")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateTripStatusRequest request)
        {
            var result = await _handler.UpdateStatusAsync(id, request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Cancel(int id)
        {
            var result = await _handler.CancelAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpGet("crash-test")]
        public IActionResult CrashTest()
        {
            throw new Exception("Simulated server crash");
        }
    }
}