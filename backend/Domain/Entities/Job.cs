using System.ComponentModel.DataAnnotations;

namespace TransProAPI.Domain.Entities
{
    public class Job
    {
        public int Id { get; set; }
        public required string Id2Format { get; set; }
        public DateOnly Date { get; set; }
        public int VesselId { get; set; }
        public int VesselVoyageId { get; set; }
        public ShipmentType ShipmentType { get; set; } = ShipmentType.Export;

        public Vessel Vessel { get; set; } = null!;
        public VesselVoyage VesselVoyage { get; set; } = null!;

        public ICollection<JobProduct> JobProducts { get; set; } = [];
        public ICollection<VesselInvoiceJob> VesselInvoiceJobs { get; set; } = [];
    }

    public enum ShipmentType
    {
        [Display(Name = "Import")] Import = 0,
        [Display(Name = "Export")] Export = 1
    }
}
