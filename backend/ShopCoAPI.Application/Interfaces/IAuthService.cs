using ShopCoAPI.Core.Entities.UserEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopCoAPI.Application.Interfaces
{
    public interface IAuthService
    {
        string GenerateJwtToken(UserLogin user);
    }
}
