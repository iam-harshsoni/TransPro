using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Drivers
{
    public record CreateDriverRequest(string FullName, string LicenseNumber, string Phone);

    public record UpdateDriverRequest(string FullName, string Phone);

    public record DriverResponse(
        int Id,
        string FullName,
        string LicenseNumber,
        string Phone,
        bool IsAvailable,
        DateTime CreatedAt);
}