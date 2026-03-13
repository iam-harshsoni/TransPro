namespace TransProAPI.Common
{
    public class PaginationRequest
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 10;

        private const int MaxPageSize = 100;

        public void Validate()
        {
            if (PageNumber < 1) PageNumber = 1;
            if (PageSize > MaxPageSize) PageSize = MaxPageSize;
        }
    }
}