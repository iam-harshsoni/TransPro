using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Customer.GetCustomers
{
    public class GetCustomerHandler(AppDbContext _db)
    {
        public async Task<ApiResponses<List<GetCustomerRespose>>> Handle()
        {
            var customers = await _db.Customers
                .Where(c => c.IsActive)
                .OrderByDescending(c => c.CreatedAt)
                .Select(c => new GetCustomerRespose
                {
                    Id        = c.Id,
                    FullName  = c.FullName,
                    Email     = c.Email,
                    Phone     = c.Phone,
                    Address   = c.Address,
                    CreatedAt = c.CreatedAt,
                    IsActive  = c.IsActive,
                })
                .ToListAsync();

            return ApiResponses<List<GetCustomerRespose>>.Ok(customers);

            /* Why use .Select() directly instead of fetching entities then mapping?
                
                When you call .ToListAsync() after .Select(), EF Core translates the projection into a SQL SELECT with only the columns you need. If you fetch full entities first, you pull every column from the database even if you only need three fields. On a table with millions of rows and 30 columns, this difference is massive. Always project at the query level for list endpoints.
            
            */
        }
    }
}