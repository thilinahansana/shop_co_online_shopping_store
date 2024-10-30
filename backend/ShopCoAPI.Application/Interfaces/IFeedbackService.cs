using ShopCoAPI.Application.DTOs.FeadbackDTO;
using ShopCoAPI.Core.Entities.UserEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Application.Interfaces
{
    public interface IFeedbackService
    {
        Task PlaceFeedBack(FeedbackDTO feadbackDTO);
        Task<User> GetRatingForVendor(string vendorId);
        Task<List<Feedback>> GetFeedbackForProduct(string productId);
        Task UpdateFeedBack(string feadbackId, FeedbackDTO feadbackDTO);
        Task UpdateFeedbackMessage(string feadbackId, FeedbackDTO feadbackDTO);
    }
}
