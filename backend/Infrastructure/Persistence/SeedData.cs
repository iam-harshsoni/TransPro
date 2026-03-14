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
            await SeedContainersAsync(db);
            await SeedRoutesAsync(db);
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

        // ── CONTAINERS ───────────────────────────────────────────────────────────
        private static async Task SeedContainersAsync(AppDbContext db)
        {
            if (await db.Containers.AnyAsync())
            {
                Console.WriteLine("⏭  Containers already seeded. Skipping.");
                return;
            }

            Console.WriteLine("🌱 Seeding 10,000 Containers...");

            var types = new[]
            {
                "Dry", "Reefer", "Flat", "OpenTop", "Tank"
            };

            var prefixes = new[]
            {
                "MSKU", "TGHU", "OOLU", "CMAU", "HLCU",
                "MEDU", "NYKU", "APZU", "GESU", "TCLU"
            };

            var containers = new List<Container>();
            var random = new Random(42);
            var usedNumbers = new HashSet<string>();

            for (int i = 1; i <= 10_000; i++)
            {
                var prefix = prefixes[random.Next(prefixes.Length)];
                var number = random.Next(1000000, 9999999);

                var containerNumber = $"{prefix}{number}";

                // ensure unique container numbers
                while (usedNumbers.Contains(containerNumber))
                {
                    number++;
                    containerNumber = $"{prefix}{number}";
                }

                usedNumbers.Add(containerNumber);

                containers.Add(new Container
                {
                    ContainerNumber = containerNumber,
                    Type = types[random.Next(types.Length)],
                    WeightCapacity = Math.Round((decimal)(random.Next(200, 350) / 10.0), 1), // 20–35 tons
                    IsAvailable = random.Next(0, 5) != 0,
                    CreatedAt = DateTime.UtcNow.AddDays(-random.Next(0, 730))
                });

                if (i % 1000 == 0)
                {
                    await db.Containers.AddRangeAsync(containers);
                    await db.SaveChangesAsync();
                    containers.Clear();

                    Console.WriteLine($"   ✅ {i} containers inserted...");
                }
            }

            Console.WriteLine("✅ Containers seeded.\n");
        }

        // ── ROUTES ───────────────────────────────────────────────────────────────

        private static async Task SeedRoutesAsync(AppDbContext db)
        {
            if (await db.Routes.AnyAsync())
            {
                Console.WriteLine("⏭  Routes already seeded. Skipping.");
                return;
            }

            Console.WriteLine("🌱 Seeding Routes...");

            var cityMatrix = new List<(string Origin, string Destination, decimal Km, decimal Hrs)>
    {
        // ── Metro to Metro (Long Haul) ─────────────────────────────────────
        ("Mumbai",      "Delhi",           1400, 20.0m),
        ("Mumbai",      "Bangalore",        980, 14.0m),
        ("Mumbai",      "Chennai",         1330, 19.0m),
        ("Mumbai",      "Hyderabad",        710, 10.0m),
        ("Mumbai",      "Kolkata",         2050, 28.0m),
        ("Mumbai",      "Ahmedabad",        530,  7.5m),
        ("Mumbai",      "Pune",             150,  2.5m),
        ("Mumbai",      "Nagpur",           870, 12.0m),
        ("Mumbai",      "Surat",            280,  4.0m),
        ("Mumbai",      "Jaipur",          1150, 16.0m),
        ("Mumbai",      "Lucknow",         1400, 19.0m),
        ("Mumbai",      "Bhopal",           790, 11.0m),
        ("Mumbai",      "Indore",           590,  8.5m),
        ("Mumbai",      "Goa",             590,  9.0m),
        ("Mumbai",      "Vadodara",         400,  5.5m),

        // ── Delhi hub ─────────────────────────────────────────────────────
        ("Delhi",       "Jaipur",           280,  4.0m),
        ("Delhi",       "Agra",             200,  3.0m),
        ("Delhi",       "Lucknow",          550,  7.5m),
        ("Delhi",       "Chandigarh",       250,  3.5m),
        ("Delhi",       "Amritsar",         450,  6.5m),
        ("Delhi",       "Ludhiana",         310,  4.5m),
        ("Delhi",       "Dehradun",         300,  5.0m),
        ("Delhi",       "Haridwar",         220,  3.5m),
        ("Delhi",       "Meerut",            70,  1.5m),
        ("Delhi",       "Mathura",          160,  2.5m),
        ("Delhi",       "Varanasi",         820, 11.0m),
        ("Delhi",       "Patna",           1050, 14.0m),
        ("Delhi",       "Kolkata",         1470, 20.0m),
        ("Delhi",       "Bhopal",           770, 10.5m),
        ("Delhi",       "Indore",           960, 13.0m),
        ("Delhi",       "Nagpur",          1090, 15.0m),
        ("Delhi",       "Hyderabad",       1570, 21.0m),
        ("Delhi",       "Bangalore",       2150, 28.0m),
        ("Delhi",       "Chennai",         2180, 29.0m),
        ("Delhi",       "Ahmedabad",       1000, 14.0m),
        ("Delhi",       "Srinagar",         880, 13.0m),
        ("Delhi",       "Shimla",           350,  6.0m),
        ("Delhi",       "Jodhpur",          620,  8.5m),
        ("Delhi",       "Udaipur",          670,  9.5m),

        // ── Bangalore hub ─────────────────────────────────────────────────
        ("Bangalore",   "Chennai",          350,  5.0m),
        ("Bangalore",   "Hyderabad",        570,  8.0m),
        ("Bangalore",   "Mysuru",           150,  2.5m),
        ("Bangalore",   "Mangalore",        350,  6.0m),
        ("Bangalore",   "Coimbatore",       360,  5.5m),
        ("Bangalore",   "Kochi",            540,  8.0m),
        ("Bangalore",   "Thiruvananthapuram",730, 10.5m),
        ("Bangalore",   "Hubli",            410,  6.0m),
        ("Bangalore",   "Belgaum",          500,  7.5m),
        ("Bangalore",   "Kolkata",         1870, 26.0m),
        ("Bangalore",   "Pune",             840, 12.0m),
        ("Bangalore",   "Goa",             560,  8.5m),
        ("Bangalore",   "Vijayawada",       530,  7.5m),
        ("Bangalore",   "Tirupati",         250,  4.0m),
        ("Bangalore",   "Salem",            340,  5.0m),
        ("Bangalore",   "Madurai",          450,  6.5m),

        // ── Chennai hub ───────────────────────────────────────────────────
        ("Chennai",     "Hyderabad",        630,  9.0m),
        ("Chennai",     "Coimbatore",       500,  7.0m),
        ("Chennai",     "Madurai",          460,  6.5m),
        ("Chennai",     "Kolkata",         1660, 23.0m),
        ("Chennai",     "Vijayawada",       430,  6.0m),
        ("Chennai",     "Tirupati",         150,  2.5m),
        ("Chennai",     "Salem",            340,  5.0m),
        ("Chennai",     "Kochi",            680,  9.5m),
        ("Chennai",     "Thiruvananthapuram",870, 12.0m),
        ("Chennai",     "Pondicherry",      160,  2.5m),
        ("Chennai",     "Vellore",          135,  2.0m),
        ("Chennai",     "Trichy",           330,  5.0m),

        // ── Hyderabad hub ─────────────────────────────────────────────────
        ("Hyderabad",   "Vijayawada",       270,  4.0m),
        ("Hyderabad",   "Nagpur",           500,  7.0m),
        ("Hyderabad",   "Pune",             560,  8.0m),
        ("Hyderabad",   "Kolkata",         1500, 21.0m),
        ("Hyderabad",   "Warangal",         150,  2.5m),
        ("Hyderabad",   "Tirupati",         550,  8.0m),
        ("Hyderabad",   "Vishakhapatnam",   620,  9.0m),
        ("Hyderabad",   "Rajahmundry",      430,  6.5m),
        ("Hyderabad",   "Bidar",            140,  2.0m),
        ("Hyderabad",   "Nanded",           270,  4.0m),

        // ── Kolkata hub ───────────────────────────────────────────────────
        ("Kolkata",     "Patna",            600,  8.5m),
        ("Kolkata",     "Varanasi",         670,  9.5m),
        ("Kolkata",     "Bhubaneswar",      440,  6.5m),
        ("Kolkata",     "Guwahati",         1000, 15.0m),
        ("Kolkata",     "Siliguri",          600,  9.0m),
        ("Kolkata",     "Durgapur",          170,  2.5m),
        ("Kolkata",     "Asansol",           200,  3.0m),
        ("Kolkata",     "Ranchi",            380,  6.0m),
        ("Kolkata",     "Raipur",            820, 12.0m),
        ("Kolkata",     "Vishakhapatnam",    900, 13.0m),

        // ── Ahmedabad hub ─────────────────────────────────────────────────
        ("Ahmedabad",   "Surat",             270,  4.0m),
        ("Ahmedabad",   "Vadodara",          110,  1.5m),
        ("Ahmedabad",   "Rajkot",            220,  3.0m),
        ("Ahmedabad",   "Jaipur",            670,  9.5m),
        ("Ahmedabad",   "Indore",            460,  6.5m),
        ("Ahmedabad",   "Bhopal",            650,  9.0m),
        ("Ahmedabad",   "Jodhpur",           490,  7.0m),
        ("Ahmedabad",   "Udaipur",           260,  4.0m),
        ("Ahmedabad",   "Bhuj",              330,  5.0m),
        ("Ahmedabad",   "Gandhinagar",        25,  0.5m),

        // ── Pune hub ──────────────────────────────────────────────────────
        ("Pune",        "Nagpur",            710, 10.0m),
        ("Pune",        "Kolhapur",          230,  3.5m),
        ("Pune",        "Nashik",            210,  3.0m),
        ("Pune",        "Aurangabad",        235,  3.5m),
        ("Pune",        "Solapur",           255,  4.0m),
        ("Pune",        "Goa",               460,  7.0m),
        ("Pune",        "Hyderabad",         560,  8.0m),
        ("Pune",        "Bangalore",         840, 12.0m),

        // ── Nagpur hub ────────────────────────────────────────────────────
        ("Nagpur",      "Raipur",            290,  4.5m),
        ("Nagpur",      "Jabalpur",          330,  5.0m),
        ("Nagpur",      "Aurangabad",        330,  5.0m),
        ("Nagpur",      "Bhopal",            350,  5.0m),
        ("Nagpur",      "Indore",            490,  7.0m),
        ("Nagpur",      "Hyderabad",         500,  7.0m),

        // ── Jaipur hub ────────────────────────────────────────────────────
        ("Jaipur",      "Jodhpur",           340,  5.0m),
        ("Jaipur",      "Udaipur",           395,  5.5m),
        ("Jaipur",      "Kota",              250,  3.5m),
        ("Jaipur",      "Ajmer",             135,  2.0m),
        ("Jaipur",      "Bikaner",           330,  5.0m),
        ("Jaipur",      "Agra",              240,  3.5m),
        ("Jaipur",      "Lucknow",           570,  8.0m),
        ("Jaipur",      "Ahmedabad",         670,  9.5m),

        // ── Lucknow hub ───────────────────────────────────────────────────
        ("Lucknow",     "Varanasi",          320,  4.5m),
        ("Lucknow",     "Agra",              370,  5.0m),
        ("Lucknow",     "Kanpur",             90,  1.5m),
        ("Lucknow",     "Allahabad",         210,  3.0m),
        ("Lucknow",     "Patna",             530,  7.5m),
        ("Lucknow",     "Gorakhpur",         270,  4.0m),
        ("Lucknow",     "Bareilly",          270,  4.0m),
        ("Lucknow",     "Dehradun",          550,  8.0m),

        // ── Bhopal / Indore / MP ──────────────────────────────────────────
        ("Bhopal",      "Indore",            195,  3.0m),
        ("Bhopal",      "Jabalpur",          330,  5.0m),
        ("Bhopal",      "Gwalior",           425,  6.0m),
        ("Bhopal",      "Ujjain",            185,  2.5m),
        ("Indore",      "Ujjain",             55,  1.0m),
        ("Indore",      "Gwalior",           490,  7.0m),
        ("Gwalior",     "Agra",              120,  2.0m),

        // ── Northeast ─────────────────────────────────────────────────────
        ("Guwahati",    "Siliguri",          440,  7.0m),
        ("Guwahati",    "Shillong",           98,  2.0m),
        ("Guwahati",    "Dibrugarh",         480,  8.0m),
        ("Guwahati",    "Imphal",            500,  9.0m),
        ("Siliguri",    "Patna",             530,  8.0m),
        ("Siliguri",    "Kolkata",           600,  9.0m),

        // ── South India internal ──────────────────────────────────────────
        ("Coimbatore",  "Madurai",           215,  3.5m),
        ("Coimbatore",  "Kochi",             190,  3.0m),
        ("Coimbatore",  "Salem",             160,  2.5m),
        ("Coimbatore",  "Trichy",            215,  3.5m),
        ("Madurai",     "Trichy",            140,  2.0m),
        ("Madurai",     "Kochi",             360,  5.5m),
        ("Madurai",     "Thiruvananthapuram",240,  4.0m),
        ("Kochi",       "Thiruvananthapuram",210,  3.5m),
        ("Kochi",       "Kozhikode",         110,  2.0m),
        ("Kozhikode",   "Mangalore",         135,  2.5m),
        ("Vijayawada",  "Vishakhapatnam",    350,  5.0m),
        ("Vijayawada",  "Rajahmundry",       160,  2.5m),
        ("Vishakhapatnam", "Bhubaneswar",    440,  6.5m),
        ("Bhubaneswar", "Raipur",            440,  6.5m),
        ("Raipur",      "Ranchi",            420,  6.0m),
        ("Ranchi",      "Patna",             330,  5.0m),
        ("Patna",       "Varanasi",          300,  4.5m),
        ("Varanasi",    "Allahabad",         125,  2.0m),
        ("Allahabad",   "Kanpur",            190,  3.0m),

        // ── Chandigarh / Punjab / HP ──────────────────────────────────────
        ("Chandigarh",  "Amritsar",          230,  3.5m),
        ("Chandigarh",  "Ludhiana",          100,  1.5m),
        ("Chandigarh",  "Shimla",            115,  2.5m),
        ("Chandigarh",  "Dehradun",          315,  5.0m),
        ("Amritsar",    "Ludhiana",          145,  2.0m),
        ("Amritsar",    "Jammu",             210,  3.5m),
        ("Jammu",       "Srinagar",          265,  5.5m),

        // ── Rajasthan internal ────────────────────────────────────────────
        ("Jodhpur",     "Bikaner",           250,  4.0m),
        ("Jodhpur",     "Udaipur",           260,  4.0m),
        ("Jodhpur",     "Kota",             310,  4.5m),
        ("Udaipur",     "Ajmer",             280,  4.0m),
        ("Ajmer",       "Kota",             200,  3.0m),

        // ── Gujarat internal ──────────────────────────────────────────────
        ("Surat",       "Vadodara",          160,  2.5m),
        ("Surat",       "Rajkot",            390,  5.5m),
        ("Vadodara",    "Rajkot",            290,  4.0m),
        ("Rajkot",      "Bhuj",              220,  3.5m),
        ("Rajkot",      "Jamnagar",           90,  1.5m),

        // ── Goa ───────────────────────────────────────────────────────────
        ("Goa",         "Mangalore",         370,  6.0m),
        ("Goa",         "Hubli",             220,  3.5m),
        ("Goa",         "Kolhapur",          210,  3.5m),
    };

            // Build directional route list with forward + reverse
            var allRoutes = new List<(string Origin, string Destination, decimal Km, decimal Hrs)>();
            var seen = new HashSet<string>(StringComparer.OrdinalIgnoreCase);

            foreach (var r in cityMatrix)
            {
                var fwd = $"{r.Origin}|{r.Destination}";
                var rev = $"{r.Destination}|{r.Origin}";

                if (seen.Add(fwd))
                    allRoutes.Add(r);

                // Return trip is ~5% longer due to traffic/gradient differences
                if (seen.Add(rev))
                    allRoutes.Add((r.Destination, r.Origin, r.Km,
                        Math.Round(r.Hrs * 1.05m, 1)));
            }

            Console.WriteLine($"   📍 {allRoutes.Count} direct routes built. Generating via-hub routes...");

            // Expand to 10,000 using via-hub combinations
            var hubs = new[]
            {
        "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad",
        "Kolkata", "Ahmedabad", "Pune", "Nagpur", "Lucknow"
    };

            var random = new Random(42);
            var distanceLookup = allRoutes.ToDictionary(
                r => $"{r.Origin}|{r.Destination}",
                r => (r.Km, r.Hrs));

            var attempts = 0;
            var maxAttempts = 1_000_000;

            while (allRoutes.Count < 10_000 && attempts < maxAttempts)
            {
                attempts++;

                var hub = hubs[random.Next(hubs.Length)];
                var segA = allRoutes[random.Next(allRoutes.Count)];
                var segB = allRoutes[random.Next(allRoutes.Count)];

                var origin = segA.Origin;
                var destination = segB.Destination;

                if (origin == destination) continue;
                if (origin == hub) continue;
                if (destination == hub) continue;

                var key = $"{origin}|{destination}";
                if (seen.Contains(key)) continue;

                var leg1Key = $"{origin}|{hub}";
                var leg2Key = $"{hub}|{destination}";

                if (!distanceLookup.ContainsKey(leg1Key)) continue;
                if (!distanceLookup.ContainsKey(leg2Key)) continue;

                var leg1 = distanceLookup[leg1Key];
                var leg2 = distanceLookup[leg2Key];
                var totalKm = Math.Round(leg1.Km + leg2.Km, 1);
                var totalHrs = Math.Round((leg1.Hrs + leg2.Hrs) * 1.05m, 1);

                seen.Add(key);
                allRoutes.Add((origin, destination, totalKm, totalHrs));

                // Update lookup so derived routes can be used as legs too
                distanceLookup[key] = (totalKm, totalHrs);

                // Reverse
                var revKey = $"{destination}|{origin}";
                if (!seen.Contains(revKey))
                {
                    seen.Add(revKey);
                    var revHrs = Math.Round(totalHrs * 1.05m, 1);
                    allRoutes.Add((destination, origin, totalKm, revHrs));
                    distanceLookup[revKey] = (totalKm, revHrs);
                }
            }

            Console.WriteLine($"   📍 {allRoutes.Count} total routes generated. Inserting...");

            // Batch insert
            var batch = new List<Domain.Entities.Route>();
            var counter = 0;

            foreach (var r in allRoutes.Take(10_000))
            {
                batch.Add(new Domain.Entities.Route
                {
                    Origin = r.Origin,
                    Destination = r.Destination,
                    DistanceKm = r.Km,
                    EstimatedHours = r.Hrs
                });

                counter++;

                if (counter % 1_000 == 0)
                {
                    await db.Routes.AddRangeAsync(batch);
                    await db.SaveChangesAsync();
                    batch.Clear();
                    Console.WriteLine($"   ✅ {counter} routes inserted...");
                }
            }

            if (batch.Any())
            {
                await db.Routes.AddRangeAsync(batch);
                await db.SaveChangesAsync();
                Console.WriteLine($"   ✅ {counter} routes inserted...");
            }

            Console.WriteLine($"✅ Routes seeded. Total: {counter} records.\n");
        }
    }
}