namespace TransProAPI.Domain.Entities
{
    public class VesselVoyage
    {
        public int Id { get; set; }
        public int VesselId { get; set; }
        public DateOnly ArrivalDate { get; set; }
        public DateOnly SailingDate { get; set; }

        public Vessel Vessel { get; set; } = null!;
    }
}
