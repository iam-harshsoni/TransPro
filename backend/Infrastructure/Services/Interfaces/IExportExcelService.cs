using TransProAPI.Features.Reports.Stevedoring;

namespace TransProAPI.Infrastructure.Services.Interfaces
{
    public interface IExportExcelService
    {
        Task<string> GenerateVesselwiseSummaryExcelAsync(IAsyncEnumerable<VesselwiseSummary> data, CancellationToken ct = default);
    }
}
