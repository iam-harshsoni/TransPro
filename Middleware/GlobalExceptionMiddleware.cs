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
                // Pass the request to the next middleware/controller If nothing throws — this completes normally
                await next(context);
            }
            catch (Exception ex)
            {
                /* Something unexpected happened anywhere in the pipeline Log the full details
                 server-side (for debugging) Return a clean, safe response to the client
                */
                logger.LogError(ex,
                    "Unhandled exception on {Method} {Path}",
                    context.Request.Method,
                    context.Request.Path);

                await HandleExceptionAsync(context, ex);
            }
        }

        public static async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            context.Response.ContentType = "application/json";

            // Map specific exception types to appropriate HTTP status codes and user-friendly messages
            var (statusCode, message) = exception switch
            {
                OperationCanceledException => (HttpStatusCode.BadRequest, "The request was cancelled."),            // Operation was cancelled — usually client disconnected

                TimeoutException => (HttpStatusCode.GatewayTimeout, "The request timed out. Please try again."),    // Database or external timeout

                ArgumentNullException or ArgumentException => (HttpStatusCode.BadRequest, "Invalid request data."), // Argument issues — usually a programming error, not user error

                _ => (HttpStatusCode.InternalServerError, "An unexpected error occured. Please try again later.")   // Everything else — don't leak internal details
            };

            context.Response.StatusCode = (int)statusCode;

            var response = ApiResponses<object>.Fail(message);

            // Serialize with camelCase to match your existing API response format
            var options = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };

            await context.Response.WriteAsync(
                JsonSerializer.Serialize(response, options));
        }
    }
}