using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Domain;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Customer> Customers                   => Set<Customer>();
        public DbSet<Driver> Drivers                       => Set<Driver>();
        public DbSet<Truck> Trucks                         => Set<Truck>();
        public DbSet<Domain.Entities.Container> Containers => Set<Domain.Entities.Container>();
        public DbSet<TripContainer> TripContainers         => Set<TripContainer>();
        public DbSet<Trip> Trips                           => Set<Trip>();
        public DbSet<Domain.Entities.Route> Routes         => Set<Domain.Entities.Route>();
        public DbSet<User> Users                           => Set<User>();
        public DbSet<RefreshToken> RefreshTokens           => Set<RefreshToken>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
        }
    }
}