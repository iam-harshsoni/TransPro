using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Trucks
{
    public class TruckDto
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
    }
}