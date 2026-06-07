namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class CorsExtensions
    {
        public static WebApplicationBuilder AddCorsServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.WithOrigins("http://localhost:4200", "https://localhost:8080", "http://20.55.84.94:8080")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                    //.AllowAnyOrigin();
                });
            });

            return builder;
        }
    }
}
