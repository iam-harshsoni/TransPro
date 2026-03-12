using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TransProAPI.Domain;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class TruckConfiguration : IEntityTypeConfiguration<Truck>
    {
        public void Configure(EntityTypeBuilder<Truck> builder)
        {
            builder.ToTable("Trucks");
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Model).IsRequired().HasMaxLength(200);
            builder.Property(t => t.PlateNumber).IsRequired().HasMaxLength(200);
            builder.Property(t => t.Capacity).HasPrecision(10, 2);

            builder.HasIndex(t => t.PlateNumber).IsUnique().HasDatabaseName("IX_Trucks_PlateNumber");
            builder.HasIndex(t => t.IsAvailable).HasDatabaseName("IX_Trucks_IsAvailable");
            builder.HasIndex(t => t.CreatedAt).HasDatabaseName("IX_Trucks_CreatedAt");
        }
    }
}