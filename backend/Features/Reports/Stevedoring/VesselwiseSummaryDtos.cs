using TransProAPI.Common;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Features.Reports.Stevedoring
{
    public class VesselwiseSummaryRequest : PaginationRequest
    {
        public DateOnly FromDate { get; init; }
        public DateOnly ToDate { get; init; }
        public string? Search { get; init; }
        public int[] PartyIds { get; init; } = [];
        public int[] InvoiceNos { get; init; } = [];
    }

    public record VesselwiseSummaryResponse(
        PagedResponse<VesselwiseSummary> Summary,
        FiltersReponse Filters);

    public record VesselwiseSummary(
        int InvoiceId,
        string InvoiceNo,
        DateOnly InvoiceDate,
        string Party,
        List<JobResponse>? Jobs);

    public record JobResponse(
        string VesselName,
        ShipmentType ShipmentType,
        DateOnly ArrivalDate,
        DateOnly SailingDate,
        List<CargoResponse>? Cargos);

    public record CargoResponse(
        string ProductName,
        decimal Pcs,
        decimal Cbm,
        decimal Frt,
        decimal Length,
        bool IsCBM);

    // Filters
    public record FiltersReponse(List<PartyFilterResponse> PartyFilterResponses, List<InvoiceNoFilterResponse> InvoiceNoFilterResponses);

    public record PartyFilterResponse(int Id, string Name);
    public record InvoiceNoFilterResponse(int Id, string Name);
}
