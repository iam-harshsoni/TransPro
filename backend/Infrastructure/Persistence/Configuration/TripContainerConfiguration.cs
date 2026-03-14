using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class TripContainerConfiguration : IEntityTypeConfiguration<TripContainer>
    {
        public void Configure(EntityTypeBuilder<TripContainer> builder)
        {
            builder.ToTable("TripContainers");

            // Composite primary key — this automatically creates an index
            builder.HasKey(tc => new { tc.TripId, tc.ContainerId });

            builder.HasOne(tc => tc.Trip)
            .WithMany(t => t.TripContainers)
            .HasForeignKey(tc => tc.TripId);

            builder.HasOne(tc => tc.Container)
                .WithMany(c => c.TripContainers)
                .HasForeignKey(tc => tc.ContainerId);
        }
    }
}