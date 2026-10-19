using ClosedXML.Excel;
using TransProAPI.Features.Reports.Stevedoring;
using TransProAPI.Infrastructure.Services.Interfaces;

namespace TransProAPI.Infrastructure.Services
{
    public class ExportExcelService(IWebHostEnvironment environment) : IExportExcelService
    {
        public async Task<string> GenerateVesselwiseSummaryExcelAsync(IAsyncEnumerable<VesselwiseSummary> data, CancellationToken ct = default)
        {
            var exportDirectory = Path.Combine(environment.ContentRootPath, "Temp", "Exports");

            Directory.CreateDirectory(exportDirectory);

            var fileName = $"VesselwiseSummary_{Guid.NewGuid():N}.xlsx";

            var filePath = Path.Combine(exportDirectory, fileName);

            try
            {
                using var workbook = new XLWorkbook();

                var worksheet = workbook.Worksheets.Add("Vesselwise Summary");

                CreateHeader(worksheet);

                //var lastRow = await WriteData(worksheet, data, ct);

                //FormatWorkSheet(worksheet, (data.CountAsync + 1));

                //await workbook.SaveAs(filePath, ct);

                return filePath;
            }
            catch (Exception x)
            {
                if (File.Exists(filePath))
                {
                    File.Delete(filePath);
                }

                throw;
            }
        }
        private static void CreateHeader(IXLWorksheet worksheet)
        {
            worksheet.Cell(1, 1).Value = "Sr.";
            worksheet.Cell(1, 2).Value = "Invoice No";
            worksheet.Cell(1, 3).Value = "Invoice Date";
            worksheet.Cell(1, 4).Value = "Party";
            worksheet.Cell(1, 5).Value = "Vessels";

            var header = worksheet.Range("A1:E1");

            header.Style.Font.Bold = true;

            header.Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;
            header.Style.Alignment.Vertical = XLAlignmentVerticalValues.Center;
            header.Style.Fill.BackgroundColor = XLColor.LightGray;
        }

        private async static void WriteData(IXLWorksheet worksheet, IAsyncEnumerable<VesselwiseSummary> data, CancellationToken cancellationToken)
        {
            var row = 2;
            var serialNumber = 1;

            await foreach (var invoice in data)
            {
                cancellationToken.ThrowIfCancellationRequested();

                var vessels = string.Join(", ",
                    invoice.Jobs?
                    .Select(x => x.VesselName)
                    .Where(x => !string.IsNullOrWhiteSpace(x))
                    .Distinct() ?? []);

                worksheet.Cell(row, 1).Value = serialNumber;
                worksheet.Cell(row, 2).Value = invoice.InvoiceNo;
                worksheet.Cell(row, 3).Value = invoice.InvoiceDate.ToDateTime(TimeOnly.MinValue);
                worksheet.Cell(row, 4).Value = invoice.Party;
                worksheet.Cell(row, 5).Value = vessels;

                row++;
                serialNumber++;
            }
        }

        private static void FormatWorksheet(IXLWorksheet worksheet, int lastRow)
        {
            // Date format
            worksheet.Column(3).Style.DateFormat.Format = "dd-MM-yyyy";

            // Center serial number
            worksheet.Column(1).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;

            // Center invoice date
            worksheet.Column(3).Style.Alignment.Horizontal = XLAlignmentHorizontalValues.Center;

            // Allow vessels to wrap
            worksheet.Column(5).Style.Alignment.WrapText = true;

            // Freeze header
            worksheet.SheetView.FreezeRows(1);

            // Excel filter
            if (lastRow > 1)
            {
                worksheet.Range(1, 1, lastRow, 5).SetAutoFilter();
            }

            // Column widths
            worksheet.Column(1).Width = 8;
            worksheet.Column(2).Width = 24;
            worksheet.Column(3).Width = 15;
            worksheet.Column(4).Width = 35;
            worksheet.Column(5).Width = 65;

            // Header row height
            worksheet.Row(1).Height = 25;
        }
    }
}
