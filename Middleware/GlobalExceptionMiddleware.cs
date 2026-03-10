using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using TransProAPI.Common;

namespace TransProAPI.Middleware
{
    public class GlobalExceptionMiddleware(
            RequestDelegate next,
            ILogger<GlobalExceptionMiddleware> logger)
    {
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                // Serilog captures structured properties with {Name} syntax
                // These become searchable fields in log files
                logger.LogError(ex,
                    "Unhandled exception. Method: {Method} Path: {Path} User: {User}",
                    context.Request.Method,
                    context.Request.Path,
                    context.User.Identity?.Name ?? "anonymous");

                await HandleExceptionAsync(context, ex);
            }
        }

        public static async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";

            var (statusCode, message) = exception switch
            {
                OperationCanceledException => (HttpStatusCode.BadRequest, "The request was cancelled."),
                TimeoutException => (HttpStatusCode.GatewayTimeout, "The request timed out. Please try again."),
                ArgumentNullException or ArgumentException => (HttpStatusCode.BadRequest, "Invalid request data."),
                _ => (HttpStatusCode.InternalServerError, "An unexpected error occured. Please try again later.")
            };

            context.Response.StatusCode = (int)statusCode;

            var response = ApiResponses<object>.Fail(message);

            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            await context.Response.WriteAsync(
                JsonSerializer.Serialize(response, options));
        }
    }
}