using backend.Domain.Models.Item;
using backend.Domain.Repositories;
using backend.Domain.Services;

namespace backend.Services
{
    public class ItemService : IItemService
    {
        private readonly IItemRepository _itemRepository;

        public ItemService(IItemRepository itemRepository)
        {
            _itemRepository = itemRepository;
        }

        public async Task<IEnumerable<Item>> GetItems()
        {
            return await _itemRepository.GetAllItems();
        }
    }
}
