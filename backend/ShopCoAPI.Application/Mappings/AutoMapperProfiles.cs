using AutoMapper;
using ShopCoAPI.Application.DTOs.UserDTO;
using ShopCoAPI.Core.Entities.UserEntity;


namespace ShopCoAPI.Application.Mappings
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<SignupReqDTO, User>().ForMember(dest => dest.PasswordHash, opt => opt.Ignore());
        }
    }
}
