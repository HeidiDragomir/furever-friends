using backend.Domain.Interfaces;

namespace backend.Domain.Models.UserRegister
{
    public class UserRegister :IUserRegister
    {
        public Guid UserId { get; set; }

        public string Username { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string Password { get; set; } = null!;

    }
}
