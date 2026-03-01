using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Common
{
    // The Common ApiResponse Wrapper
    public class ApiResponses<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; } = string.Empty;
        public T? Data { get; set; }
        public List<string> Errors { get; set; } = new();

        public static ApiResponses<T> Ok(T data, string message = "Request Successful")
            => new() { Success = true, Message = message, Data = data };

         public static ApiResponses<T> Fail(string message, List<string>? errors = null)
            => new() { Success = false, Message = message, Errors = errors ?? new() };


        /*  Why a wrapper? 
            - Without this, a success returns raw JSON, an error returns something completely different, and validation failures return yet another shape. Clients have to handle three different structures. With a wrapper, the shape is always the same — only `Success`, `Message`, `Data`, and `Errors` change. This is standard practice in production APIs.
        */ 
    }
}