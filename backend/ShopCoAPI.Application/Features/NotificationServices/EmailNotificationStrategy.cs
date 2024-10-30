using ShopCoAPI.Application.DTOs.NotificationDTO;
using ShopCoAPI.Application.Interfaces.NotificationInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Application.Features.NotificationServices
{
    public class EmailNotificationStrategy : INotificationStrategy
    {
        Task<string> INotificationStrategy.Send(NotificationDTO notification)
        {
            throw new NotImplementedException();
        }
    }
}
