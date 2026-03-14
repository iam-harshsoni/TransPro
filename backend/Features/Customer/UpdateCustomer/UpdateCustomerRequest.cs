using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Features.Customer.UpdateCustomer
{
    public class UpdateCustomerRequest
    {
        public string FullName { get; set; } = string.Empty;
        public string Phone { get; set; }    = string.Empty;
        public string Address { get; set; }  = string.Empty;

        /* Notice we don't allow Email updates here. 
        
            Email is often used as an identity anchor. Changing it requires extra verification steps (re-confirm email, check for duplicates). By excluding it from the update DTO, we make the decision explicit and intentional — not an oversight.        
        */
    }
}