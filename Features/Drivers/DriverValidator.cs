using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using static TransProAPI.Features.Drivers.DriverDtos;

namespace TransProAPI.Features.Drivers
{
    public class CreateDriverValidator : AbstractValidator<CreateDriverRequest>
    {
        public CreateDriverValidator()
        {
            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Full name is required.")
                .MaximumLength(100).WithMessage("Full name cannot exceed 100 characters.");

            RuleFor(x => x.LicenseNumber)
                .NotEmpty().WithMessage("License number is required.")
                .MaximumLength(50).WithMessage("License number cannot exceed 50 characters.");

            RuleFor(x => x.Phone)
                .NotEmpty().WithMessage("Phone is required.")
                .Matches(@"^\+?[0-9\s\-]{7,20}$").WithMessage("Invalid phone format.");
        }
    }

    public class UpdateDriverValidator : AbstractValidator<UpdateDriverRequest>
    {
        public UpdateDriverValidator()
        {
            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Full name is required.")
                .MaximumLength(100).WithMessage("Full name cannot exceed 100 characters.");

            RuleFor(x => x.Phone)
               .NotEmpty().WithMessage("Phone is required.")
               .Matches(@"^\+?[0-9\s\-]{7,20}$").WithMessage("Invalid phone format.");
        }
    }
}