using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Job;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace api.Repository
{
  
    public class JobRepository :IJobRepository 
    {
         private readonly ApplicationDBContext _context ;
        public JobRepository(ApplicationDBContext context)
        {
            _context=context ;
        }

        public async Task<Job> CreateAsync(Job jobModel)
        {
           await _context.Jobs.AddAsync(jobModel);
           await _context.SaveChangesAsync();
           return jobModel ;
        }

      

        public async Task<Job?> DeleteAsync(int id)
        {
            var jobModel = await _context.Jobs.FirstOrDefaultAsync(x => x.JobId == id);

            if (jobModel == null)
            {
                return null;
            }

            _context.Jobs.Remove(jobModel);
            await _context.SaveChangesAsync();
            return jobModel;
        }

       

        // public async Task<List<Job>> GetAllAsync()
        // {
        //     return await _context.Jobs.Include(a=>a.AppUser).ToListAsync() ;
        // }


       

          public async Task<Job?> GetByIdAsync(int id)
        {
           return await _context.Jobs.Include(a=>a.AppUser).FirstOrDefaultAsync(c=>c.JobId ==id);
        }

        public async Task<Job?> GetByJobTitleAsync(string jobTitle)
        {
            return await _context.Jobs.FirstOrDefaultAsync(s => s.JobTitle == jobTitle);
            // return await _context.Jobs.FirstOrDefaultAsync(j =>)
        }

        // public Task<Job?> UpdateAsync(int id, Job jobModel)
        // {
        //      var existingJob = await _context.Jobs.FindAsync(id);

        //     if (existingJob == null)
        //     {
        //         return null;
        //     }

        //     // existingJob.Title = jobModel.Title;
        //     // existingJob.Content = jobModel.Content;

        //     await _context.SaveChangesAsync();

        //     return existingJob;
        // }
        public async Task<IEnumerable<Job>> GetJobsByUserIdAsync(string userId)
        {
            // Retrieve jobs associated with the specified user ID
            var jobs = await _context.Jobs
                .Where(j => j.AppUserId == userId)
                .ToListAsync();

            return jobs;
        }

       public async Task<IEnumerable<Job>> GetAllAsync()
        {
             return await _context.Jobs.ToListAsync();
        }

        public async Task<Job?> UpdateAsync(int id, Job jobModel)
        {
           var existingComment = await _context.Jobs.FindAsync(id);

            if (existingComment == null)
            {
                return null;
            }

            existingComment.jobStatus = jobModel.jobStatus;
            

            await _context.SaveChangesAsync();

            return existingComment;
        }
    }
}