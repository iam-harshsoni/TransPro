using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class Route
    {
        public int Id { get; set; }
        public string Origin { get; set; }      = string.Empty;
        public string Desitnation { get; set; } = string.Empty;
        public decimal DistanceKm { get; set; }
        public decimal EstimatedHours { get; set; }

        public ICollection<Trip> Trips {get; set;} = new List<Trip>();
    }
}