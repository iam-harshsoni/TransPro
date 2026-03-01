using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Domain
{
    public class Driver
    {
        public int Id { get; set; }
        public string FirstName { get; set; }     = string.Empty;
        public string LicenseNumber { get; set; } = string.Empty;
        public string Phone { get; set; }         = string.Empty;
        public bool IsAvailable { get; set; }     = true;
        public DateTime CreatedAt { get; set; }   = DateTime.UtcNow;

        public ICollection<Trip> Trips {get; set;} = new List<Trip>();
    }
}