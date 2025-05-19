using backend.Domain.DTOs.Auth;

namespace backend.Domain.Services
{
    public interface IUserService
    {
        Task<UserRegisterResDTO> Register(UserRegisterReqDTO user);
        Task<object> Login(UserAuthReqDTO user);
    }
}
