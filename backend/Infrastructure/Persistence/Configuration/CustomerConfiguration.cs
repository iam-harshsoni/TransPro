using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence.Configuration
{
    public class CustomerConfiguration : IEntityTypeConfiguration<Customer>
    {
        public void Configure(EntityTypeBuilder<Customer> builder)
        {
            builder.ToTable("Customers");
            builder.HasKey(c => c.Id);

            builder.Property(c => c.FullName).IsRequired().HasMaxLength(100);
            builder.Property(c => c.Email).IsRequired().HasMaxLength(200);
            builder.Property(c => c.Phone).HasMaxLength(20);
            builder.Property(c => c.Address).HasMaxLength(300);

            builder.HasIndex(c => c.Email).IsUnique().HasDatabaseName("IX_Customers_Email");
            builder.HasIndex(c => c.IsActive).HasDatabaseName("IX_Customers_IsActive");
            builder.HasIndex(c => c.CreatedAt).HasDatabaseName("IX_Customers_CreatedAt");
        }
    }
}