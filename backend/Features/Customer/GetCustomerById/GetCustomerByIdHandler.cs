using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Customer.GetCustomerById
{
    public class GetCustomerByIdHandler(AppDbContext _db)
    {
        public async Task<ApiResponses<GetCustomerByIdResponse>> Handle(int id)
        {
            var customer = await _db.Customers
                .Where(c => c.Id == id && c.IsActive)
                .Select(c => new GetCustomerByIdResponse
                {
                    Id        = c.Id,
                    FullName  = c.FullName,
                    Email     = c.Email,
                    Phone     = c.Phone,
                    Address   = c.Address,
                    IsActive  = c.IsActive,
                    CreatedAt = c.CreatedAt,
                })
                .FirstOrDefaultAsync();

            if (customer is null)
                return ApiResponses<GetCustomerByIdResponse>.Fail("Customer not found");

            return ApiResponses<GetCustomerByIdResponse>.Ok(customer);
        }
    }
}