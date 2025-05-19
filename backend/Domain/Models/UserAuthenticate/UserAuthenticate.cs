using backend.Domain.Interfaces;

namespace backend.Domain.Models.UserAuthenticate
{
    public class UserAuthenticate : IUserAuthenticate
    {
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
