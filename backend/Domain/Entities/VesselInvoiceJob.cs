namespace TransProAPI.Domain.Entities
{
    public class VesselInvoiceJob
    {
        public int Id { get; set; }
        public int VesselInvoiceId { get; set; }
        public int JobId { get; set; }

        public VesselInvoice VesselInvoice { get; set; } = null!;
        public Job Job { get; set; } = null!;
    }
}
