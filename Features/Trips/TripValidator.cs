using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace TransProAPI.Features.Trips
{
    public class TripValidator : AbstractValidator<CreateTripRequest>
    {
        public TripValidator()
        {
            RuleFor(x => x.CustomerId)
                .GreaterThan(0).WithMessage("A valid customer must be selected");

            RuleFor(x => x.DriverId)
                .GreaterThan(0).WithMessage("A valid driver must be selected");

            RuleFor(x => x.TruckId)
                .GreaterThan(0).WithMessage("A valid truck must be selected");

            RuleFor(x => x.RouteId)
                .GreaterThan(0).WithMessage("A valid route must be selected");

            /*  Container IDs Rule 
                    Rule 1: list must not be empty — a trip with no containers
                            makes no business sense
                    Rule 2: no duplicates — assigning container #5 twice to the
                            same trip is a data error, not a valid operation
                    Rule 3: every ID in the list must be positive
            */

            RuleFor(x => x.ContainerIds)
                .NotEmpty().WithMessage("At least one container must be assigned to the trip");

            RuleFor(x => x.ContainerIds)
                .Must(ids => ids.All(id => id > 0))
                .WithMessage("All container IDs must be valid positive numbers.")
                .When(x => x.ContainerIds is { Count: > 0 });

            RuleFor(x => x.ContainerIds)
                .Must(ids => ids.Distinct().Count() == ids.Count)
                .WithMessage("Duplicate container IDs are not allowed.")
                .When(x => x.ContainerIds is { Count: > 0 });

            /*  Departure Date Rule
                    Rule: must be in the future
                    Why: creating a trip that departs in the past makes no sense operationally — you can't dispatch a driver yesterday 
                    Note: we compare against UtcNow because our entire system stores and works in UTC — mixing local and UTC times causes subtle bugs that are very hard to debug  
             */

            RuleFor(x => x.DepartureDate)
                .GreaterThan(DateTime.UtcNow).WithMessage("Departure date must be in the future.");

            RuleFor(x => x.Notes)
                .MaximumLength(500)
                .WithMessage("Notes cannot exceed 500 characters.")
                .When(x => !string.IsNullOrEmpty(x.Notes));
        }
    }
}