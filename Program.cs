using System.Text;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;
using TransProAPI.Domain;
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

// ── Configure Serilog BEFORE anything else ────────────────────────────────────
// We configure it here so it captures startup errors too
// If we waited until after builder.Build(), crashes during startup
// would not be logged
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()

    // Silence noisy EF Core query logs in production
    // Change to Information during debugging if you need to see SQL
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore.Database.Command", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)

    // ── Console Sink ─────────────────────────────────────────────────────
    // What you see in your terminal while running
    .WriteTo.Console(
       theme: SystemConsoleTheme.Literate,
        outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}")

    // ── File Sink ────────────────────────────────────────────────────────
    // Writes to /logs/transpro-.log
    // rollingInterval: new file created every day
    // retainedFileCountLimit: keeps last 30 days of logs, deletes older ones
    // fileSizeLimitBytes: max 10MB per file, then rolls to next file
    .WriteTo.File(
        path: "logs/transpro-.log",
        rollingInterval: RollingInterval.Day,
        retainedFileCountLimit: 30,
        fileSizeLimitBytes: 10_000_000,
        outputTemplate: "[{Timestamp:yyyy-MM-dd HH:mm:ss} {Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}")

    .Enrich.FromLogContext()      // captures contextual properties added via LogContext
    .Enrich.WithMachineName()     // adds server name — useful when running multiple instances
    .Enrich.WithThreadId()        // adds thread ID — useful for debugging async issues
    .CreateLogger();

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var builder = WebApplication.CreateBuilder(args);

// Tell ASP.NET Core to use Serilog instead of default logger
builder.Host.UseSerilog();

// Add services to the container.

//Database
builder.Services.AddDbContext<AppDbContext>(option =>
    option.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// JWT Authentication
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
        ValidateLifetime = true,                                                          // rejects expired tokens
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings["Issuer"],
        ValidAudience = jwtSettings["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey!)),
        ClockSkew = TimeSpan.Zero                                                  // no grace period on expiry
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
          policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
      });
  });


// Wrap everything in try/catch so startup errors are captured
// Without this, a crash during startup produces no log output
try
{
    Log.Information("=== TransPro API Starting ===");

    var app = builder.Build();

    /* Why first? 
    Middleware executes in registration order. If the exception middleware is registered after authentication, and authentication throws — the exception middleware never sees it. First position means it wraps everything.*/
    app.UseMiddleware<GlobalExceptionMiddleware>();

    // Logs every request: method, path, status code, response time
    // Format: POST /api/trips responded 200 in 45.3ms
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

    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "TransPro API v1");
            c.RoutePrefix = string.Empty;
        });

        using var scope = app.Services.CreateScope();
        var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

        Console.WriteLine("\n🚀 Starting seed check...\n");
        await SeedData.SeedAsync(db);
        Console.WriteLine("🏁 Seed check complete.\n");
    }

    app.UseHttpsRedirection();
    app.UseAuthentication();
    app.UseAuthorization();
    app.MapControllers();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "=== TransPro API Failed to Start ===");
}
finally
{
    // Always flush logs before the process exits
    // Without this, the last few log entries might not be written to file
    Log.CloseAndFlush();
}