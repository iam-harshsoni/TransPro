using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class Trip
    {
        public int Id { get; set; }
        public DateTime DepartureDate { get; set; }
        public DateTime? ArrivalDate { get; set; }
        public TripStatus Status { get; set; } = TripStatus.Planned;
        public string Notes { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Foriegn Keys
        public int CustomerId { get; set; }
        public int DriverId { get; set; }
        public int TruckId { get; set; }
        public int RouteId { get; set; }

        // Navigation
        public Customer Customer { get; set; } = null!;
        public Driver Driver { get; set; } = null!;
        public Truck Truck { get; set; } = null!;
        public Route Route { get; set; } = null!;

        // Many to Many with Container
        public ICollection<TripContainer> TripContainers { get; set; } = new List<TripContainer>();
    }

    public enum TripStatus
    {
        Planned = 1,
        InTransit = 2,
        Completed = 3,
        Cancelled = 4
    }
}