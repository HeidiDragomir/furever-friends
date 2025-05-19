using backend.Domain.Models.Event;

namespace backend.Domain.Services
{
    public interface IEventService
    {
        Task<Event> AddEvent(Event newEvent);

        Task<IEnumerable<Event>> GetEvents(DateTime date);
    }
}
