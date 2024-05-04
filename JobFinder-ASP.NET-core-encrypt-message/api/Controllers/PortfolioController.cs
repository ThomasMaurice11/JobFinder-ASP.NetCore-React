using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Portfolio;
using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    // [Microsoft.AspNetCore.Components.Route("api/portfolio")]
     [Microsoft.AspNetCore.Mvc.Route("api/portfolio")]
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IJobRepository _jobRepo;
        private readonly IPortfolioRepository _portfolioRepo;
      
        public PortfolioController(UserManager<AppUser> userManager,
        IJobRepository jobRepo, IPortfolioRepository portfolioRepo)
        {
            _userManager = userManager;
            _jobRepo = jobRepo;
            _portfolioRepo = portfolioRepo;
         
        }

        [HttpGet]
        [Authorize(Roles = "jobseeker")]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);
            var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);
            return Ok(userPortfolio);
        }


       [HttpPost]
 [Authorize(Roles = "jobseeker")]
public async Task<IActionResult> AddPortfolio([FromBody] AddPortfolioDto dto)
{
    var username = User.GetUsername();
    var appUser = await _userManager.FindByNameAsync(username);
    var job = await _jobRepo.GetByJobTitleAsync(dto.JobTitle);

    if (job == null) 
        return BadRequest("Job not found");

    var userPortfolio = await _portfolioRepo.GetUserPortfolio(appUser);

    if (userPortfolio.Any(e => e.JobTitle.ToLower() == dto.JobTitle.ToLower()))
        return BadRequest("Cannot add the same job to the portfolio");

    var portfolioModel = new Portfolio
    {
        JobId = job.JobId,
        AppUserId = appUser.Id
    };

    await _portfolioRepo.CreateAsync(portfolioModel);

    if (portfolioModel == null)
    {
        return StatusCode(500, "Could not create");
    }
    else
    {
        return Created();
    }
}



    }
}