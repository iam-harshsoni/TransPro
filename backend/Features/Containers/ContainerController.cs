using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Features.Containers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    [EnableRateLimiting("general")]
    public class ContainerController(
        ContainerHandler _handler
    ) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateContainerRequest request)
        {
            var result = await _handler.CreateAsync(request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateContainerRequest request)
        {
            var result = await _handler.UpdateAsync(id, request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] ContainerQueryParams query)
        {
            var result = await _handler.GetAllAsync(query);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _handler.GetByIdAsync(id);
            return result.Success ? Ok(result) : NotFound(result);
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