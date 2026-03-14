using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Customer.CreateCustomer
{
    public class CreateCustomerResponse
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Phone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }

        /*  Why separate Request and Response DTOs? 
            The request is what the client sends — it should never include Id, CreatedAt, or internal fields. The response is what we send back — we control exactly what the client sees. Never expose your raw entity directly. This protects you from accidentally leaking sensitive fields and gives you flexibility to change your database schema without breaking your API contract.
        */
    }
}