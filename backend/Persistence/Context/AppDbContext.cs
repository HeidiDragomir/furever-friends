using backend.Domain.Models.Event;
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
        public DbSet<Event> Events { get; set; }


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

            // mock Event data
            modelBuilder.Entity<Event>().HasData(
                new Event
                {
                    EventId = Guid.NewGuid(),
                    Date = new DateTime(2025, 5, 23),
                    Title = "Morgonpromenad i parken",
                    Description = "Träffa andra hundägare för en gemensam promenad.",
                    Time = "08:00",
                    City = "Stockholm",
                    Location = "Slottsparken",
                    Type = "hund"
                },
                new Event
                {
                    EventId = Guid.NewGuid(),
                    Date = new DateTime(2025, 5, 23),
                    Title = "Kattfika på innergården",
                    Description = "Ta med din katt och fika tillsammans med andra kattägare.",
                    Time = "15:00",
                    City = "Malmö",
                    Location = "Vasastan",
                    Type = "katt"
                },
                new Event
                {
                    EventId = Guid.NewGuid(),
                    Date = new DateTime(2025, 5, 24),
                    Title = "Hundträning för nybörjare",
                    Description = "Lär dig grunderna i hundträning med en erfaren instruktör.",
                    Time = "10:00",
                    City = "Göteborg",
                    Location = "Hundtorget",
                    Type = "hund"
                },
                new Event
                {
                    EventId = Guid.NewGuid(),
                    Date = new DateTime(2025, 5, 24),
                    Title = "Kattutställning",
                    Description = "Kom och titta på vackra katter från hela landet.",
                    Time = "13:00",
                    City = "Uppsala",
                    Location = "Mässcentrum",
                    Type = "katt"
                },
                new Event
                {
                    EventId = Guid.NewGuid(),
                    Date = new DateTime(2025, 5, 25),
                    Title = "Hund & Katt-mingel",
                    Description = "Ett socialt evenemang för både hund- och kattägare.",
                    Time = "16:00",
                    City = "Lund",
                    Location = "Stadsparken",
                    Type = "blandat"
                }
                );
            
        }
    }
}
