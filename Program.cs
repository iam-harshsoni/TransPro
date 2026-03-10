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

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()

    .MinimumLevel.Override("Microsoft.EntityFrameworkCore.Database.Command", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)

    .WriteTo.Console(
       theme: SystemConsoleTheme.Literate,
        outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}")

    .WriteTo.File(
        path: "logs/transpro-.log",
        rollingInterval: RollingInterval.Day,
        retainedFileCountLimit: 30,
        fileSizeLimitBytes: 10_000_000,
        outputTemplate: "[{Timestamp:yyyy-MM-dd HH:mm:ss} {Level:u3}] [{SourceContext}] {Message:lj}{NewLine}{Exception}")

    .Enrich.FromLogContext()
    .Enrich.WithMachineName()
    .Enrich.WithThreadId() 
    .CreateLogger();

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog();

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
    Log.CloseAndFlush();
}