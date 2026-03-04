using TransProAPI.Domain;
using static TransProAPI.Features.Trucks.TruckDto;

namespace TransProAPI.Features.Trucks
{
    public static class TruckExtensions
    {
        public static TruckResponse ToResponse(this Truck t) => new(
            t.Id,
            t.PlateNumber,
            t.Model,
            t.Capacity,
            t.IsAvailable,
            t.CreatedAt);
    }
}