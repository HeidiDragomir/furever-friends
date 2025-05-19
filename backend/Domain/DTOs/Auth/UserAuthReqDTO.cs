using System.ComponentModel.DataAnnotations;

namespace backend.Domain.DTOs.Auth
{
    public class UserAuthReqDTO
    {
        [Required]
        public string Email { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;
    }
}
