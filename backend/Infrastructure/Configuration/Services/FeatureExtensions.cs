using System.Reflection;

namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class FeatureExtensions
    {
        public static WebApplicationBuilder AddFeatureServices(this WebApplicationBuilder builder)
        {
            builder.Services.Scan(scan => scan
                .FromAssemblies(Assembly.GetExecutingAssembly())
                .AddClasses(classes => classes.Where(type => type.Name.EndsWith("Handler") && !type.IsAbstract))
                .AsSelfWithInterfaces()
                .WithScopedLifetime());

            return builder;
        }
    }
}
