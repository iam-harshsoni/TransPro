using TransProAPI.Domain;
using TransProAPI.Features.Drivers;
// ── Extension Method ──────────────────────────────────────────────────────────
// Kept here since it's small. Move to DriverExtensions.cs if it grows complex.

public static class DriverExtensions
{
    public static DriverResponse ToResponse(this Driver d) => new(
        d.Id,
        d.FullName,
        d.LicenseNumber,
        d.Phone,
        d.IsAvailable,
        d.CreatedAt);
}