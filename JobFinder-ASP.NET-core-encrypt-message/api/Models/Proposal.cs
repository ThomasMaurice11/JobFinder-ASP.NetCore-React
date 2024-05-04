using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("Proposals")]
   public class Proposal
{
    [Key]
     [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ProposalId { get; set; }

    [ForeignKey("Job")]
    public int JobId { get; set; }


    [ForeignKey("SenderId")]
    [Column(TypeName = "nvarchar(450)")]
    public string SenderId { get; set; }




    [ForeignKey("ReceiverId")]
    [Column(TypeName = "nvarchar(450)")]
    public string ReceiverId { get; set; }

     public string SenderName { get; set; }=string.Empty ;

    public string DescribeYourself { get; set; }
public string Attachment { get; set; }
    public string ProposalStatus { get; set; } 
    

    // Navigation properties
   
    public AppUser Sender { get; set; }

   public AppUser Receiver { get; set; }

    public Job Job { get; set; }
}

   
    }
