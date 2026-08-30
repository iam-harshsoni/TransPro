# TransPro — Transport Management System

A full-stack transport management dashboard built with **Angular 21** and **ASP.NET Core 10**, designed to manage the complete lifecycle of freight operations - from customer onboarding to trip tracking.

---

## 🚀 Live Demo

**Frontend + API:** https://transpro-1.onrender.com

> ⚠️ Hosted on Render free tier — the server may take **30–60 seconds to wake up** on first visit.

### Demo Credentials

| Role  | Email                   | Password    |
|-------|-------------------------|-------------|
| Admin | admin@transport.com     | Admin@12345 |

---

## 📦 Tech Stack

### Backend
- **ASP.NET Core 10** - REST API
- **PostgreSQL** - Primary database
- **Entity Framework Core** - ORM
- **JWT Authentication** - Access token (15 min) + Refresh token (7 days)
- **BCrypt** - Password hashing
- **FluentValidation** - Request validation
- **Serilog** - Structured logging
- **Redis** - Distributed caching (falls back to memory cache in dev)
- **Rate Limiting** - Per-endpoint rate limiting

### Frontend
- **Angular 21** - Standalone components, Signals
- **PrimeNG 21** - UI component library (Aura theme)
- **PrimeFlex** - CSS utility layout
- **JWT Interceptor** - Auto token refresh on 401

---

## ✨ Features

### Master Data
- **Customers** - Manage freight customers with search and pagination
- **Drivers** - Driver profiles with license tracking and availability toggle
- **Trucks** - Fleet management with capacity and availability status
- **Containers** - Container inventory by type and weight capacity
- **Routes** - Origin-destination routes with distance and duration

### Operations
- **Trips** - Core feature linking all entities together
  - Assign customer, driver, truck, route and multiple containers
  - Server-side autocomplete search (500ms debounce)
  - Status transitions: Planned → In Transit → Completed / Cancelled
  - Automatic resource locking/unlocking on status change
  - Full trip detail view with nested entity info

### Authentication
- JWT login with refresh token rotation
- Route guards on all dashboard pages
- Role-based access (Admin / Operator)
- Auto token refresh on expiry - seamless UX

### User Management (Admin only)
- Create system users with role assignment
- Edit user details, role, and password
- Activate / deactivate accounts

### UI/UX
- Collapsible sidebar with icon-only mode
- Responsive layout (mobile sidebar overlay)
- Keyboard shortcut: `Ctrl+K` to focus search
- Toast notifications for all actions
- Confirm dialogs for destructive actions
- Server-side pagination across all list views

---

## 🗂️ Project Structure

```
TransProAPI/
├── backend/                  # ASP.NET Core 10 API
│   ├── Features/             # Vertical slice architecture
│   │   ├── Auth/             # Login, register, refresh, logout
│   │   ├── Customer/         # CRUD handlers
│   │   ├── Drivers/
│   │   ├── Trucks/
│   │   ├── Containers/
│   │   ├── Routes/
│   │   └── Trips/            # Core feature with transactions
│   ├── Domain/               # Entities and enums
│   ├── Infrastructure/       # DbContext, TokenService, SeedData
│   ├── Middleware/           # Global exception handler
│   ├── Common/               # ApiResponse wrapper, PagedResponse
│   └── wwwroot/              # Angular production build
│
└── frontend/                 # Angular 21 SPA
    └── src/app/
        ├── core/             # Auth service, interceptor, guard
        ├── layout/           # Shell, sidebar, topbar
        ├── features/         # One folder per business domain
        │   ├── auth/
        │   ├── customers/
        │   ├── drivers/
        │   ├── trucks/
        │   ├── containers/
        │   ├── routes/
        │   ├── trips/
        │   └── users/
        └── shared/           # Shared models (ApiResponse, PaginatedResponse)
```

---

## 🛠️ Running Locally

### Prerequisites
- Node.js 20+
- .NET 10 SDK
- PostgreSQL

### Backend

```bash
cd backend

# Copy and configure environment
cp .env.example .env
# Fill in: ConnectionStrings, JwtSettings, Redis (optional)

dotnet restore
dotnet run
```

API runs at `http://localhost:5070`
Swagger UI available at `http://localhost:5070`

### Frontend

```bash
cd frontend
npm install
ng serve
```

Dashboard runs at `http://localhost:4200`

> The frontend proxies API calls to `http://localhost:5070` in development via `environment.development.ts`.

---

## 🌱 Seed Data

On first run the API automatically seeds:

| Entity     | Records |
|------------|---------|
| Customers  | 10,000  |
| Drivers    | 10,000  |
| Trucks     | 10,000  |
| Containers | 10,000  |
| Routes     | 10,000  |
| Trips      | 10,000  |

Seeding runs once — subsequent starts skip it automatically.

---

## 🔐 API Authentication

All endpoints (except `/api/auth/login` and `/api/auth/refresh`) require a Bearer token.

```http
Authorization: Bearer <access_token>
```

Token flow:
1. `POST /api/auth/login` → receive `accessToken` + `refreshToken`
2. Access token expires after **15 minutes**
3. Frontend interceptor automatically calls `POST /api/auth/refresh`
4. New token pair issued, original request retried seamlessly
5. Refresh token expires after **7 days** → full re-login required

---

## 📡 Key API Endpoints

```
POST   /api/auth/login              Login
POST   /api/auth/register           Register new user (Admin only)
POST   /api/auth/refresh            Refresh access token
POST   /api/auth/logout             Revoke refresh token

GET    /api/customers               List customers (paginated)
POST   /api/customers               Create customer
PUT    /api/customers/{id}          Update customer
DELETE /api/customers/{id}          Delete customer

GET    /api/drivers                 List drivers (paginated)
PATCH  /api/drivers/{id}/toggle-availability

GET    /api/trips                   List trips (filterable by status)
POST   /api/trips                   Create trip (validates all resource availability)
PATCH  /api/trips/{id}/status       Update trip status
PATCH  /api/trips/{id}/cancel       Cancel trip
```

---

## 🏗️ Deployment

Hosted on **Render.com** using Docker.

- Backend Dockerfile lives in `backend/`
- Angular production build is committed to `backend/wwwroot/`
- Single container serves both the API and the Angular SPA
- `MapFallbackToFile("index.html")` handles Angular client-side routing

Deploy workflow:
```bash
cd frontend
ng build --configuration=production
cp -r dist/frontend/browser/* ../backend/wwwroot/
git add . && git commit -m "deploy: update build" && git push origin develop
# Render auto-deploys on push
```

---

## 👤 Author

Built by **Harsh Soni** as a full-stack project covering Angular 21 frontend development integrated with an ASP.NET Core 10 backend.
