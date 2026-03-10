using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Common;

namespace TransProAPI.Features.Trucks
{
    public record CreateTruckRequest(string PlateNumber, string Model, decimal Capacity);

    public record UpdateTruckRequest(string Model, decimal Capacity);

    public record TruckResponse(
        int Id,
        string PlateNumber,
        string Model,
        decimal Capacity,
        bool IsAvailable,
        DateTime CreatedAt
    );

    public class TruckQueryParams : PaginationRequest
    {
        public string? Search { get; set; }
        public bool? IsAvailable { get; set; }
        public decimal? MinCapacity { get; set; }
    }
}