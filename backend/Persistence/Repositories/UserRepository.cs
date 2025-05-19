using backend.Domain.Models.User;
using backend.Domain.Repositories;
using backend.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace backend.Persistence.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository

    {
        public UserRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<User> CreateUser(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User?> FindUserByEmail(string email)
        {
            var foundUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email);

            return foundUser;
        }

        public async Task<User?> FindUserByName(string name)
        {
            var foundUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Username.ToLower() == name.ToLower());

            return foundUser;
        }

        
    }
}
