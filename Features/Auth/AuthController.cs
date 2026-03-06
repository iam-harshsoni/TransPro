using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TransProAPI.Features.Auth
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController(AuthHandler _handler) : ControllerBase
    {
        /// <summary>Register a new user (Admin or Operator)</summary>
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await _handler.RegisterAsync(request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        /// <summary>Login and receive a JWT token</summary>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var result = await _handler.LoginAsync(request);
            return result.Success ? Ok(result) : Unauthorized(result);
        }
    }
}