using Serilog;

namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class ObservabilityExtensions
    {
        public static WebApplication UseObservability(this WebApplication app)
        {
            app.UseSerilogRequestLogging(Options =>
            {
                Options.MessageTemplate = "{RequestMethod} {RequestPath} responded {StatusCode} in {Elapsed:0.0000}ms";

                // Add extra properties to every request log
                Options.EnrichDiagnosticContext = (dignosticContext, httpContext) =>
                {
                    dignosticContext.Set("RequestHost", httpContext.Request.Host.Value);
                    dignosticContext.Set("RequestScheme", httpContext.Request.Scheme);
                    dignosticContext.Set("UserAgent", httpContext.Request.Headers.UserAgent);

                    // Log which user made the request (if authenticated)
                    if (httpContext.User.Identity?.IsAuthenticated == true)
                        dignosticContext.Set("UserId", httpContext.User.FindFirst("sub")?.Value ?? "unknown");
                };
            });

            return app;
        }
    }
}
