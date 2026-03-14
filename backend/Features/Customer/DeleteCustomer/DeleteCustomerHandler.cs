using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Common;
using TransProAPI.Infrastructure.Persistence;

namespace TransProAPI.Features.Customer.DeleteCustomer
{
    public class DeleteCustomerHandler(AppDbContext _db)
    {
        public async Task<ApiResponses<string>> Handle(int id)
        {
            var customer = await _db.Customers.FindAsync(id);
            if (customer is null || !customer.IsActive)
                return ApiResponses<string>.Fail("Customer not found.");

            // Soft delete - we never destroy data, we just hide it
            customer.IsActive = false;
            await _db.SaveChangesAsync();

            return ApiResponses<string>.Ok("Customer deleted successfully.");

            /*Why soft delete?
                
                In a real transport system, a customer who is "deleted" may still have historical trips linked to them. Hard deleting would either fail (foreign key violation) or cascade and destroy trip history — both are terrible outcomes. Soft delete sets IsActive = false. The data stays. History is preserved. The customer just disappears from all active queries. This is industry standard.
            
            */
        }
    }
}