using Microsoft.AspNetCore.RateLimiting;
using Serilog;
using System.Threading.RateLimiting;

namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class RateLimittingExtensions
    {
        public static WebApplicationBuilder AddRateLimitingServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddRateLimiter(options =>
            {
                options.AddFixedWindowLimiter("auth", limiterOptions =>
                {
                    limiterOptions.PermitLimit = 5;
                    limiterOptions.Window = TimeSpan.FromMinutes(1);
                    limiterOptions.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
                    limiterOptions.QueueLimit = 0;
                });

                options.AddFixedWindowLimiter("general", limiterOptions =>
                {
                    limiterOptions.PermitLimit = 100;
                    limiterOptions.Window = TimeSpan.FromMinutes(1);
                    limiterOptions.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
                    limiterOptions.QueueLimit = 0;
                });

                options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(context =>
                {
                    var ipAddress = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";

                    return RateLimitPartition.GetFixedWindowLimiter(
                        partitionKey: ipAddress,
                        factory: _ => new FixedWindowRateLimiterOptions
                        {
                            PermitLimit = 200,
                            Window = TimeSpan.FromMinutes(1),
                            QueueProcessingOrder = QueueProcessingOrder.OldestFirst,
                            QueueLimit = 0,
                        });
                });

                options.OnRejected = async (context, cancellationToken) =>
                {
                    context.HttpContext.Response.StatusCode = StatusCodes.Status429TooManyRequests;
                    context.HttpContext.Response.ContentType = "application/json";

                    var retryAfter = context.Lease.TryGetMetadata(
                        MetadataName.RetryAfter, out var retryAfterValue)
                        ? (int)retryAfterValue.TotalSeconds
                        : 60;
                    context.HttpContext.Response.Headers["Retry-After"] = retryAfterValue.ToString();

                    var response = new
                    {
                        success = false,
                        message = $"Too many request. Please wait {retryAfter} seconds before trying again",
                        data = (object?)null,
                        errors = Array.Empty<string>()
                    };

                    await context.HttpContext.Response.WriteAsJsonAsync(response, cancellationToken);

                    Log.Warning("Rate limit exceeded. IP: {IP} Path: {Path}",
                        context.HttpContext.Connection.RemoteIpAddress,
                        context.HttpContext.Request.Path);
                };
            });

            return builder;
        }
    }
}
