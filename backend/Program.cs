using Asp.Versioning;
using DotNetEnv;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using StackExchange.Redis;
using System.Reflection;
using System.Text;
using System.Threading.RateLimiting;
using TransProAPI.Features.Auth;
using TransProAPI.Features.Containers;
using TransProAPI.Features.Customer.CreateCustomer;
using TransProAPI.Features.Customer.DeleteCustomer;
using TransProAPI.Features.Customer.GetCustomerById;
using TransProAPI.Features.Customer.GetCustomers;
using TransProAPI.Features.Customer.UpdateCustomer;
using TransProAPI.Features.Drivers;
using TransProAPI.Features.Trips;
using TransProAPI.Features.Trucks;
using TransProAPI.Infrastructure.Persistence;
using TransProAPI.Infrastructure.Services;
using TransProAPI.Middleware;

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

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()

    .MinimumLevel.Override("Microsoft.EntityFrameworkCore.Database.Command", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)

    .WriteTo.Console(
       theme: SystemConsoleTheme.Literate,
        outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj}{NewLine}{Exception}")

    .WriteTo.File(
        path: "logs/transpro-.log",
        rollingInterval: RollingInterval.Day,
        retainedFileCountLimit: 30,
        fileSizeLimitBytes: 10_000_000,
        outputTemplate: "[{Timestamp:yyyy-MM-dd HH:mm:ss} {Level:u3}] {Message:lj}{NewLine}{Exception}")

    .Enrich.FromLogContext()
    .Enrich.WithMachineName()
    .Enrich.WithThreadId()
    .CreateLogger();

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

builder.Host.UseSerilog();

builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true; // adds api-supported-versions header to responses
});

builder.Services.AddDbContext<AppDbContext>(option =>
    option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var jwtSettings = builder.Configuration.GetSection("JwtSettings");
var secretKey = jwtSettings["SecretKey"];

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["Issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey!)),
        ClockSkew = TimeSpan.Zero
    }
);

builder.Services.AddAuthorization();

builder.Services.AddControllers()
       .ConfigureApiBehaviorOptions(options =>
       {
           options.SuppressModelStateInvalidFilter = true;
       });

builder.Services.AddValidatorsFromAssemblyContaining<Program>();

// Customer Handlers
builder.Services.AddScoped<CreateCustomerHandler>();
builder.Services.AddScoped<GetCustomerHandler>();
builder.Services.AddScoped<GetCustomerByIdHandler>();
builder.Services.AddScoped<UpdateCustomerHandler>();
builder.Services.AddScoped<DeleteCustomerHandler>();

builder.Services.AddScoped<TokenService>();

builder.Services.AddScoped<DriverHandler>();
builder.Services.AddScoped<TruckHandler>();
builder.Services.AddScoped<ContainerHandler>();
builder.Services.AddScoped<TransProAPI.Features.Routes.RouteHandler>();
builder.Services.AddScoped<TripHandler>();
builder.Services.AddScoped<AuthHandler>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "TransPro API",
        Version = "v1",
        Description = "Shipment and Trip Management System"
    });

    // Include XML comments from your summary tags
    var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
    options.IncludeXmlComments(xmlPath);

    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter: Bearer {your JWT token}"
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id   = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

builder.Services.AddCors(options =>
  {
      options.AddPolicy("AllowAll", policy =>
      {
          policy.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
          // .AllowAnyOrigin()
      });
  });

//Rate Limiting
builder.Services.AddRateLimiter(options =>
{
    // ── Policy 1: Auth endpoints — strictest limits ───────────────────────
    // Protects against brute force on login and register
    // 5 requests per minute per IP address
    // If exceeded → 429 Too Many Requests
    options.AddFixedWindowLimiter("auth", limiterOptions =>
    {
        limiterOptions.PermitLimit = 5;
        limiterOptions.Window = TimeSpan.FromMinutes(1);
        limiterOptions.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        limiterOptions.QueueLimit = 0;                                 // no queuing — reject immediately
    });

    // ── Policy 2: General API endpoints ──────────────────────────────────
    // Authenticated users get more breathing room
    // 100 requests per minute per IP address
    options.AddFixedWindowLimiter("general", limiterOptions =>
    {
        limiterOptions.PermitLimit = 100;
        limiterOptions.Window = TimeSpan.FromMinutes(1);
        limiterOptions.QueueProcessingOrder = QueueProcessingOrder.OldestFirst;
        limiterOptions.QueueLimit = 0;
    });

    // ── Global fallback — applies to ALL endpoints not covered above ──────
    // Last line of defence
    options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(context =>
    {
        // Partition by IP address — each IP gets its own counter
        // If IP can't be determined, use "unknown" as the key
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

    // ── Custom 429 Response ───────────────────────────────────────────────
    // By default ASP.NET returns an empty 429 response
    // We override it to return your standard ApiResponse envelope
    options.OnRejected = async (context, cancellationToken) =>
    {
        context.HttpContext.Response.StatusCode = StatusCodes.Status429TooManyRequests;
        context.HttpContext.Response.ContentType = "application/json";

        // Tell the client when they can try again
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

builder.Services.AddHealthChecks()
    .AddNpgSql(builder.Configuration.GetConnectionString("DefaultConnection")!);

// builder.Services.AddMemoryCache();
var redisConnection = builder.Configuration["Redis:ConnectionString"];
if (!string.IsNullOrEmpty(redisConnection))
{
    // Redis available — use distributed cache (works across instances + survives restarts)
    builder.Services.AddStackExchangeRedisCache(options =>
    {
        options.ConfigurationOptions = ConfigurationOptions.Parse(redisConnection);
        options.ConfigurationOptions.Ssl = true;                                         // ← force TLS
        options.ConfigurationOptions.AbortOnConnectFail = false;                                        // ← don't crash if Redis is temporarily down
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

try
{
    Log.Information("=== TransPro API Starting ===");

    var app = builder.Build();

    app.UseMiddleware<GlobalExceptionMiddleware>();

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

    // if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "TransPro API v1");
            c.RoutePrefix = "swagger";
        });

        using var scope = app.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        Console.WriteLine("\n🚀 Starting seed check...\n");
        await SeedData.SeedAsync(db);
        Console.WriteLine("🏁 Seed check complete.\n");
    }

    app.UseRateLimiter();
    app.UseCors("AllowAll");
    app.UseHttpsRedirection();
    app.UseAuthentication();
    app.UseAuthorization();
    app.UseDefaultFiles();
    app.UseStaticFiles();
    app.MapControllers();

    app.MapFallbackToFile("index.html");

    app.MapHealthChecks("/health");

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "=== TransPro API Failed to Start ===");
}
finally
{
    Log.CloseAndFlush();
}