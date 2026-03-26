using TransProAPI.Middleware;

namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class CoreMiddlewareExtensions
    {
        public static WebApplication UseCoreMiddleware(this WebApplication app)
        {
            app.UseMiddleware<GlobalExceptionMiddleware>();

            return app;
        }
    }
}
