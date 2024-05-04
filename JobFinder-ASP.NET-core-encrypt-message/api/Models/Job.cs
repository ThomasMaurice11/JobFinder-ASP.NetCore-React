using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    
    [Table("Jobs")]
    public class Job
    {
        [Key]
        public int JobId { get; set; }

        [Required]
        [ForeignKey("AppUser")]
        public string AppUserId { get; set; }

        [Required]
        [StringLength(255)] // Adjust as per your database's requirements
        public string JobTitle { get; set; }

        [Required]
        [StringLength(50)] // Adjust as per your database's requirements
        public string JobType { get; set; }

        [Required]
        [Column(TypeName = "decimal(18, 2)")] // Adjust precision and scale as per your database's requirements
        public decimal JobBudget { get; set; }

        [Required]
        public DateTime CreationDate { get; set; }

        [Required]
        [StringLength(1000)] // Adjust as per your database's requirements
        public string JobDescription { get; set; }

        [Required]
        public int NumberOfProposals { get; set; }

        [Required]
        public string jobStatus { get; set; } = "pending";

        public AppUser AppUser { get; set; }

        public List<Portfolio> Portfolios { get; set; } = new List<Portfolio>();
         public List<Proposal> Proposals { get; set; } = new List<Proposal>();
    }
}