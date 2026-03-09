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
            if (request is null)
                return BadRequest(new { message = "Request body could not be parsed - request is null" });

            var result = await _handler.CreateAsync(request);
            return result.Success ? Ok(result) : BadRequest(result);
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
    }
}