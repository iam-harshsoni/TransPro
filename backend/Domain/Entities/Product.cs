namespace TransProAPI.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public required string Name { get; set; }

        public ICollection<JobProduct> JobProducts { get; set; } = [];
    }
}
