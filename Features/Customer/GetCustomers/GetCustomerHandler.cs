using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Customer.GetCustomers
{
    public class GetCustomerHandler(AppDbContext _db)
    {
        public async Task<ApiResponses<PagedResponse<GetCustomerRespose>>> Handle(PaginationRequest request)
        {
            request.Validate();

            var stopwatch = Stopwatch.StartNew();

            var query = _db.Customers
                .AsNoTracking()
                .Where(c => c.IsActive);

            var totalCount = await query.CountAsync();

            var customers = await query
                .OrderByDescending(c => c.CreatedAt)
                .Skip((request.PageNumber - 1) * request.PageSize)
                .Take(request.PageSize)
                .Select(c => new GetCustomerRespose
                {
                    Id = c.Id,
                    FullName = c.FullName,
                    Email = c.Email,
                    Phone = c.Phone,
                    Address = c.Address,
                    CreatedAt = c.CreatedAt,
                    IsActive = c.IsActive,
                })
                .ToListAsync();

            stopwatch.Stop();
            Console.WriteLine($"Query time: {stopwatch.ElapsedMilliseconds} ms");

            var response = new PagedResponse<GetCustomerRespose>
            {
                TotalCount = totalCount,
                PageNumber = request.PageNumber,
                PageSize = request.PageSize,
                Data = customers
            };

            return ApiResponses<PagedResponse<GetCustomerRespose>>.Ok(response);

            /* Why use .Select() directly instead of fetching entities then mapping?
                
                When you call .ToListAsync() after .Select(), EF Core translates the projection into a SQL SELECT with only the columns you need. If you fetch full entities first, you pull every column from the database even if you only need three fields. On a table with millions of rows and 30 columns, this difference is massive. Always project at the query level for list endpoints.
            
            */
        }
    }
}