using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class Container
    {
        public int Id { get; set; }
        public string ContainerNumber { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;   // e.g. Dry, Reefer, Flat
        public decimal WeightCapacity { get; set; }         // in tons
        public bool IsAvailable { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Many-to-many with Trip
        public ICollection<TripContainer> TripContainers { get; set; } = new List<TripContainer>();

    }
}