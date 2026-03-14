using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Customer.UpdateCustomer
{
    public class UpdateCustomerHandler(AppDbContext _db, IValidator<UpdateCustomerRequest> _validator)
    {
        public async Task<ApiResponses<string>> Handle(int id, UpdateCustomerRequest request)
        {
            //validate
            var validation = await _validator.ValidateAsync(request);
            if (!validation.IsValid)
            {
                var errors = validation.Errors.Select(e => e.ErrorMessage).ToList();
                return ApiResponses<string>.Fail("Validation Failed.", errors);
            }

            // Find the customer
            var customer = await _db.Customers.FindAsync(id);
            if (customer is null || !customer.IsActive)
                return ApiResponses<string>.Fail("Customer not found.");

            // Apply changes
            customer.FullName = request.FullName;
            customer.Phone = request.Phone;
            customer.Address = request.Address;

            // Persist
            await _db.SaveChangesAsync();

            return ApiResponses<string>.Ok("Customer updated successfully");
        }
    }
}