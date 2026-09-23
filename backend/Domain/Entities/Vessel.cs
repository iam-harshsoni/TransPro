namespace TransProAPI.Domain.Entities
{
    public class Vessel
    {
        public int Id { get; set; }
        public string? Prefix { get; set; }
        public string? Name { get; set; }

        public ICollection<Job> Jobs { get; set; } = [];
        public ICollection<VesselVoyage> VesselVoyages { get; set; } = [];
    }
}
