using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TransProAPI.Common
{
    public class PagedResponse<T>
    {
        public int TotalCount { get; set; }
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public List<T> Data { get; set; } = new();

        /*
            Computed — no need to set this manually, it calculates itself
            Math.Ceiling rounds UP — 25 records / 10 per page = 3 pages, not 2
         */
        public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);
    }
}