using backend.Domain.Models.Event;
using backend.Domain.Models.Item;

namespace backend.Domain.Repositories
{
    public interface IItemRepository
    {
        Task<IEnumerable<Item>> GetAllItems();
    }
}
