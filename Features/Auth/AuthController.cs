using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;

namespace TransProAPI.Features.Auth
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableRateLimiting("auth")]
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

        /// <summary>
        /// Exchange a valid refresh token for a new token pair.
        /// The used refresh token is immediately rotated (invalidated).
        /// Call this when the access token expires (401 response).
        /// </summary>
        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] RefreshTokenRequest request)
        {
            var result = await _handler.RefreshAsync(request);
            return result.Success ? Ok(result) : Unauthorized(result);
        }

        /// <summary>
        /// Logout — revokes the provided refresh token.
        /// The access token will expire naturally after 15 minutes.
        /// </summary>
        [HttpPost("logout")]
        public async Task<IActionResult> Logout([FromBody] RefreshTokenRequest request)
        {
            var result = await _handler.LogoutAsync(request);
            return Ok(result);
        }
    }
}