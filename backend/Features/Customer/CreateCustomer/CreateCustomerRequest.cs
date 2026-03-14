using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Customer.CreateCustomer
{
    public class CreateCustomerRequest
    {
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; }    = string.Empty;
        public string Phone { get; set; }    = string.Empty;
        public string Address { get; set; }  = string.Empty;
    }
}