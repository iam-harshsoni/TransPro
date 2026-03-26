using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Features.Drivers
{
    [ApiController]
    [ApiVersion(1)]
    [Route("api/[controller]")]
    [Authorize(Roles = UserRoles.Admin)]
    [EnableRateLimiting("general")]
    public class DriverController(DriverHandler _driverHandler) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateDriverRequest request)
        {
            var result = await _driverHandler.CreateAsync(request);
            return result.Success ?
                CreatedAtAction(nameof(GetById), new { id = result.Data!.Id }, result) : BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] DriverQueryParams query)
        {
            var result = await _driverHandler.GetAllAsync(query);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _driverHandler.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateDriverRequest request)
        {
            var result = await _driverHandler.UpdateAsync(id, request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Notice: this is a dedicated endpoint for a business operation.
        // PATCH /api/drivers/3/toggle-availability
        // It's not a generic update — it represents a specific state transition.
        [HttpPatch("{id:int}/toggle-availability")]
        public async Task<IActionResult> ToggleAvailability(int id)
        {
            var result = await _driverHandler.ToggleAvailabilityAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _driverHandler.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /* Why PATCH for toggle-availability and not PUT? 
        
        PUT means "replace the entire resource". PATCH means "apply a partial change". Toggling availability is a partial, targeted state change — PATCH is semantically correct. More importantly, giving it a named route (/toggle-availability) makes the API self-documenting. Anyone reading the route knows exactly what it does.
        
        */
    }
}