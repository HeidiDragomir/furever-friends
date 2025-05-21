using backend.Domain.Models.Item;
using backend.Domain.Repositories;
using backend.Persistence.Context;
using Microsoft.EntityFrameworkCore;

namespace backend.Persistence.Repositories
{
    public class ItemRepository : BaseRepository, IItemRepository
    {
        public ItemRepository(AppDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Item>> GetAllItems()
        {
            return await _context.Items.ToListAsync();
        }
    }
}
