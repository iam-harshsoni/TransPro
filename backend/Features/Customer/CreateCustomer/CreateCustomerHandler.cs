using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using Microsoft.AspNetCore.StaticAssets;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;
using CustomerEntity = TransProAPI.Domain.Entities.Customer;

namespace TransProAPI.Features.Customer.CreateCustomer
{
    public class CreateCustomerHandler(AppDbContext _db, IValidator<CreateCustomerRequest> _validator)
    {
        public async Task<ApiResponses<CreateCustomerResponse>> Handler(CreateCustomerRequest request)
        {
            // 1. Validate
            var validation = await _validator.ValidateAsync(request);
            if (!validation.IsValid)
            {
                var errors = validation.Errors.Select(x => x.ErrorMessage).ToList();
                return ApiResponses<CreateCustomerResponse>.Fail("Validation failed.", errors);
            }

            //2. Check for duplicate email
            var emailExists = _db.Customers.Any(c => c.Email == request.Email);
            if (emailExists)
                return ApiResponses<CreateCustomerResponse>.Fail("A customer with this email already exists.");

            //3. Map Request -> Entity
            var customer = new CustomerEntity
            {
                FullName = request.FullName,
                Email = request.Email,
                Phone = request.Phone,
                Address = request.Address,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };

            // 4. Persist
            await _db.Customers.AddAsync(customer);
            await _db.SaveChangesAsync();

            // 5. Map Entity -> Response DTO
            var response = MapToResponse(customer);

            return ApiResponses<CreateCustomerResponse>.Ok(response, "Customer created successfully.");

        }

        private static CreateCustomerResponse MapToResponse(CustomerEntity customer) => new()
        {
            Id = customer.Id,
            FullName = customer.FullName,
            Email = customer.Email,
            Phone = customer.Phone,
            Address = customer.Address,
            CreatedAt = customer.CreatedAt,

            /*  Why is mapping inside the Handler? 
            
                In a small slice, the mapping is private to the handler that owns it. There's no need for a separate mapping class until the mapping logic becomes complex enough to warrant it. We keep things simple and colocated — a core vertical slice principle.
            */
        };
    }
}