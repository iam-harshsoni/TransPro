using Asp.Versioning;

namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class ApiVersioningExtensions
    {
        public static WebApplicationBuilder AddApiVersioningServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddApiVersioning(options =>
            {
                options.DefaultApiVersion = new ApiVersion(1);
                options.AssumeDefaultVersionWhenUnspecified = true;
                options.ReportApiVersions = true; // adds api-supported-versions header to responses
            });

            return builder;
        }
    }
}
