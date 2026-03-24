FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY TransProAPI.csproj ./

RUN dotnet restore TransProAPI.csproj

COPY . ./

RUN dotnet publish TransProAPI.csproj \
    --configuration Release \
    --no-restore \
    --output /app/publish


# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine AS runtime

# RUN apt-get update \
#     && apt-get install -y --no-install-recommends curl \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 8080

ENV ASPNETCORE_URLS=http://+:8080

ENV ASPNETCORE_ENVIRONMENT=Production

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start the application
ENTRYPOINT ["dotnet", "TransProAPI.dll"]