using backend.Domain.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace backend.Domain.Models.Item
{
    public class Item : IItem
    {
        public Guid ItemId {  get; set; }

        [Required]
        public string Title { get; set; } = null!;

        [Required]
        public string Description { get; set; } = null!;

        [Required]
        public string Image { get; set; } = null!;

        [Required]
        public string AltImage { get; set; } = null!;

        [Required]
        public string Location { get; set; } = null!;

        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Username { get; set; } = null!;

        [Required]
        public string Type { get; set; } = null!;
    }
}
