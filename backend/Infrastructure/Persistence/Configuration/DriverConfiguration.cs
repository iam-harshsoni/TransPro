using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TransProAPI.Domain;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class DriverConfiguration : IEntityTypeConfiguration<Driver>
    {
        public void Configure(EntityTypeBuilder<Driver> builder)
        {
            builder.ToTable("Drivers");
            builder.HasKey(d => d.Id);

            builder.Property(d => d.FullName).IsRequired().HasMaxLength(100);
            builder.Property(d => d.LicenseNumber).IsRequired().HasMaxLength(50);
            builder.Property(d => d.Phone).HasMaxLength(20);

            builder.HasIndex(c => c.LicenseNumber).IsUnique().HasDatabaseName("IX_Drivers_LicenseNumber");
            builder.HasIndex(c => c.IsAvailable).HasDatabaseName("IX_Drivers_IsAvailable");
            builder.HasIndex(c => c.CreatedAt).HasDatabaseName("IX_Drivers_CreatedAt");
        }
    }
}