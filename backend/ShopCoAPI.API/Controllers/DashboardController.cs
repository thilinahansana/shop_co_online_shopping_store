

using ShopCoAPI.Application.DTOs.OrderDTO;
using ShopCoAPI.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System;
using ShopCoAPI.Application.Features;
using System.Data;
using System.Collections.Generic;

namespace ShopCoAPI.API.Controllers
{    
    [ApiController]
    [Route("api/v1/[controller]")]
    public class DashboardController(IDashboardService dashboardService) : ControllerBase
    {
        private readonly IDashboardService _dashboardService = dashboardService;

        //Get the total revenue from all completed orders
        [HttpGet("total/revanue")]
        public async Task<IActionResult> GetTotalRevenue()
        {
            var orders = await _dashboardService.GetTotalRevenue();
            return Ok(orders);
        }

        //Get the order statistics
        [HttpGet("order/stats")]
        public async Task<IActionResult> GetOrderStats()
        {
            var orders = await _dashboardService.GetOrderStats();
            return Ok(orders);
        }

        //Get the available user counts
        [HttpGet("available/user/count")]
        public async Task<IActionResult> GetUserCounts()
        {
            try
            {
                var result = await _dashboardService.GetAvailableUserCount();
                if (result == null)
                {
                    return NotFound("No user found");
                }

                return Ok(result);
            }
            catch (DataException ex)
            {
                return BadRequest($"Validation error: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //Get the available product counts
        [HttpGet("available/product/count")]
        public async Task<IActionResult> GetAvailableProductCounts()
        {
            try
            {
                var result = await _dashboardService.GetAvailableProductCounts();
                if (result == null)
                {
                    return NotFound("No product found");
                }

                return Ok(result);
            }
            catch (DataException ex)
            {
                return BadRequest($"Validation error: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        //Get the weekly statistics on orders
        [HttpGet("order/behaviour")]
        public async Task<IActionResult> GetWeeklyStats()
        {
            try
            {
                var result = await _dashboardService.GetWeeklyStats();
                if (result == null)
                {
                    return NotFound("Something went wrong while gettin stats");
                }

                return Ok(result);
            }
            catch (DataException ex)
            {
                return BadRequest($"Validation error: {ex.Message}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}
