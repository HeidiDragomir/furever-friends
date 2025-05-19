using backend.Domain.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace backend.Domain.Models.Event
{
    public class Event : IEvent
    {
        public Guid EventId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Title { get; set; } = null!;

        [Required]
        public string Description { get; set; } = null!;

        [Required]
        public string Time { get; set; } = null!;

        [Required]
        public string Location { get; set; } = null!;

        [Required]
        public string City { get; set; } = null!;

        [Required]
        public string Type { get; set; } = null!;
    }
}
