﻿using ShopCoAPI.Core.Entities.OrderEntity;
using ShopCoAPI.Core.Entities.ProductEntity;
using ShopCoAPI.Core.Entities.UserEntity;
using ShopCoAPI.Infrastructure.Persistance;
using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Infrastructure.Repositories
{
    public class FeedbackRepository
    {
        private readonly ApplicationDbContext _context;

        public FeedbackRepository(ApplicationDbContext context)
        {
            //_users = database.GetCollection<User>("Users");
            _context = context;
        }

        public FirestoreDb FirestoreDatabase => _context._firestoreDb;

        public async Task CreateFeedbackAsync(Feedback feedback)
        {
            await _context._firestoreDb.Collection("Feedbacks").Document(feedback.Id = Guid.NewGuid().ToString()).SetAsync(feedback);
        }

        public async Task<bool> GetFeedbackByIdAsync(string feedbackId)
        {
            try
            {
                var result = await _context.FirestoreDatabase.Collection("Feedbacks").Document(feedbackId).GetSnapshotAsync();
                if (result != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                throw new Exception($"Error while execution of CreateOrderItemAsync:  {ex.Message}");

            }
        }

        public async Task<Feedback> CreateFeedbackAsync(Feedback feedback, Transaction transaction)
        {
            try
            {
                feedback.Id = Guid.NewGuid().ToString();
                var feedbackRef = _context._firestoreDb.Collection("Feedbacks").Document(feedback.Id);
                transaction.Set(feedbackRef, feedback);

                return feedback;
            }

            catch (Exception ex)
            {
                throw new Exception("An error occurred while creating feedback.", ex); 
            }

        }

        public async Task<bool> GetFeedbackByCustomerAndProductAsync(string customerId, string productId, string orderId)
        {
            try
            {
                DocumentReference productRef = _context._firestoreDb.Collection("VendorProducts").Document(productId);

                DocumentSnapshot productSnapshot = await productRef.GetSnapshotAsync();

                if (productSnapshot.Exists)
                {
                    VendorProduct product = productSnapshot.ConvertTo<VendorProduct>();

                    if(product.FeedbackInfo == null)
                    {
                        return false;
                    }

                    foreach (var feedBack in product.FeedbackInfo)
                    {
                        if (feedBack.CustomerId.Trim() == customerId.Trim() && feedBack.OrderId.Trim() == orderId.Trim())
                        {
                            return true;
                        }
                    }
                }

                return false;
            }
            catch(Exception ex)
            {
                throw new Exception();
            }
        }

        public async Task<User> GetRatingForVendor(string vendorId)
        {

            try
            {
                var userResult = await _context.FirestoreDatabase.Collection("Users").Document(vendorId).GetSnapshotAsync();

                if (userResult.Exists)
                {
                    return userResult.ConvertTo<User>();
                }

                return null;
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

        } 
        
        public async Task<List<Feedback>> GetFeedbackForProduct(string productId)
        {
            try
            {
                var requests = await _context.FirestoreDatabase.Collection("Feedbacks")
                 .WhereEqualTo("productId", productId)
                 .Limit(100)
                 .GetSnapshotAsync();

                if (requests.Count == 0)
                {
                    return null;
                }
                return requests.Select(request => request.ConvertTo<Feedback>()).ToList();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }

    }
}
