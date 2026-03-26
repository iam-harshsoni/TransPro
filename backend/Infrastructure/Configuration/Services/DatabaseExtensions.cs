using Microsoft.EntityFrameworkCore;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class DatabaseExtensions
    {
        public static WebApplicationBuilder AddDatabase(this WebApplicationBuilder builder)
        {
            builder.Services.AddDbContext<AppDbContext>(option =>
                option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
            );

            builder.Services.AddHealthChecks()
                .AddNpgSql(builder.Configuration.GetConnectionString("DefaultConnection")!);

            return builder;
        }
    }
}
