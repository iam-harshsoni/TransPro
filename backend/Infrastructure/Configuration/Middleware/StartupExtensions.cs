using Serilog;

namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class StartupExtensions
    {
        public static async Task RunAppAsync(this WebApplication app)
        {
            try
            {
                Log.Information("=== TransPro API Starting ===");

                await app.InitializeDatabaseAsync();

                await app.RunAsync();
            }
            catch (Exception ex)
            {
                Log.Fatal(ex, "=== TransPro API Failed to Start ===");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }
    }
}
