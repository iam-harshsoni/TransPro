using Serilog;
using StackExchange.Redis;

namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class CacheExtensions
    {
        public static WebApplicationBuilder AddCacheServices(this WebApplicationBuilder builder)
        {
            builder.Services.AddMemoryCache();
            var redisConnection = builder.Configuration["Redis:ConnectionString"];
            if (!string.IsNullOrEmpty(redisConnection))
            {
                // Redis available — use distributed cache (works across instances + survives restarts)
                builder.Services.AddStackExchangeRedisCache(options =>
                {
                    options.ConfigurationOptions = ConfigurationOptions.Parse(redisConnection);
                    options.ConfigurationOptions.Ssl = true;                                         // ← force TLS
                    options.ConfigurationOptions.AbortOnConnectFail = false;                         // ← don't crash if Redis is temporarily down
                    options.InstanceName = "TransPro_";
                });

                Log.Information("Redis cache configured");
            }
            else
            {
                // Redis not configured — fall back to memory cache (local dev)
                builder.Services.AddDistributedMemoryCache();
                Log.Warning("Redis not configured, falling back to in-memory cache");
            }

            return builder;
        }
    }
}
