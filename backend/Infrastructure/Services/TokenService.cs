using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.IdentityModel.Tokens;
using Npgsql.EntityFrameworkCore.PostgreSQL.Query.ExpressionTranslators.Internal;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Services
{
    public class TokenService(IConfiguration _config)
    {
        // Access Token
        public string GenerateAccessToken(User user)
        {
            var jwtSettings = _config.GetSection("JwtSettings");
            var secretKey = jwtSettings["SecretKey"]!;
            var issuer = jwtSettings["Issuer"];
            var audience = jwtSettings["Audience"];

            var expiry = DateTime.UtcNow.AddMinutes(1);

            var claims = new[]
            {
              new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
              new Claim(JwtRegisteredClaimNames.Email, user.Email.ToString()),
              new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
              new Claim(ClaimTypes.Name, user.FullName),
              new Claim(ClaimTypes.Role, user.Role),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
               issuer: _config["JwtSettings:Issuer"],
               audience: _config["JwtSettings:Audience"],
               claims: claims,
               expires: expiry,
               signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        /*  Refresh Token
            Not a JWT - Just a cryptographically random string
            Stored in DB so it can be revoked

            Why not jwt for refresh token?
            JWT cant be revoed without a blocklist.
            A random string strong in DB can be revoken - instant revocation.
        */
        public RefreshToken GenerateRefreshToken(int userId)
        {
            //64 random bytes -> 512 bit of entropy -> impossible to guess
            var tokenBytes = RandomNumberGenerator.GetBytes(64);
            var tokenValue = Convert.ToBase64String(tokenBytes);

            return new RefreshToken
            {
                Token = tokenValue,
                UserId = userId,
                ExpiresAt = DateTime.UtcNow.AddDays(7),
                CreatedAt = DateTime.UtcNow,
                IsRevoked = false
            };
        }
    }
}