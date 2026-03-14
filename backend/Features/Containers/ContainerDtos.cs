using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Common;

namespace TransProAPI.Features.Containers
{
    public record CreateContainerRequest(
          string ContainerNumber,
          string Type,
          decimal WeightCapacity
      );

    public record UpdateContainerRequest(
        string Type,
        decimal WeightCapacity
    );

    public record ContainerResponse(
        int Id,
        string ContainerNumber,
        string Type,
        decimal WeightCapacity,
        bool IsAvailable,
        DateTime CreatedAt
    );

    public class ContainerQueryParams : PaginationRequest
    {
        public string? Search { get; set; }
        public bool? IsAvailable { get; set; }
        public string? Type { get; set; }
    }
}