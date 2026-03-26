namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class EndpointExtensions
    {
        public static WebApplication UseEndpointsConfig(this WebApplication app)
        {
            app.MapControllers();

            app.MapHealthChecks("/health");

            app.MapFallbackToFile("index.html");

            return app;
        }
    }
}
