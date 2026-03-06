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
        int UserId,
        string FullName,
        string Email,
        string Role,
        string Token,
        DateTime ExpiresAt);
}