using backend.Domain.Models.User;

namespace backend.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<User> CreateUser(User user);

        Task<User?> FindUserByEmail(string email);

        Task<User?> FindUserByName(string name);
    }
}
