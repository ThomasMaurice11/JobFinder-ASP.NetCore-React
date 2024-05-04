using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IMessageRepository
    {
        Task CreateAsync(SendMessage message);
        Task<List<SendMessage>> GetByCurrentUserAsync(string userId);



        // Other methods for message retrieval, deletion, etc., can be added here
    }
}
