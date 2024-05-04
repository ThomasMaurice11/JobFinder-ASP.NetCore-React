using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Job;
using api.Extensions;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
  // [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
          [Route("api/Job")]
    [ApiController]
    public class JobController :ControllerBase
    {
         private readonly ApplicationDBContext _context;
        private readonly IJobRepository _jobRepo ;
         
          private readonly UserManager<AppUser> _userManager;
          
      public JobController(ApplicationDBContext context,IJobRepository jobRepo,UserManager<AppUser> userManager)
      {
        _jobRepo=jobRepo ;
        
        _context = context;
        _userManager = userManager;

      }
      //  [HttpGet]
      //      public async Task<IActionResult> GetAll(){
      //       // var users= await _context.Users.ToListAsync();
      //       var jobs= await _jobRepo.GetAllAsync();
      //       var jobDto= jobs.Select(s=> s.ToJobDto());
      //       return Ok(jobs);

      //      }
 [HttpGet]
  [Route("{JobId}")]
 [Authorize]
            public async Task<IActionResult> GetById([FromRoute ]int JobId){
            // var users= await _context.Users.ToListAsync();
            var job= await _jobRepo.GetByIdAsync(JobId);
              if(job==null){
            return NotFound();
            }
            return Ok(job.ToJobDto());

           }
                 [HttpPost]
                  [Authorize(Roles = "employer")]
                 
            public async Task<IActionResult> Create(CreateJobDto jobDto)
{
  
       var username = User.GetUsername();
       var appUser = await _userManager.FindByNameAsync(username);

    var jobModel = jobDto.ToJobFromCreate();

    jobModel.AppUserId=appUser.Id;
    
    // Assuming CreateAsync returns a Task and you're not using its result here.
    // You might want to handle errors or check its result.
    await _jobRepo.CreateAsync(jobModel);

    // You should return a proper IActionResult here.
    // For example:
    return CreatedAtAction(nameof(GetById), new { id = jobModel.JobId }, jobModel);
}
[HttpPost]
[Route("getByIdFromBody")]
[Authorize]
public async Task<IActionResult> GetByIdFromBody([FromBody] int jobId)
{
    var job = await _jobRepo.GetByIdAsync(jobId);
    if (job == null)
    {
        return NotFound();
    }
    return Ok(job.ToJobDto());
}


          [HttpDelete]
        [Route("{id}")]
        public  async Task<IActionResult> Delete ([FromRoute] int id)
        {
           

            var jobModel = await _jobRepo.DeleteAsync(id);

            if (jobModel == null)
            {
                return NotFound("job doesn't exist ");
            }
          
            return Ok(jobModel) ;
        }

              [HttpPut]
        [Route("{id}")]

    public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateJobRequestDto updateDto){

     var job = await _jobRepo.UpdateAsync(id, updateDto.ToJobFromUpdate(id));

     if (job == null)
            {
                return NotFound("job not found");
            }

            return Ok(job.ToJobDto());
  }
  [HttpGet("user")]
[Authorize] // Ensure user is authenticated
public async Task<IActionResult> GetAllJobsByUser()
{
    // Get the username of the logged-in user
    var username = User.GetUsername();
    
    // Find the user by username
    var appUser = await _userManager.FindByNameAsync(username);
    if (appUser == null)
    {
        // If user doesn't exist, return NotFound
        return NotFound("User not found");
    }

    // Retrieve jobs made by the logged-in user
    var jobs = await _jobRepo.GetJobsByUserIdAsync(appUser.Id);
    if (jobs == null || !jobs.Any())
    {
        // If no jobs found for the user, return NotFound
        return NotFound("No jobs found for the user");
    }

    // Map jobs to DTOs
    var jobDtos = jobs.Select(job => job.ToJobDto());

    // Return the jobs
    return Ok(jobDtos);
}
[HttpGet("all")]
//  [Authorize(Roles = "jobseeker")]
// [Authorize] // Ensure user is authenticated
public async Task<IActionResult> GetAllJobs()
{
    // Retrieve all jobs from the repository
    var jobs = await _jobRepo.GetAllAsync();

    // If no jobs found, return NotFound
   

    // Map jobs to DTOs
    var jobDtos = jobs.Select(job => job.ToJobDto());

    // Return the jobs
    return Ok(jobDtos);
}

// [HttpPut]
// [Route("status/{JobId}")]
// [Authorize]
// public async Task<IActionResult> UpdateJobStatus([FromRoute] int JobId, [FromBody] UpdateJobStatusDto statusDto)
// {
//     try
//     {
//         // Retrieve the job by id
//         var job = await _jobRepo.GetByIdAsync(JobId);
//         if (job == null)
//         {
//             // If job not found, return NotFound
//             return NotFound("Job not found");
//         }

//         // Log the retrieved job
//         Console.WriteLine("Retrieved job:", job);

//         // Update the job status
//         job.jobStatus = statusDto.jobStatus;

//         // Log the updated job
//         Console.WriteLine("Updated job:", job);

//         // Save changes to the database
//         await _context.SaveChangesAsync();

//         // Return the updated job
//         return Ok(job.ToJobDto());
//     }
//     catch (Exception ex)
//     {
//         // Log any exceptions that occur
//         Console.WriteLine("Error updating job status:", ex.Message);
//         return StatusCode(500, "Error updating job status");
//     }
// }





    }
}
 
    

