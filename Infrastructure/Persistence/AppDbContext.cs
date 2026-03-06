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
        public DbSet<Customer> Customers => Set<Customer>();
        public DbSet<Driver> Drivers => Set<Driver>();
        public DbSet<Truck> Trucks => Set<Truck>();
        public DbSet<Domain.Entities.Container> Containers => Set<Domain.Entities.Container>();
        public DbSet<TripContainer> TripContainers => Set<TripContainer>();
        public DbSet<Trip> Trips => Set<Trip>();
        public DbSet<Domain.Entities.Route> Routes => Set<Domain.Entities.Route>();
        public DbSet<User> Users => Set<User>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Customer>()
                .HasIndex(c => new { c.IsActive, c.CreatedAt })
                .HasDatabaseName("IX_Customers_IsActive_CreatedAt");

            modelBuilder.Entity<Customer>()
                .HasIndex(c => new { c.Id })
                .HasDatabaseName("IX_Customers_Id");

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // Configure composite primary key for join table
            modelBuilder.Entity<TripContainer>()
                .HasKey(tc => new { tc.TripId, tc.ContainerId });

            // Trip → Customer
            modelBuilder.Entity<Trip>()
                .HasOne(t => t.Customer)
                .WithMany(c => c.Trips)
                .HasForeignKey(t => t.CustomerId)
                .OnDelete(DeleteBehavior.Restrict);

            // Trip -> Driver
            modelBuilder.Entity<Trip>()
                .HasOne(t => t.Driver)
                .WithMany(c => c.Trips)
                .HasForeignKey(t => t.DriverId)
                .OnDelete(DeleteBehavior.Restrict);

            // Trip -> Truck
            modelBuilder.Entity<Trip>()
                .HasOne(t => t.Truck)
                .WithMany(c => c.Trips)
                .HasForeignKey(t => t.TruckId)
                .OnDelete(DeleteBehavior.Restrict);

            // Trip → Route
            modelBuilder.Entity<Trip>()
                .HasOne(t => t.Route)
                .WithMany(r => r.Trips)
                .HasForeignKey(t => t.RouteId)
                .OnDelete(DeleteBehavior.Restrict);

            // TripContainer relationships
            modelBuilder.Entity<TripContainer>()
                .HasOne(tc => tc.Trip)
                .WithMany(t => t.TripContainers)
                .HasForeignKey(tc => tc.TripId);

            modelBuilder.Entity<TripContainer>()
                .HasOne(tc => tc.Container)
                .WithMany(c => c.TripContainers)
                .HasForeignKey(tc => tc.ContainerId);

            // Store enum as string in DB (readable, not magic numbers)
            modelBuilder.Entity<Trip>()
                .Property(t => t.Status)
                .HasConversion<string>();
        }

    }
}