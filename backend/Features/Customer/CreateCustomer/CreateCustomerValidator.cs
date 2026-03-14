using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;

namespace TransProAPI.Features.Customer.CreateCustomer
{
    //FluentValidation
    public class CreateCustomerValidator : AbstractValidator<CreateCustomerRequest>
    {
        public CreateCustomerValidator()
        {
            RuleFor(x => x.FullName)
                .NotEmpty().WithMessage("Full Name is required")
                .MaximumLength(100).WithMessage("Full name cannot exceed 100 characters");

            RuleFor(x => x.Email)
                .NotEmpty().WithMessage("Email is required")
                .EmailAddress().WithMessage("A Valid email is required")
                .MaximumLength(150).WithMessage("Email cannot exceed 150 characters");

            RuleFor(x => x.Phone)
                .NotEmpty().WithMessage("Phone is required")
                .Matches(@"^\+?[0-9\s\-]{7,20}$").WithMessage("Phone number format is invalid.");

            RuleFor(x => x.Address)
                .NotEmpty().WithMessage("Address is required.")
                .MaximumLength(250).WithMessage("Address cannot exceed 250 characters.");

            /* Why FluentValidation instead of Data Annotations? 
                Data annotations like [Required] and [MaxLength] live inside your DTO class — mixing validation rules with data shape. FluentValidation separates them completely. Each validator is its own class, independently testable, readable, and extensible. In a real codebase with complex conditional rules, FluentValidation wins every time.
            */
        }
    }
}