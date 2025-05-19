namespace backend.Domain.Interfaces
{
    public interface IEvent
    {
        Guid EventId { get; set; }

        DateTime Date { get; set; }

        string Title { get; set; }

        string Description { get; set; }

        string Time {  get; set; }

        string Location { get; set; }

        string City { get; set; }

        string Type { get; set; }
    }
}
