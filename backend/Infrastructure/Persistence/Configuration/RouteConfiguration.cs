using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class RouteConfiguration : IEntityTypeConfiguration<TransProAPI.Domain.Entities.Route>
    {
        public void Configure(EntityTypeBuilder<TransProAPI.Domain.Entities.Route> builder)
        {
            builder.ToTable("Routes");
            builder.HasKey(r => r.Id);

            builder.Property(r => r.Origin).IsRequired().HasMaxLength(100);
            builder.Property(r => r.Destination).IsRequired().HasMaxLength(100);
            builder.Property(r => r.DistanceKm).HasPrecision(10, 2);
            builder.Property(r => r.EstimatedHours).HasPrecision(10, 2);

            builder.HasIndex(r => r.Origin)
                .HasDatabaseName("IX_Routes_Origin");

            builder.HasIndex(r => r.Destination)
                .HasDatabaseName("IX_Routes_Destination");

            // Composite index — duplicate route guard uses both columns together
            builder.HasIndex(r => new { r.Origin, r.Destination })
                .HasDatabaseName("IX_Routes_Origin_Destination");
        }
    }
}