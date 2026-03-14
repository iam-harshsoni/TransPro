using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public string FullName { get; set; }    = string.Empty;
        public string Email { get; set; }       = string.Empty;
        public string Phone { get; set; }       = string.Empty;
        public string Address { get; set; }     = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public bool IsActive { get; set; }      = true;

        // FK - Navigation property
        public ICollection<Trip> Trips {get; set; } = new List<Trip>();
    }
}