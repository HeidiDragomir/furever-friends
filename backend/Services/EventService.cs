using backend.Domain.Models.Event;
using backend.Domain.Repositories;
using backend.Domain.Services;

namespace backend.Services
{
    public class EventService : IEventService
    {

        private readonly IEventRepository _eventRepository;

        public EventService(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }


        public async Task<Event> AddEvent(Event newEvent)
        {
            return await _eventRepository.CreateEvent(newEvent);
        }

        public async Task<IEnumerable<Event>> GetEvents(DateTime date)
        {
            return await _eventRepository.GetEventsByDate(date);
        }
    }
}
