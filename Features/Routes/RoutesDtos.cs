using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Routes
{
    public record CreateRouteRequest(
    string Origin,
    string Destination,
    decimal DistanceKm,
    decimal EstimatedHours);

    public record UpdateRouteRequest(
        decimal DistanceKm,
        decimal EstimatedHours);

    public record RouteResponse(
        int Id,
        string Origin,
        string Destination,
        decimal DistanceKm,
        decimal EstimatedHours);
}