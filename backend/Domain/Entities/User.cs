using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string FullName { get; set; }     = string.Empty;
        public string Email { get; set; }        = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; }         = string.Empty;
        public bool IsActive { get; set; }       = true;
        public DateTime CreatedAt { get; set; }  = DateTime.UtcNow;

    }

    // Strongly typed roles - no magic strings anywhere in the codebase
    public static class UserRoles
    {
        public const string Admin    = "Admin";
        public const string Operator = "Operator";
    }

    /* Why a static class for roles instead of an enum? 
        [Authorize(Roles = "Admin")] expects a string. If you use an enum, you'd write .ToString() everywhere. A static class with string constants gives you compile-time safety AND works directly in attributes without any conversion.
    */
}