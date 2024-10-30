using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Application.Interfaces
{
    public interface IDashboardService
    {
        Task<Dictionary<string, int>> GetOrderStats();
        Task<string> GetTotalRevenue();
        Task<string> GetAvailableProductCounts();
        Task<Dictionary<string, int>> GetAvailableUserCount();
        Task<Dictionary<string, List<string>>> GetWeeklyStats();

    }
}
