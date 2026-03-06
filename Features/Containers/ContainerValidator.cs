using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using static TransProAPI.Features.Containers.ContainerDtos;

namespace TransProAPI.Features.Containers
{
    public class CreateContainerValidator : AbstractValidator<CreateContainerRequest>
    {
        private static readonly string[] ValidTypes = ["Dry", "Reefer", "Flat", "OpenTop", "Tank"];

        public CreateContainerValidator()
        {
            RuleFor(x => x.ContainerNumber)
                .NotEmpty().WithMessage("Container number is required")
                .MaximumLength(20).WithMessage("Container number cannot exceed 20 characters");

            RuleFor(x => x.Type)
                .NotEmpty().WithMessage("Container type is required")
                .Must(x => ValidTypes.Contains(x))
                .WithMessage($"Type much be one of: {string.Join(", ", ValidTypes)}");

            RuleFor(x => x.WeightCapacity)
                .GreaterThan(0).WithMessage("Weight capacity must be greater then 0.")
                .LessThanOrEqualTo(50).WithMessage("Weight capacity cannot exceed 50 tons.");
        }
    }

    public class UpdateContainerValidator : AbstractValidator<UpdateContainerRequest>
    {
        private static readonly string[] ValidTypes = ["Dry", "Reefer", "Flat", "OpenTop", "Tank"];

        public UpdateContainerValidator()
        {
            RuleFor(x => x.Type)
                .NotEmpty()
                .Must(t => ValidTypes.Contains(t))
                .WithMessage($"Type must be one of: {string.Join(", ", ValidTypes)}");

            RuleFor(x => x.WeightCapacity)
                .GreaterThan(0).WithMessage("Weight capacity must be greater than 0.")
                .LessThanOrEqualTo(50).WithMessage("Weight capacity cannot exceed 50 tons.");

        }
    }
}