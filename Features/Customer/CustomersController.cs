using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TransProAPI.Features.Customer.CreateCustomer;
using TransProAPI.Features.Customer.DeleteCustomer;
using TransProAPI.Features.Customer.GetCustomerById;
using TransProAPI.Features.Customer.GetCustomers;
using TransProAPI.Features.Customer.UpdateCustomer;

namespace TransProAPI.Features.Customer
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController(
        CreateCustomerHandler _createCustomerHandler,
        GetCustomerHandler _getCustomerHandler,
        GetCustomerByIdHandler _getCustomerByIdHandler,
        UpdateCustomerHandler _updateCustomerHandler,
        DeleteCustomerHandler _deleteCustomerHandler
    ) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCustomerRequest request)
        {
            var result = await _createCustomerHandler.Handler(request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _getCustomerHandler.Handle();
            return Ok(result);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _getCustomerByIdHandler.Handle(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, [FromBody] UpdateCustomerRequest request)
        {
            var result = await _updateCustomerHandler.Handle(id, request);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _deleteCustomerHandler.Handle(id);
            return result.Success ? Ok(result) : NotFound(result);
        }

        /* The controller's only job is to receive HTTP input, call the right handler, and translate the result into an HTTP response. It has zero business logic. Zero database calls. Zero validation. If your controller is doing anything more than this, logic has leaked into the wrong layer.        
        */
    }
}