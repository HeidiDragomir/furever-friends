namespace backend.Domain.DTOs.Auth
{
    public class UserRegisterResDTO
    {
        public Guid UserId { get; set; }

        public string UserName { get; set; } = null!;

    }
}
