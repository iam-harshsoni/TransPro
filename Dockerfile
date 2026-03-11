# ── Stage 1: Build ────────────────────────────────────────────────────────────
# Use the full SDK image — needed to restore, build, and publish
# This stage is ONLY used to compile the app
# It never makes it into the final image — so its size doesn't matter
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

# Copy ONLY the project file first — before any source code
# Docker caches layers. If nothing in the .csproj changed,
# Docker reuses the cached restore layer and skips re-downloading packages.
# This makes subsequent builds significantly faster.
COPY TransProAPI.csproj ./

# Restore NuGet packages
# Runs as a separate layer so it's cached independently from source changes
RUN dotnet restore TransProAPI.csproj

# Now copy all source code
# This layer invalidates only when source files change — not on every build
COPY . ./

# Publish in Release mode to /app/publish
# --no-restore: packages already restored above, skip it
# -o: output directory
RUN dotnet publish TransProAPI.csproj \
    --configuration Release \
    --no-restore \
    --output /app/publish


# ── Stage 2: Runtime ──────────────────────────────────────────────────────────
# Use the ASP.NET runtime image — NOT the SDK
# Runtime image is ~220MB vs SDK at ~900MB
# It contains only what's needed to RUN the app, not build it
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime

# Install curl for health checks
# --no-install-recommends keeps the image thin
# Clean apt cache immediately after to reduce layer size
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Create a non-root user to run the application
# Running as root inside a container is a security risk
# If an attacker breaks out of the app, they'd have root on the host
RUN addgroup --system --gid 1001 appgroup \
    && adduser --system --uid 1001 --ingroup appgroup appuser

# Create the logs directory and give ownership to our non-root user
# Serilog needs write access here to create rolling log files
RUN mkdir -p /app/logs && chown -R appuser:appgroup /app/logs

# Copy only the published output from the build stage
# Nothing from the SDK stage comes with this — just the compiled app
COPY --from=build /app/publish .

# Give the app files to our non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Port the app listens on inside the container
# Your host can map any external port to this
EXPOSE 8080

# Tell ASP.NET Core to listen on port 8080
# Default is 5000/5001 but 8080 is the standard for containers
ENV ASPNETCORE_URLS=http://+:8080

# Set environment to Production by default
# Override with -e ASPNETCORE_ENVIRONMENT=Development when needed
ENV ASPNETCORE_ENVIRONMENT=Production

# Health check — Docker pings this every 30s
# If it fails 3 times in a row, container is marked unhealthy
HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start the application
ENTRYPOINT ["dotnet", "TransProAPI.dll"]