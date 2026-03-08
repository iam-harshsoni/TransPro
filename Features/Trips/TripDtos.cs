using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Features.Trips
{
    public record CreateTripRequest(
        int CustomerId,
        int DriverId,
        int TruckId,
        int RouteId,
        List<int> ContainerIds,
        DateTime DepartureDate,
        string Notes);

    /* 
    Used for the LIST endpoint — lean, no heavy nested objects. When you have 1000 trips, you don't want full driver/truck objects on each row   */
    public record TripSummaryResponse(
        int Id,
        string CustomerName,
        string DriverName,
        string TruckPlate,
        string Origin,
        string Destination,
        string Status,
        DateTime DepartureDate,
        DateTime? ArrivalDate
        );

    public record TripDetailResponse(
        int Id,
        CustomerInfo Customer,
        DriverInfo Driver,
        TruckInfo Truck,
        RouteInfo Route,
        List<ContainerInfo> Containers,
        string Status,
        DateTime DepartureDate,
        DateTime? ArrivalDate,
        string Notes,
        DateTime CreatedAt);

    /* NESTED INFO RECORDS
        These are the lightweight sub-objects inside TripDetailResponse
         We don't embed full Customer/Driver/Truck objects — only what's relevant

        Why not return the full CustomerResponse here?
        Because TripDetailResponse has its own context — we only need
        what's relevant to a trip, not every field a Customer has
    */

    public record CustomerInfo(
        int Id,
        string FullName,
        string Email,
        string Phone);

    public record DriverInfo(
        int Id,
        string FullName,
        string LicenseNumber,
        string Phone);

    public record TruckInfo(
        int Id,
        string PlateNumber,
        string Model,
        decimal Capacity);

    public record RouteInfo(
        int Id,
        string Origin,
        string Destination,
        decimal DistanceKm,
        decimal EstimatedHours);

    public record ContainerInfo(
        int Id,
        string ContainerNumber,
        string Type,
        decimal WeightCapacity);
}