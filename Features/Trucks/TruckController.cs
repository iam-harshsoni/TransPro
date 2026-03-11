using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Features.Trucks
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = UserRoles.Admin)]
    public class TruckController(TruckHandler _truckHandler) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTruckRequest request)
        {
            var result = await _truckHandler.CreateAsync(request);
            return result.Success ? CreatedAtAction(nameof(GetById), new { id = result.Data!.Id }, result) : BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] TruckQueryParams query)
        {
            var result = await _truckHandler.GetAllAsync(query);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _truckHandler.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateTruckRequest request)
        {
            var result = await _truckHandler.UpdateAsync(id, request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        // Notice: this is a dedicated endpoint for a business operation.
        // PATCH /api/drivers/3/toggle-availability
        // It's not a generic update — it represents a specific state transition.
        [HttpPatch("{id:int}/toggle-availability")]
        public async Task<IActionResult> ToggleAvailability(int id)
        {
            var result = await _truckHandler.ToggleAvailabilityAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Deleted(int id)
        {
            var result = await _truckHandler.DeleteAsync(id);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}