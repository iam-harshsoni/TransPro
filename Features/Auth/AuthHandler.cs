using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Domain.Entities;
using TransProAPI.Infrastructure.Persistence;
using TransProAPI.Infrastructure.Services;

namespace TransProAPI.Features.Auth
{
    public class AuthHandler(AppDbContext _db,
        TokenService _tokenService,
        IValidator<RegisterRequest> _registerValidator,
        IValidator<LoginRequest> _loginValidator,
        IConfiguration _config
        )
    {
        public async Task<ApiResponses<AuthResponse>> RegisterAsync(RegisterRequest request)
        {
            var validation = await _registerValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<AuthResponse>.Fail("Validation failed.", validation.Errors.Select(x => x.ErrorMessage).ToList());

            if (await _db.Users.AnyAsync(x => x.Email == request.Email))
                return ApiResponses<AuthResponse>.Fail("An account with this email already exists");

            // Never store plain-text passwords
            // BCrypt handles salting automatically — no need to manage salt separately
            var user = new User
            {
                FullName = request.FullName,
                Email = request.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(request.Password),
                Role = request.Role,
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            var token = _tokenService.GenerateToken(user);
            var expiryMins = int.Parse(_config["JwtSettings:ExpiryMinutes"]!);

            return ApiResponses<AuthResponse>.Ok(new AuthResponse(
                user.Id,
                user.FullName,
                user.Email,
                user.Role,
                token,
                DateTime.UtcNow.AddMinutes(expiryMins)
            ), "Registration successful.");
        }

        public async Task<ApiResponses<AuthResponse>> LoginAsync(LoginRequest request)
        {
            var validation = await _loginValidator.ValidateAsync(request);
            if (!validation.IsValid)
                return ApiResponses<AuthResponse>.Fail("Validation Error", validation.Errors.Select(x => x.ErrorMessage).ToList());

            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == request.Email && u.IsActive);

            if (user is null || !BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                return ApiResponses<AuthResponse>.Fail("Invalid email or password");

            var token = _tokenService.GenerateToken(user);
            var expiryMins = int.Parse(_config["JwtSettings:ExpiryMinutes"]!);

            return ApiResponses<AuthResponse>.Ok(new AuthResponse(
                user.Id,
                user.FullName,
                user.Email,
                user.Role,
                token,
                DateTime.UtcNow.AddMinutes(expiryMins)
            ), "Login successful.");
        }
    }
}