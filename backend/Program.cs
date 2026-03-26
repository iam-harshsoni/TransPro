using DotNetEnv;
using TransProAPI.Infrastructure.Configuration.Middleware;
using TransProAPI.Infrastructure.Configuration.Services;
using TransProAPI.Infrastructure.Services;

if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development"
    || Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT") == "Development")
{
    Env.Load();
}

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    Args = args,
    WebRootPath = "wwwroot/browser"
});

// services
builder.AddSerilogLogging();
builder.AddApiVersioningServices();
builder.AddDatabase();
builder.AddAuthenticationServices();
builder.AddControllersWithValidation();
builder.AddFeatureServices();
builder.AddSwaggerService();
builder.AddCorsServices();
builder.AddRateLimitingServices();
builder.AddCacheServices();

builder.Services.AddScoped<TokenService>();

builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
});

var app = builder.Build();

// middleware
app.UseCoreMiddleware();
app.UseObservability();
app.UseSwaggerDocs();
app.UseInfrastructure();
app.UseEndpointsConfig();

await app.RunAppAsync();