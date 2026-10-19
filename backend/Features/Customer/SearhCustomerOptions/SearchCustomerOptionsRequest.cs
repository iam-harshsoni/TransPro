namespace TransProAPI.Features.Customer.SearhCustomerOptions
{
    public sealed record SearchCustomerOptionsRequest(string? Search, int PageSize = 50);
}
