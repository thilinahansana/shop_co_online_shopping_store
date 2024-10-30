﻿using Google.Cloud.Firestore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Core.Entities.UserEntity
{
    [FirestoreData]
    public class ChangePassword
    {
        [FirestoreDocumentId]
        public string UserId { get; set; }
        [FirestoreProperty("passwordHash")]
        public string OldPassword { get; set; }
        [FirestoreProperty("passwordHash")]
        public string NewPassword { get; set; }
    }
}
