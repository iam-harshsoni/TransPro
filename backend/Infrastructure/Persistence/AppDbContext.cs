using Microsoft.EntityFrameworkCore;
using TransProAPI.Domain;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Customer> Customers => Set<Customer>();
        public DbSet<Driver> Drivers => Set<Driver>();
        public DbSet<Truck> Trucks => Set<Truck>();
        public DbSet<Domain.Entities.Container> Containers => Set<Domain.Entities.Container>();
        public DbSet<TripContainer> TripContainers => Set<TripContainer>();
        public DbSet<Trip> Trips => Set<Trip>();
        public DbSet<Domain.Entities.Route> Routes => Set<Domain.Entities.Route>();
        public DbSet<User> Users => Set<User>();
        public DbSet<RefreshToken> RefreshTokens => Set<RefreshToken>();
        public DbSet<Vessel> Vessels => Set<Vessel>();
        public DbSet<Product> Products => Set<Product>();
        public DbSet<Job> Jobs => Set<Job>();
        public DbSet<JobProduct> JobProducts => Set<JobProduct>();
        public DbSet<VesselVoyage> VesselVoyages => Set<VesselVoyage>();
        public DbSet<VesselInvoice> VesselInvoices => Set<VesselInvoice>();
        public DbSet<VesselInvoiceJob> VesselInvoiceJobs => Set<VesselInvoiceJob>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        }
    }
}