using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class ProposalRepository :IProposalRepository
    {
         private readonly ApplicationDBContext _context;
        public ProposalRepository (ApplicationDBContext context)
        {
            _context = context;
        }

          public async Task<Proposal> CreateAsync( Proposal  proposal)
        {
            await _context. Proposals.AddAsync(proposal);
            await _context.SaveChangesAsync();
            return  proposal;
        }

         public async Task<Proposal> GetByIdAsync(int proposalId)
        {
            return await _context.Proposals.FindAsync(proposalId);
        }

        public async Task<List<Proposal>> GetByCurrentUserAsync(string currentUserId)
{
    var proposals = await _context.Proposals
        .Include(p => p.Sender)
        .Include(p => p.Job)
        .Where(p => p.ReceiverId == currentUserId)
        .ToListAsync();

    // Populate SenderName property with sender's name
    foreach (var proposal in proposals)
    {
        proposal.SenderName = proposal.Sender.UserName;
    }

    return proposals;
}



        public Task<List<Job>> GetUserPortfolio(AppUser user)
        {
            throw new NotImplementedException();
        }

        // public async Task<List<Job>> GetUserProposals(AppUser user)
        // {
        //     return await _context.Portfolios.Where(u => u.AppUserId == user.Id)
        //     .Select(job => new Job
        //     {
        //         JobId = job.JobId,
        //         JobTitle = job.Job.JobTitle,
        //         JobDescription = job.Job.JobDescription,
        //         JobType = job.Job.JobType,
        //         JobBudget =  job.Job.JobBudget,

        //     }).ToListAsync();
        // }
public async Task UpdateAsync(Proposal proposal)
{
    _context.Entry(proposal).State = EntityState.Modified;
    _context.Entry(proposal).Property(p => p.ProposalId).IsModified = false; // Exclude 'ProposalId' from being updated
    await _context.SaveChangesAsync();
}
          public async Task<Proposal> FindAsync(params object[] keyValues)
    {
        return await _context.Set<Proposal>().FindAsync(keyValues);
    }
   public async Task<Proposal> GetByIdAsync(int proposalId, string receiverId)
{
    return await _context.Proposals
        .FirstOrDefaultAsync(p => p.ProposalId == proposalId && p.ReceiverId == receiverId);
}

 public async Task<IEnumerable<Proposal>> GetBySenderIdAsync(string senderId)
{
    var proposals = await _context.Proposals
        .Where(p => p.SenderId == senderId)
        .Include(p => p.Job)
        .ToListAsync();

    return proposals;
}


     
    }
}
