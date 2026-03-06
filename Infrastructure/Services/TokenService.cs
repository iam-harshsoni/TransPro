using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using Npgsql.EntityFrameworkCore.PostgreSQL.Query.ExpressionTranslators.Internal;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Services
{
    public class TokenService(IConfiguration _config)
    {
        public string GenerateToken(User user)
        {
            // Claims are the data embedded in the token payload
            // These are available anywhere in your app via HttpContext.User
            var claims = new[]
            {
              new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
              new Claim(JwtRegisteredClaimNames.Email, user.Email.ToString()),
              new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
              new Claim(ClaimTypes.Name, user.FullName),
              new Claim(ClaimTypes.Role, user.Role),
            };

            var key = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(_config["JwtSettings:SecretKey"]!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expiry = DateTime.UtcNow.AddMinutes(
                            int.Parse(_config["JwtSettings:ExpiryMinutes"]!));

            var token = new JwtSecurityToken(
                issuer            : _config["JwtSettings:Issuer"],
                audience          : _config["JwtSettings:Audience"],
                claims            : claims,
                expires           : expiry,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);

            /* What are Claims? 
            
            Claims are key-value pairs baked into the token. Sub is the user ID. Role is what makes [Authorize(Roles = "Admin")] work. When ASP.NET Core validates the token, it extracts all claims and populates HttpContext.User automatically — that's why you can call User.Identity.Name or User.IsInRole("Admin") anywhere in a controller.
            */
        }
    }
}