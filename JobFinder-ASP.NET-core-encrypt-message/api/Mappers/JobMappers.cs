using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Job;
using api.Models;

namespace api.Mappers
{
    public static class JobMappers 
    {
           public static JobDto ToJobDto(this Job jobModel){
            return new JobDto {

                 JobId=jobModel.JobId,
                 JobTitle=jobModel.JobTitle,
                JobType=jobModel.JobType,
                JobBudget=jobModel.JobBudget,
                JobDescription=jobModel.JobDescription,
                CreationDate=jobModel.CreationDate,
                NumberOfProposals=jobModel.NumberOfProposals,
                jobStatus=jobModel.jobStatus
                 

  
            };
        }
           public static Job ToJobFromCreate(this CreateJobDto jobDto){
            return new Job {

                 
              
                JobTitle=jobDto.JobTitle,
                JobType=jobDto.JobType,
                JobBudget=jobDto.JobBudget,
                JobDescription=jobDto.JobDescription,
              

  
            };
        }
        //  public static Job ToJobFromUpdate(this UpdateJobRequestDto jobDto)
        // {
        //     return new Job
        //     {
        //         Title = JobDto.Title,
        //         Content = commentDto.Content,
        //         StockId = stockId
        //     };
        // }

         public static Job ToJobFromUpdate(this UpdateJobRequestDto jobDto, int JobId)
        {
            return new Job
            {
                jobStatus = jobDto.jobStatus,
               
            };
        
    }
}
}