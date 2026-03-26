using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Infrastructure.Configuration.Middleware
{
    public static class AppInitializationExtensions
    {
        public static async Task InitializeDatabaseAsync(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            Console.WriteLine("\n🚀 Starting seed check...\n");

            await SeedData.SeedAsync(db);

            Console.WriteLine("🏁 Seed check complete.\n");
        }
    }
}
