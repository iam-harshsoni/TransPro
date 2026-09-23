namespace TransProAPI.Domain.Entities
{
    public class VesselInvoice
    {
        public int Id { get; set; }
        public DateOnly Date { get; set; }
        public required string Id2Format { get; set; }
        public int PartyId { get; set; }

        //Navigation
        public Customer Customer { get; set; } = null!;

        //Many to Many
        public ICollection<VesselInvoiceJob> VesselInvoiceJobs { get; set; } = [];
    }
}
