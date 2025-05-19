using backend.Domain.Models.Event;
using backend.Domain.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventsController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] Event newEvent)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var created = await _eventService.AddEvent(newEvent);
            return CreatedAtAction(nameof(GetEventByDate), new { date = created.Date }, created);
        }

        [HttpGet("{date}")]
        public async Task<IActionResult> GetEventByDate(DateTime date)
        {
            var events = await _eventService.GetEvents(date);
            return Ok(events);
        }

    }
}
