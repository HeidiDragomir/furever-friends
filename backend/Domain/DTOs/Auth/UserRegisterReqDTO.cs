using System.ComponentModel.DataAnnotations;

namespace backend.Domain.DTOs.Auth
{
    public class UserRegisterReqDTO
    {
        [Required]
        public string Username { get; set; } = null!;

        [Required]
        public string Email { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;

    }
}
