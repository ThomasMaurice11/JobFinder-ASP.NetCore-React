using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using api.Models;

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

public class ApplicationDBContext : IdentityDbContext<AppUser>
{
    public ApplicationDBContext(DbContextOptions dbContextOptions)
        : base(dbContextOptions )
    {
    }

    public DbSet<Job> Jobs { get; set; }
     public DbSet<Portfolio> Portfolios { get; set; }
       public DbSet<Proposal> Proposals { get; set; }
       public DbSet<SendMessage> SendMessage { get; set; }
    // public DbSet<Employer> Employers { get; set; }
    // public DbSet<Job> Jobs { get; set; }
    // public DbSet<JobSeeker> JobSeekers { get; set; }
    // public DbSet<Proposal> Proposals { get; set; }
    // public DbSet<SavedJob> SavedJobs { get; set; }
    // public DbSet<Communication> Communications { get; set; }


    //  protected override void OnModelCreating(ModelBuilder modelBuilder)
    // {
    //     modelBuilder.Entity<SavedJob>().HasNoKey();
    //         modelBuilder.Entity<Job>()
    //     .Property(j => j.JobBudget)
    //     .HasColumnType("decimal(18, 2)"); // Adjust the precision and scale as needed



        
    // }



     protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            

           builder.Entity<Portfolio>(x => x.HasKey(p => new { p.AppUserId, p.JobId }));

            builder.Entity<Portfolio>()
                .HasOne(u => u.AppUser)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.AppUserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<Portfolio>()
                .HasOne(u => u.Job)
                .WithMany(u => u.Portfolios)
                .HasForeignKey(p => p.JobId)
                 .OnDelete(DeleteBehavior.Restrict);

                builder.Entity<Proposal>(x => x.HasKey(p => new { p.SenderId, p.JobId }));

            builder.Entity<Proposal>()
            
                .HasOne(u => u.Sender)
                .WithMany(u => u.Proposals)
                .HasForeignKey(p => p.SenderId)
                .OnDelete(DeleteBehavior.Restrict);

                builder.Entity<Proposal>()
                .HasOne(u => u.Receiver)
                .WithMany()
                .HasForeignKey(p => p.ReceiverId)
                .OnDelete(DeleteBehavior.Restrict); 

                 builder.Entity<Proposal>()
                .HasOne(u => u.Job)
                .WithMany(u => u.Proposals)
                .HasForeignKey(p => p.JobId)
                 .OnDelete(DeleteBehavior.Restrict);
                 
                 builder.Entity<Proposal>()
                  .HasKey(p => p.ProposalId);



                  builder.Entity<SendMessage>()
                .HasOne(u => u.Sender)
                .WithMany() // Assuming no navigation property on AppUser pointing back to Proposal
                .HasForeignKey(p => p.SenderId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Entity<SendMessage>()
                .HasOne(u => u.Receiver)
                .WithMany() // Assuming no navigation property on AppUser pointing back to Proposal
                .HasForeignKey(p => p.ReceiverId)
                .OnDelete(DeleteBehavior.Restrict);

           


            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Name = "Emplpoyer",
                    NormalizedName = "EMPLOYER"
                },
                new IdentityRole
                {
                    Name = "JobSeeker",
                    NormalizedName = "JOBSEEKER"
                },
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
    



