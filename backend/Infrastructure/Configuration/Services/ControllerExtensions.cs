using FluentValidation;

namespace TransProAPI.Infrastructure.Configuration.Services
{
    public static class ControllerExtensions
    {
        public static WebApplicationBuilder AddControllersWithValidation(this WebApplicationBuilder builder)
        {
            builder.Services.AddControllers()
               .ConfigureApiBehaviorOptions(options =>
               {
                   options.SuppressModelStateInvalidFilter = true;
               });

            builder.Services.AddValidatorsFromAssemblyContaining<Program>();

            return builder;
        }
    }
}
