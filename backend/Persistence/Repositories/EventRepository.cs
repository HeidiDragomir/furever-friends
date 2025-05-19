using backend.Domain.Models.Event;
using backend.Domain.Repositories;
using backend.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace backend.Persistence.Repositories
{
    public class EventRepository : BaseRepository, IEventRepository
    {
        public EventRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<Event> CreateEvent(Event newEvent)
        {
            await _context.Events.AddAsync(newEvent);
            await _context.SaveChangesAsync();
            return newEvent;
        }

        public async Task<IEnumerable<Event>> GetEventsByDate(DateTime date)
        {
            return await _context.Events
                .Where(e => e.Date.Date == date.Date)
                .ToListAsync();
        }
    }
}
