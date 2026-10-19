using Microsoft.EntityFrameworkCore;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Customer.SearhCustomerOptions
{
    public class SearchCustomerOptionsHandler(AppDbContext context)
    {
        public async Task<List<SearchCustomerOptionsResponse>> Handle(SearchCustomerOptionsRequest request, CancellationToken ct = default)
        {
            var search = request.Search?.Trim() ?? "";

            var result = await context.Customers
                .Where(x => x.FullName.Contains(search) && x.IsActive)
                .OrderBy(x => x.FullName)
                .Take(request.PageSize)
                .Select(c => new SearchCustomerOptionsResponse
                {
                    Id = c.Id,
                    FullName = c.FullName
                }).ToListAsync(ct);

            return result;
        }
    }
}
