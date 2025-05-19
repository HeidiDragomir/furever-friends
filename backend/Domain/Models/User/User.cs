using backend.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace backend.Domain.Models.User
{
    [Index(nameof(Username), IsUnique = true)] // Enforce uniqueness at the database level
    public class User : IUser
    {
        public Guid UserId { get; set; }

        public string Username { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string Password { get; set; } = null!;

    }

}
