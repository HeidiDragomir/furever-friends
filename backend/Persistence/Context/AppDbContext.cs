using backend.Domain.Models.User;
using Microsoft.EntityFrameworkCore;

namespace backend.Persistence.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // mock User data
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    UserId = Guid.NewGuid(),
                    Username = "test1",
                    Email = "test1@test.se",
                    Password = "test1"
                },
                new User
                {
                    UserId = Guid.NewGuid(),
                    Username = "test2",
                    Email = "test2@test.se",
                    Password = "test2"
                },
                new User
                {
                    UserId = Guid.NewGuid(),
                    Username = "test3",
                    Email = "test3@test.se",
                    Password = "test3"
                },
                new User
                {
                    UserId = Guid.NewGuid(),
                    Username = "test4",
                    Email = "test4@test.se",
                    Password = "test4"
                },
                new User
                {
                    UserId = Guid.NewGuid(),
                    Username = "test5",
                    Email = "test5@test.se",
                    Password = "test5"
                }
             );
            
        }
    }
}
