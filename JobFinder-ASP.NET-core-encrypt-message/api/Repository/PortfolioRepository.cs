using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository: IPortfolioRepository
    {
         private readonly ApplicationDBContext _context;
        public PortfolioRepository(ApplicationDBContext context)
        {
            _context = context;
        }

          public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();
            return portfolio;
        }


        public async Task<List<Job>> GetUserPortfolio(AppUser user)
        {
            return await _context.Portfolios.Where(u => u.AppUserId == user.Id)
            .Select(job => new Job
            {
                
                JobId = job.JobId,
                JobTitle = job.Job.JobTitle,
                JobDescription = job.Job.JobDescription,
                JobType = job.Job.JobType,
                JobBudget =  job.Job.JobBudget,
              
            }).ToListAsync();
        }

        
    }
}