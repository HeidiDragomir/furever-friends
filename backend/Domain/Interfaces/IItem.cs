namespace backend.Domain.Interfaces
{
    public interface IItem
    {
        Guid ItemId { get; set; }

        string Title { get; set; }

        string Description { get; set; }

        string Image { get; set; }

        string AltImage { get; set; }

        string Location { get; set; }

        DateTime Date { get; set; }

        string Username { get; set; }

        string Type { get; set; }

    }
}
