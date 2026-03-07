using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace TransProAPI.Features.Routes
{
    public class CreateRouteValidator : AbstractValidator<CreateRouteRequest>
    {
        public CreateRouteValidator()
        {
            RuleFor(x => x.Origin)
                .NotEmpty().WithMessage("Origin is required.")
                .MaximumLength(100);

            RuleFor(x => x.Destination)
                .NotEmpty().WithMessage("Destination is required.")
                .MaximumLength(100);

            RuleFor(x => x)
                .Must(x => x.Origin != x.Destination)
                .WithMessage("Origin and destination cannot be the same.");

            RuleFor(x => x.DistanceKm)
                .GreaterThan(0).WithMessage("Distance must be greater than 0.");

            RuleFor(x => x.EstimatedHours)
                .GreaterThan(0).WithMessage("Estimated hours must be greater than 0.");
        }
    }

    public class UpdateRouteValidator : AbstractValidator<UpdateRouteRequest>
    {
        public UpdateRouteValidator()
        {
            RuleFor(x => x.DistanceKm)
                .GreaterThan(0).WithMessage("Distance must be greater than 0.");

            RuleFor(x => x.EstimatedHours)
                .GreaterThan(0).WithMessage("Estimated hours must be greater than 0.");
        }
    }
}