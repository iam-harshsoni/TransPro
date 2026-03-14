using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Auth
{
    public record RegisterRequest(
        string FullName,
        string Email,
        string Password,
        string Role);

    public record LoginRequest(
        string Email,
        string Password);

    public record AuthResponse(
        string AccessToken,
        string RefreshToken,
        string TokenType,       // always "Bearer"
        int ExpiresIn,          // seconds until access token expires
        string FullName,
        string Role);

    // Request to get a new Refresh Token
    public record RefreshTokenRequest(string RefreshToken);

    // Request to logout (revoke a specific token)
    public record RevokeTokenRequest(string RefreshToken);
}