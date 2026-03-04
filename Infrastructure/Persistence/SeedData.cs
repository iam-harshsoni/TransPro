using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Domain;
using TransProAPI.Domain.Entities;

namespace TransProAPI.Infrastructure.Persistence
{
    public static class SeedData
    {
        public static async Task SeedAsync(AppDbContext db)
        {
            await SeedCustomersAsync(db);
            await SeedDriversAsync(db);
            await SeedTrucksAsync(db);
        }

        private static async Task SeedCustomersAsync(AppDbContext db)
        {
            if (await db.Customers.AnyAsync())
            {
                Console.WriteLine("⏭  Customers already seeded. Skipping.");
                return;
            }

            Console.WriteLine("🌱 Seeding 10,000 Customers...");

            var companies = new[]
            {
                "Logistics", "Freight", "Transport", "Cargo", "Shipping",
                "Supply", "Trade", "Express", "Global", "Prime",
                "Swift", "Eagle", "Falcon", "Atlas", "Apex",
                "Continental", "National", "Pacific", "Eastern", "Western"
            };

            var suffixes = new[]
            {
                "Ltd", "Pvt Ltd", "Inc", "Corp", "Co",
                "Group", "Solutions", "Services", "International", "Enterprises"
            };

            var cities = new[]
            {
                "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
                "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala"
            };

            var areas = new[]
            {
                "Industrial Area", "Business District", "Commercial Zone",
                "Trade Center", "Market", "Plaza", "Square", "Park"
            };

            var customers = new List<Customer>();
            var random = new Random(42); // fixed seed = same data every time

            for (int i = 1; i <= 10_000; i++)
            {
                var company = companies[random.Next(companies.Length)];
                var suffix = suffixes[random.Next(suffixes.Length)];
                var city = cities[random.Next(cities.Length)];
                var area = areas[random.Next(areas.Length)];

                customers.Add(new Customer
                {
                    FullName = $"{company} {suffix} {i}",
                    Email = $"customer{i}@{company.ToLower()}{i}.com",
                    Phone = $"+92-{random.Next(300, 349)}-{random.Next(1000000, 9999999)}",
                    Address = $"Plot {random.Next(1, 999)}, {area}, {city}",
                    IsActive = random.Next(0, 10) != 0, // ~10% soft-deleted
                    CreatedAt = DateTime.UtcNow.AddDays(-random.Next(0, 730))
                });

                // Batch insert every 1,000 records — prevents memory pressure
                if (i % 1_000 == 0)
                {
                    await db.Customers.AddRangeAsync(customers);
                    await db.SaveChangesAsync();
                    customers.Clear();
                    Console.WriteLine($"   ✅ {i} customers inserted...");
                }
            }

            Console.WriteLine("✅ Customers seeded.\n");
        }

        // ── DRIVERS ──────────────────────────────────────────────────────────────

        private static async Task SeedDriversAsync(AppDbContext db)
        {
            if (await db.Drivers.AnyAsync())
            {
                Console.WriteLine("⏭  Drivers already seeded. Skipping.");
                return;
            }

            Console.WriteLine("🌱 Seeding 10,000 Drivers...");

            var firstNames = new[]
            {
                "Ahmed", "Muhammad", "Ali", "Hassan", "Usman",
                "Bilal", "Zubair", "Imran", "Nasir", "Fahad",
                "Tariq", "Khalid", "Sajid", "Waseem", "Rizwan",
                "Salman", "Kamran", "Adnan", "Faisal", "Shahid"
            };

            var lastNames = new[]
            {
                "Khan", "Ahmed", "Malik", "Raza", "Hussain",
                "Iqbal", "Siddiqui", "Sheikh", "Butt", "Chaudhry",
                "Mirza", "Qureshi", "Ansari", "Farooq", "Nawaz"
            };

            var prefixes = new[]
            {
                "KHI", "LHR", "ISB", "RWP", "FSB",
                "MLT", "PSH", "QTA", "SKT", "GJR"
            };

            var drivers = new List<Driver>();
            var random = new Random(42);
            var usedLicenses = new HashSet<string>();

            for (int i = 1; i <= 10_000; i++)
            {
                var prefix = prefixes[random.Next(prefixes.Length)];
                var year = random.Next(2010, 2024);
                var licNum = random.Next(100000, 999999);
                var license = $"{prefix}-{year}-{licNum:D6}";

                // Guarantee uniqueness
                while (usedLicenses.Contains(license))
                {
                    licNum++;
                    license = $"{prefix}-{year}-{licNum:D6}";
                }
                usedLicenses.Add(license);

                drivers.Add(new Driver
                {
                    FullName = $"{firstNames[random.Next(firstNames.Length)]} {lastNames[random.Next(lastNames.Length)]}",
                    LicenseNumber = license,
                    Phone = $"+92-{random.Next(300, 349)}-{random.Next(1000000, 9999999)}",
                    IsAvailable = random.Next(0, 5) != 0, // ~80% available
                    CreatedAt = DateTime.UtcNow.AddDays(-random.Next(0, 730))
                });

                if (i % 1_000 == 0)
                {
                    await db.Drivers.AddRangeAsync(drivers);
                    await db.SaveChangesAsync();
                    drivers.Clear();
                    Console.WriteLine($"   ✅ {i} drivers inserted...");
                }
            }

            Console.WriteLine("✅ Drivers seeded.\n");
        }

        // ── TRUCKS ───────────────────────────────────────────────────────────────

        private static async Task SeedTrucksAsync(AppDbContext db)
        {
            if (await db.Trucks.AnyAsync())
            {
                Console.WriteLine("⏭  Trucks already seeded. Skipping.");
                return;
            }

            Console.WriteLine("🌱 Seeding 10,000 Trucks...");

            var models = new[]
            {
                "Volvo FH16", "Mercedes Actros", "MAN TGX", "DAF XF", "Scania R500",
                "Iveco Stralis", "Renault T High", "Ford Cargo", "Hino 700", "Isuzu Giga",
                "FAW J6P", "Shacman X3000", "Foton Auman", "CNHTC Howo", "Beiben V3"
            };

            var codes = new[]
            {
                "LEA", "LEB", "LEC", "KAA", "KAB",
                "KAC", "IBA", "IBB", "RBA", "MBA",
                "PBA", "QBA", "FBA", "FBB", "SKA"
            };

            var trucks = new List<Truck>();
            var random = new Random(42);
            var usedPlates = new HashSet<string>();

            for (int i = 1; i <= 10_000; i++)
            {
                var code = codes[random.Next(codes.Length)];
                var digit = random.Next(1000, 9999);
                var plate = $"{code}-{digit}";

                while (usedPlates.Contains(plate))
                {
                    digit++;
                    plate = $"{code}-{digit}";
                }
                usedPlates.Add(plate);

                trucks.Add(new Truck
                {
                    PlateNumber = plate,
                    Model = $"{models[random.Next(models.Length)]} ({random.Next(2015, 2025)})",
                    Capacity = Math.Round((decimal)(random.Next(50, 300) / 10.0), 1), // 5.0–30.0 tons
                    IsAvailable = random.Next(0, 5) != 0,
                    CreatedAt = DateTime.UtcNow.AddDays(-random.Next(0, 730))
                });

                if (i % 1_000 == 0)
                {
                    await db.Trucks.AddRangeAsync(trucks);
                    await db.SaveChangesAsync();
                    trucks.Clear();
                    Console.WriteLine($"   ✅ {i} trucks inserted...");
                }
            }

            Console.WriteLine("✅ Trucks seeded.\n");
        }
    }
}