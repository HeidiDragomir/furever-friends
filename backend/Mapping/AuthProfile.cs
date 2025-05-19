using AutoMapper;
using backend.Domain.Models.User;
using backend.Domain.Models.UserRegister;
using backend.Domain.DTOs.Auth;

namespace backend.Mapping
{
    public class AuthProfile :Profile
    {
        public AuthProfile()
        {
            // UserRegisterReqDTO -> UserRegister
            CreateMap<UserRegisterReqDTO, UserRegister>()
                .ForMember(dest => dest.UserId, opt => opt.Ignore()); // Ignoring because it's auto-generated


            // UserRegister --> User
            CreateMap<UserRegister, User>()
                .ForMember(dest => dest.UserId, opt => opt.Ignore()); // Ignoring because it's auto-generated

            // User --> UserAuthResDTO
            CreateMap<User, UserAuthResDTO>()
                .ForMember(dest => dest.UserId, opt => opt.Ignore()); // Ignoring because it's auto-generated

            // User --> UserRegisterResDTO
            CreateMap<User, UserRegisterResDTO>()
                .ForMember(dest => dest.UserId, opt => opt.Ignore()); // Ignoring because it's auto-generated

        }
    }
}
