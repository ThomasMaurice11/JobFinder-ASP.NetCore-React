using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IProposalRepository
    {
        // internal async Task CreateAsync(Proposal proposalModel)
        // {
        //     throw new NotImplementedException();
        // }

        Task<List<Job>> GetUserPortfolio(AppUser user);
        Task<Proposal> CreateAsync(Proposal proposal);
        Task<Proposal> GetByIdAsync(int proposalId);
           Task UpdateAsync(Proposal proposal);
              Task<List<Proposal>> GetByCurrentUserAsync(string currentUserId);
               Task<Proposal> FindAsync(params object[] keyValues);
               Task<Proposal> GetByIdAsync(int proposalId, string receiverId);
               Task<IEnumerable<Proposal>> GetBySenderIdAsync(string senderId);
              
                
        

        // internal async Task CreateAsync(Proposal proposalModel)
        // {
        //     throw new NotImplementedException();
        // }
    }
}