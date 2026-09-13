using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace TransProAPI.Common.Filters
{
    /// <summary>
    /// Reusable endpoint filter that validates any request using FluentValidation.
    /// 
    /// HOW IT WORKS:
    /// When applied to an endpoint, it intercepts the request BEFORE your endpoint
    /// delegate runs. It finds the first parameter that has a registered  <!-- IValidator <T>-->,
    /// runs validation, and returns 400 automatically if validation fails.
    /// 
    /// Your handler never sees an invalid request — validation is handled here.
    /// This removes the need to call _validator.ValidateAsync() in every handler.
    ///     <!-- .AddEndpointFilter<ValidationFilter<CreateCustomerRequest>>(); -->
    /// USAGE:
    /// group.MapPost("/", CreateAsync)
    /// </summary>
    public class ValidationFilter<TRequest> : IEndpointFilter
    {
        public async ValueTask<object?> InvokeAsync(EndpointFilterInvocationContext context, EndpointFilterDelegate next)
        {
            // Find the validator for TRequest in the DI container
            var validator = context.HttpContext.RequestServices
                .GetService<IValidator<TRequest>>();

            if (validator is null)
                return await next(context);

            // Find the argument of type TRequest in the endpoint's parameters
            // context.Arguments contains all parameters your endpoint method receives
            var request = context.Arguments
                .OfType<TRequest>()
                .FirstOrDefault();

             // No matching argument found — skip and continue
            if (request is null)
                return await next(context);
            
            // Run FluentValidation
            var result = await validator.ValidateAsync(request);

            if (!result.IsValid)
            {
                var error = result.Errors
                    .Select(e => e.ErrorMessage)
                    .ToList();

                return Results.BadRequest(
                    ApiResponses<object>.Fail("Validation failed.", error));
            }

            return await next(context);
        }
    }
}