using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Domain
{
    public class Truck
    {
        public int Id { get; set; }
        public string PlateNumber { get; set; } = string.Empty;
        public string Model { get; set; }       = string.Empty;
        public decimal Capacity { get; set; }  // in tons
        public bool IsAvailable { get; set; }   = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<Trip> Trips {get; set;} = new List<Trip>();
    }
}