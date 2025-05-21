using backend.Domain.Models.Event;
using backend.Domain.Models.Item;

namespace backend.Domain.Services
{
    public interface IItemService
    {
        Task<IEnumerable<Item>> GetItems();
    }
}
