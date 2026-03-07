using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Routes
{
    public static class RouteExtension
    {
        public static RouteResponse ToResponse(this Domain.Entities.Route r) => new(
            r.Id,
            r.Origin,
            r.Destination,
            r.DistanceKm,
            r.EstimatedHours);
    }
}