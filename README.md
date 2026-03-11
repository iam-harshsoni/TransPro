# TransPro API

A production-grade Transport Management System (TMS) REST API built with .NET 10 and PostgreSQL. Designed to manage the full lifecycle of freight trips — from dispatching drivers and trucks to tracking shipments across routes.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | ASP.NET Core (.NET 10) |
| Database | PostgreSQL |
| ORM | Entity Framework Core (Code First) |
| Authentication | JWT Bearer Tokens + BCrypt |
| Validation | FluentValidation |
| Logging | Serilog (Console + Rolling File) |
| Architecture | Vertical Slice Architecture |

---

## Architecture

The project follows **Vertical Slice Architecture** — each feature is self-contained in its own folder with exactly 4 files:

```
Features/
└── Trip/
    ├── TripDtos.cs         ← Request/Response records
    ├── TripValidator.cs    ← FluentValidation rules
    ├── TripHandler.cs      ← All business logic
    └── TripsController.cs  ← HTTP routing only
```

**Rules enforced across every feature:**
- Controllers contain zero business logic
- All responses use `ApiResponse<T>` wrapper
- All list responses use `PagedResponse<T>` with pagination
- All read queries use `AsNoTracking()`
- All multi-table writes use transactions
- Soft delete on master data (IsActive = false)
- All DateTime values stored and compared in UTC

---

## Project Structure

```
TransProAPI/
├── Common/
│   ├── ApiResponse.cs              ← Standardized response envelope
│   ├── PagedResponse.cs
│   ├── PaginationRequest.cs
├── Domain/
│   └── Entities/                   ← Customer, Driver, Truck, Container, Route, Trip, User
├── Features/
│   ├── Auth/                       ← Register, Login, JWT
│   ├── Customers/
│   ├── Drivers/
│   ├── Trucks/
│   ├── Containers/
│   ├── Routes/
│   └── Trips/
├── Infrastructure/
│   ├── Persistence/
│   │   ├── AppDbContext.cs
│   │   └── SeedData.cs
│   └── Services/
│       └── TokenService.cs
├── Middleware/
│   └── GlobalExceptionMiddleware.cs
└── logs/                           ← Rolling log files (auto-created)
```

---

## Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download)
- [PostgreSQL 15+](https://www.postgresql.org/download/)

### 1. Clone the Repository

```bash
git clone https://github.com/yourname/TransProAPI.git
cd TransProAPI
```

### 2. Configure the Database

Open `appsettings.json` and update the connection string:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5432;Database=transpro_db;Username=postgres;Password=yourpassword"
  }
}
```

### 3. Configure JWT

```json
{
  "JwtSettings": {
    "SecretKey": "your-secret-key-minimum-32-characters-long",
    "Issuer": "TransProApi",
    "Audience": "TransProClient",
    "ExpiryMinutes": 60
  }
}
```

### 4. Apply Migrations and Run

```bash
dotnet ef database update
dotnet run
```

On first run in Development mode, the database is automatically seeded with:
- 10,000 Customers
- 10,000 Drivers
- 10,000 Trucks
- 50 Containers
- 10,000 Routes (Indian city matrix)

### 5. Open Swagger

```
https://localhost:7247/swagger
```

---

## API Reference

### Authentication

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/auth/register` | Public | Register a new user |
| POST | `/api/auth/login` | Public | Login and receive JWT token |

**Roles:** `Admin`, `Operator`

All endpoints except Auth require a Bearer token:
```
Authorization: Bearer eyJhbGci...
```

---

### Customers

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/customers` | Auth | Paginated list with search |
| GET | `/api/customers/{id}` | Auth | Get customer by ID |
| POST | `/api/customers` | Auth | Create customer |
| PUT | `/api/customers/{id}` | Auth | Update customer |
| DELETE | `/api/customers/{id}` | Admin | Soft delete customer |

**Query Parameters:**
```
pageNumber   int     default: 1
pageSize     int     default: 10, max: 100
search       string  filters by name or email
isActive     bool    filters by active status
```

---

### Drivers

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/drivers` | Auth | Paginated list |
| GET | `/api/drivers/{id}` | Auth | Get driver by ID |
| POST | `/api/drivers` | Auth | Create driver |
| PUT | `/api/drivers/{id}` | Auth | Update driver |
| PATCH | `/api/drivers/{id}/toggle-availability` | Auth | Toggle availability |
| DELETE | `/api/drivers/{id}` | Admin | Delete driver |

**Query Parameters:**
```
pageNumber    int     default: 1
pageSize      int     default: 10, max: 100
search        string  filters by name or license number
isAvailable   bool    filters by availability
```

---

### Trucks

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/trucks` | Auth | Paginated list |
| GET | `/api/trucks/{id}` | Auth | Get truck by ID |
| POST | `/api/trucks` | Auth | Create truck |
| PUT | `/api/trucks/{id}` | Auth | Update truck |
| PATCH | `/api/trucks/{id}/toggle-availability` | Auth | Toggle availability |
| DELETE | `/api/trucks/{id}` | Admin | Delete truck |

**Query Parameters:**
```
pageNumber    int      default: 1
pageSize      int      default: 10, max: 100
search        string   filters by plate number or model
isAvailable   bool     filters by availability
minCapacity   decimal  filters by minimum capacity (tons)
```

---

### Containers

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/containers` | Auth | Paginated list |
| GET | `/api/containers/{id}` | Auth | Get container by ID |
| POST | `/api/containers` | Auth | Create container |
| PUT | `/api/containers/{id}` | Auth | Update container |
| DELETE | `/api/containers/{id}` | Admin | Delete container |

**Container Types:** `Dry`, `Reefer`, `Flat`, `OpenTop`, `Tank`

**Query Parameters:**
```
pageNumber    int     default: 1
pageSize      int     default: 10, max: 100
search        string  filters by container number
isAvailable   bool    filters by availability
type          string  filters by container type
```

---

### Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/routes` | Auth | Paginated list |
| GET | `/api/routes/{id}` | Auth | Get route by ID |
| POST | `/api/routes` | Auth | Create route |
| PUT | `/api/routes/{id}` | Auth | Update route |
| DELETE | `/api/routes/{id}` | Admin | Delete route |

**Query Parameters:**
```
pageNumber    int     default: 1
pageSize      int     default: 10, max: 100
search        string  filters by origin or destination
origin        string  exact match on origin city
destination   string  exact match on destination city
```

---

### Trips

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/api/trips` | Auth | Create trip |
| GET | `/api/trips` | Auth | Paginated list with filters |
| GET | `/api/trips/{id}` | Auth | Full trip detail |
| PATCH | `/api/trips/{id}/status` | Auth | Update trip status |
| DELETE | `/api/trips/{id}` | Admin | Cancel trip |

**Query Parameters:**
```
pageNumber    int       default: 1
pageSize      int       default: 10, max: 100
status        int       1=Planned, 2=InTransit, 3=Completed, 4=Cancelled
customerId    int       filter by customer
driverId      int       filter by driver
fromDate      datetime  filter departure date from
toDate        datetime  filter departure date to
```

**Trip Status Lifecycle:**
```
Planned → InTransit → Completed
Planned → Cancelled
InTransit → Cancelled
```
Completed and Cancelled are terminal states — no further transitions allowed.

**Resource Locking:** When a trip is created, the assigned driver, truck, and all containers are marked unavailable. They are automatically released when the trip is Completed or Cancelled.

---

## Response Format

All endpoints return a consistent envelope:

```json
{
  "success": true,
  "message": "Trip created successfully.",
  "data": { },
  "errors": []
}
```

All list endpoints return paginated responses:

```json
{
  "success": true,
  "data": {
    "data": [ ],
    "totalCount": 10000,
    "pageNumber": 1,
    "pageSize": 10,
    "totalPages": 1000
  }
}
```

---

## Error Handling

All errors — validation, business rule violations, and unexpected server errors — return the same envelope shape with `success: false`.

```json
{
  "success": false,
  "message": "Driver 'Ahmed Khan' is currently unavailable.",
  "data": null,
  "errors": []
}
```

Unhandled exceptions are caught by `GlobalExceptionMiddleware`, logged server-side with full stack traces, and returned to the client as a safe generic 500 message.

---

## Logging

Serilog writes structured logs to both the console and daily rolling files:

```
logs/
└── transpro-20260310.log
└── transpro-20260309.log
```

Log levels by environment:

| Environment | Default | EF Core Queries |
|-------------|---------|-----------------|
| Development | Debug | Information (SQL visible) |
| Production | Information | Warning (SQL silenced) |

---

## Seed Data

Seed data runs automatically in `Development` mode on startup. All seeds are idempotent — running the app multiple times will not duplicate records.

| Table | Records | Notes |
|-------|---------|-------|
| Customers | 10,000 | ~10% soft-deleted, Indian cities |
| Drivers | 10,000 | ~80% available |
| Trucks | 10,000 | ~80% available, real models |
| Containers | 50 | All types, all available |
| Routes | 10,000 | Indian city matrix with hub expansion |

---

## Development Notes

- Always send `DateTime` values in UTC format: `2026-12-01T08:00:00Z`
- `pageSize` is capped at 100 regardless of what is sent
- Email addresses are case-insensitively unique per customer
- Soft-deleted customers (`isActive: false`) are excluded from all queries by default
- All database timestamps are stored as `timestamp with time zone` (UTC)
