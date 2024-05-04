using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;
using api.Service;

namespace api.Repositories
{
    public class SendMessageRepository : IMessageRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly EncryptionService _encryptionService;

        public SendMessageRepository(ApplicationDBContext context, EncryptionService encryptionService)
        {
            _context = context;
            _encryptionService = encryptionService;
        }

        public async Task CreateAsync(SendMessage message)
        {
            message.Message = _encryptionService.Encrypt(message.Message);  // Encrypt message
            await _context.SendMessage.AddAsync(message);
            await _context.SaveChangesAsync();
        }

        public async Task<List<SendMessage>> GetByCurrentUserAsync(string userId)
        {
            var messages = await _context.SendMessage
                .Where(m => m.ReceiverId == userId)
                .ToListAsync();

            // Decrypt each message
            messages.ForEach(m => m.Message = _encryptionService.Decrypt(m.Message));
            
            return messages;
        }

        // Implement other methods as needed
    }
}
