using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace TransProAPI.Features.Routes
{
    [ApiController]
    [ApiVersion(1.0)]
    [Route("api/v{version:apiVersion}/trans-route")]
    [Authorize]
    [EnableRateLimiting("general")]
    public class RouteController(RouteHandler _handler) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateRouteRequest request)
        {
            var result = await _handler.CreateAsync(request);
            return result.Success ? CreatedAtAction(nameof(GetById), new { id = result.Data!.Id }, result) : BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] RouteQueryParams query)
        {
            var result = await _handler.GetAllAsync(query);
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _handler.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateRouteRequest request)
        {
            var result = await _handler.UpdateAsync(id, request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpDelete("{id:int}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _handler.DeleteAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
        }
    }
}