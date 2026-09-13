using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Common.Filters
{
    public class RequestLoggingFilter : IEndpointFilter
    {
        public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
        {
            var logger = context.HttpContext.RequestServices
                .GetRequiredService<ILogger<RequestLoggingFilter>>();

            var endpoint = context.HttpContext.GetEndpoint()?.DisplayName ?? "Unknown";
            var sw = System.Diagnostics.Stopwatch.StartNew();

            // Call the next filter or the endpoint itself
            var result = await next(context);

            sw.Stop();

            logger.LogDebug("Endpoint {Endpoint} completed in {ms}", endpoint, sw.ElapsedMilliseconds);

            return logger;
        }
    }
}