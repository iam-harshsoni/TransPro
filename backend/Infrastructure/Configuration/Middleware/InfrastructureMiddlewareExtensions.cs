namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class InfrastructureMiddlewareExtensions
    {
        public static WebApplication UseInfrastructure(this WebApplication app)
        {
            app.UseResponseCompression();
            app.UseRateLimiter();
            app.UseCors("AllowAll");

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            return app;
        }
    }
}
