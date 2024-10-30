
using ShopCoAPI.Application.DTOs.NotificationDTO;
using ShopCoAPI.Application.Interfaces;
using ShopCoAPI.Application.Interfaces.NotificationInterfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace ShopCoAPI.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]

    public class NotificationController(INotificationService notificationService) : ControllerBase
    {
        private readonly INotificationService _notificationService = notificationService;

        //Get all available notifications
        [HttpGet("all")]
        public async Task<IActionResult> GetAll([FromQuery] string userRole)
        {
            try
            {
                var notifications = await _notificationService.GetAllNotificationsAsync(userRole);
                return Ok(notifications);

            }
            catch(Exception ex)
            {
                if (ex.Message == "Invalid_role")
                    return BadRequest("Invalid user role type. Only Admin or CSR are allowed");
                else
                    return StatusCode(500, "Error occured in server");
            }
        }

        //Mark a notification as read
        [HttpPatch("mark/read")]
        public async Task<IActionResult> MarkAsRead([FromQuery] string notificationId, string readBy)
        {
            var result = await _notificationService.MarkAsRead(notificationId, readBy);
            if (result == null)
                return NotFound("Notification not found");
            return Ok(result);
        }

        //Get notifications specific to a given user
        [HttpGet("my/notifications")]
        public async Task<IActionResult> GetUserNotification([FromQuery] string userId)
        {
            var notifications = await _notificationService.GetUserNotifications(userId);
            return Ok(notifications);
        }

        //Send a notification to users
        //[HttpPost("Send")]
        //public async Task<IActionResult> SendNotification([FromBody] NotificationDTO notificationDTO)
        //{
        //    if (notificationDTO == null)
        //        return BadRequest("Invalid notification data");

        //    try
        //    {
        //        var result = await _notificationService.Send(notificationDTO);
        //        return Ok(result);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex.Message}");
        //    }
        //}

    }
}
