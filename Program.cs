using System.Text;
using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
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

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var builder = WebApplication.CreateBuilder(args);

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

var app = builder.Build();

/* Why first? 
Middleware executes in registration order. If the exception middleware is registered after authentication, and authentication throws — the exception middleware never sees it. First position means it wraps everything.*/
app.UseMiddleware<GlobalExceptionMiddleware>();

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