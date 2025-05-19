using backend.Domain.Models.Event;

namespace backend.Domain.Repositories
{
    public interface IEventRepository
    {
        Task<Event> CreateEvent(Event newEvent);

        Task<IEnumerable<Event>> GetEventsByDate(DateTime date);
    }
}
