using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class ContainerConfiguration : IEntityTypeConfiguration<Container>
    {
        public void Configure(EntityTypeBuilder<Container> builder)
        {
            builder.ToTable("Containers");
            builder.HasKey(c => c.Id);

            builder.Property(c => c.ContainerNumber).IsRequired().HasMaxLength(50);
            builder.Property(c => c.Type).IsRequired().HasMaxLength(20);
            builder.Property(c => c.WeightCapacity).HasPrecision(10, 2);

            builder.HasIndex(c => c.ContainerNumber)
                .IsUnique()
                .HasDatabaseName("IX_Containers_ContainerNumber");

            builder.HasIndex(c => c.Type)
                .HasDatabaseName("IX_Containers_Type");

            builder.HasIndex(c => c.IsAvailable)
                .HasDatabaseName("IX_Containers_IsAvailable");

            builder.HasIndex(c => c.CreatedAt)
                .HasDatabaseName("IX_Containers_CreatedAt");
        }
    }
}