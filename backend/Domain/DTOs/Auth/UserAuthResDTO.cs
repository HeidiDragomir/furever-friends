namespace backend.Domain.DTOs.Auth
{
    public class UserAuthResDTO
    {
        public Guid UserId { get; set; }

        public string Username { get; set; } = null!;

        public string Token { get; set; } = null!;
    }
}
