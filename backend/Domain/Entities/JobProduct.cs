namespace TransProAPI.Domain.Entities
{
    public class JobProduct
    {
        public int Id { get; set; }
        public int JobId { get; set; }
        public int ProductId { get; set; }
        public decimal Dia { get; set; }
        public decimal Pcs { get; set; }
        public decimal Mts { get; set; }
        public decimal Cbm { get; set; }
        public decimal Frt { get; set; }
        public decimal Length { get; set; }

        public Job Job { get; set; } = null!;
        public Product Product { get; set; } = null!;
    }
}
