using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class RefreshToken
    {
        public int Id { get; set; }
        public string Token { get; set; } = string.Empty;
        public int UserId { get; set; }
        public DateTime ExpiresAt { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public bool IsRevoked { get; set; } = false;
        public DateTime? RevokedAt { get; set; }

        // Navigation property
        public User User { get; set; } = null!;

        // Computed — no need to store this, derived from the two fields above
        // A token is valid only if it hasn't expired AND hasn't been revoked
        public bool IsActive => !IsRevoked && DateTime.UtcNow < ExpiresAt;
    }
}