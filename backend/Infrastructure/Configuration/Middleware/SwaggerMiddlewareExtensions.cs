namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class SwaggerMiddlewareExtensions
    {
        public static WebApplication UseSwaggerDocs(this WebApplication app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "TransPro API v1");
                c.RoutePrefix = "swagger";
            });

            return app;
        }
    }
}
