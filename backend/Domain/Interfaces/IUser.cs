namespace backend.Domain.Interfaces
{
    public interface IUser
    {
        Guid UserId { get; set; }

        string Username { get; set; }

        string Email { get; set; }

        string Password { get; set; }
    }
}
