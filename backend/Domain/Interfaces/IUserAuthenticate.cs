namespace backend.Domain.Interfaces
{
    public interface IUserAuthenticate
    {
        string Email { get; set; }

        string Password { get; set; }
    }
}
