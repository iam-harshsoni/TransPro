using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class TripConfiguration : IEntityTypeConfiguration<Trip>
    {
        public void Configure(EntityTypeBuilder<Trip> builder)
        {
            builder.ToTable("Trips");
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Status).HasConversion<string>().HasMaxLength(20);
            builder.Property(t => t.Notes).HasMaxLength(500);

            // Foreign key relationships with restrict delete
            builder.HasOne(c => c.Customer).WithMany(t => t.Trips).HasForeignKey(t => t.CustomerId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(c => c.Driver).WithMany(t => t.Trips).HasForeignKey(t => t.DriverId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(c => c.Truck).WithMany(t => t.Trips).HasForeignKey(t => t.TruckId).OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(c => c.Route).WithMany(t => t.Trips).HasForeignKey(t => t.RouteId).OnDelete(DeleteBehavior.Restrict);

            //Index
            builder.HasIndex(t => t.Status)
            .HasDatabaseName("IX_Trips_Status");

            builder.HasIndex(t => t.CustomerId)
                .HasDatabaseName("IX_Trips_CustomerId");

            builder.HasIndex(t => t.DriverId)
                .HasDatabaseName("IX_Trips_DriverId");

            builder.HasIndex(t => t.TruckId)
                .HasDatabaseName("IX_Trips_TruckId");

            builder.HasIndex(t => t.RouteId)
                .HasDatabaseName("IX_Trips_RouteId");

            builder.HasIndex(t => t.DepartureDate)
                .HasDatabaseName("IX_Trips_DepartureDate");

            builder.HasIndex(t => t.CreatedAt)
                .HasDatabaseName("IX_Trips_CreatedAt");

            //Composite - most common query is filter by status and date range
            builder.HasIndex(t => new { t.Status, t.DepartureDate }).HasDatabaseName("IX_Trips_Status_DepartureDate");

        }
    }
}