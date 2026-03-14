using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace TransProAPI.Features.Trucks
{
    public class CreateTruckValidator : AbstractValidator<CreateTruckRequest>
    {
        public CreateTruckValidator()
        {
            RuleFor(x => x.PlateNumber)
                .NotEmpty().WithMessage("Plate number is required.")
                .MaximumLength(20).WithMessage("Plate number cannot exceed 20 characters.");

            RuleFor(x => x.Model)
                .NotEmpty().WithMessage("Truck model is required.")
                .MaximumLength(100).WithMessage("Model cannot exceed 100 characters.");

            RuleFor(x => x.Capacity)
                .GreaterThan(0).WithMessage("Capacity must be greater than 0.")
                .LessThanOrEqualTo(100).WithMessage("Capacity cannot exceed 100 tons.");
        }
    }

    public class UpdateTruckValidator : AbstractValidator<UpdateTruckRequest>
    {
        public UpdateTruckValidator()
        {
            RuleFor(x => x.Model)
                .NotEmpty().WithMessage("Truck model is required.")
                .MaximumLength(100).WithMessage("Model cannot exceed 100 characters.");

            RuleFor(x => x.Capacity)
                .GreaterThan(0).WithMessage("Capacity must be greater than 0.")
                .LessThanOrEqualTo(100).WithMessage("Capacity cannot exceed 100 tons.");
        }
    }
}