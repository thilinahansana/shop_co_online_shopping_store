﻿using ShopCoAPI.Core.Entities.NotificationEntity;
using ShopCoAPI.Core.Enums;
using ShopCoAPI.Infrastructure.Persistance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Infrastructure.Repositories
{
    public class NotificationRepository
    {
        private readonly ApplicationDbContext _context;
        public NotificationRepository(ApplicationDbContext context) 
        {
            _context = context;
        }

        public async Task<List<Notification>> GetAllAsync(string userRole)
        {
            var notifications = await _context.FirestoreDatabase.Collection("Notifications")
                .WhereArrayContains("rolesToNotify", UserRole.Admin)
                .OrderByDescending("createdDate")
                .GetSnapshotAsync();
            return notifications.Select(notification => notification.ConvertTo<Notification>()).ToList();
        }
        
        public async Task<List<Notification>> GetAllByUserAsync(string userId)
        {
            var notifications = await _context.FirestoreDatabase.Collection("Notifications")
                .WhereEqualTo("userId", userId)
                .OrderByDescending("createdDate")
                .GetSnapshotAsync();
            return notifications.Select(notification => notification.ConvertTo<Notification>()).ToList();
        }

        public async Task<string> CreateAsync(Notification notification)
        {
            try
            {
                await _context.FirestoreDatabase.Collection("Notifications").Document(notification.NotifyId.ToString()).SetAsync(notification);
                return "Notifycation added successfully";
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<string> ReadNotificationAsync(string notifyId, string readBy)
        {
            // Retrieve the document by orderId
            var documentRef = _context.FirestoreDatabase.Collection("Notifications").Document(notifyId);

            // Check if the document exists
            var snapshot = await documentRef.GetSnapshotAsync();
            if (snapshot.Exists)
            {
                var notification = new Dictionary<string, object>
                {                
                    {"isRead" , true },
                    {"readBy" , readBy},

                };
                // Update only the provided fields in the dictionary
                await documentRef.UpdateAsync(notification);
                return "Notification marked as read.";
            }
            else
            {
                throw new Exception("Notification not found.");
            }
        }

        public async Task<string> ReadAllNotificationsAsync(string userId)
        {
            // Retrieve all documents where userId matches
            var notificationsQuery = _context.FirestoreDatabase.Collection("Notifications")
                .WhereEqualTo("userId", userId);

            var snapshot = await notificationsQuery.GetSnapshotAsync();

            // Check if any notifications exist for the user
            if (snapshot.Count == 0)
            {
                return "No notifications found.";
            }

            // Loop through each document and update the "isRead" field
            foreach (var document in snapshot.Documents)
            {
                var notificationRef = document.Reference;
                var notificationUpdate = new Dictionary<string, object>
                {
                    { "isRead", true }
                };

                // Update each notification to mark it as read
                await notificationRef.UpdateAsync(notificationUpdate);
            }
            return "All notifications marked as read.";
        }

        public async Task<string> DeleteAllNotificationsAsync(string userId)
        {
            // Retrieve all documents where userId matches
            var notificationsQuery = _context.FirestoreDatabase.Collection("Notifications")
                .WhereEqualTo("userId", userId);

            var snapshot = await notificationsQuery.GetSnapshotAsync();

            // Check if any notifications exist for the user
            if (snapshot.Count == 0)
            {
                return "No notifications found.";
            }

            // Loop through each document and delete it
            foreach (var document in snapshot.Documents)
            {
                var notificationRef = document.Reference;

                // Delete each notification
                await notificationRef.DeleteAsync();
            }

            return "All notifications deleted successfully.";
        }

    }
}
