using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TransProAPI.Common;

namespace TransProAPI.Features.Customer.GetCustomers
{
    public class GetCustomerRespose
    {
        public int Id { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; }    = string.Empty;
        public string Phone { get; set; }    = string.Empty;
        public string Address { get; set; }  = string.Empty;
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    public class CustomerQueryParams : PaginationRequest
    {
        public string? Search { get; set; }
    }
}