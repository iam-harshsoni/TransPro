using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Domain.Entities
{
    public class TripContainer
    {
        public int TripId { get; set; }
        public Trip Trip { get; set; } = null!;

        public int ContainerId { get; set; }
        public Container Container { get; set; } = null!;
    }
}