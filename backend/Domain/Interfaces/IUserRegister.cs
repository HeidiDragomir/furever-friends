namespace backend.Domain.Interfaces
{
    public interface IUserRegister
    {
        string Username { get; set; }

        string Email { get; set; }

        string Password { get; set; }

    }
}
