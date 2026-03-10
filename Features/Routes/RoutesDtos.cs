using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Common;

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

    public class RouteQueryParams : PaginationRequest
    {
        public string? Search { get; set; }
        public string? Origin { get; set; }
        public string? Destination { get; set; }
    }
}