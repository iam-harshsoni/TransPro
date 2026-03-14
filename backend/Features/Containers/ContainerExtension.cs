using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Containers
{
    public static class ContainerExtension
    {
        public static ContainerResponse ToResponse(this TransProAPI.Domain.Entities.Container c) => new(
            c.Id,
            c.ContainerNumber,
            c.Type,
            c.WeightCapacity,
            c.IsAvailable,
            c.CreatedAt);
    }
}