using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    [Table("SendMessage")]
   public class SendMessage
{
    [Key]
     [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int MessageId { get; set; }

  


    [ForeignKey("SenderId")]
    [Column(TypeName = "nvarchar(450)")]
    public string SenderId { get; set; }




    [ForeignKey("ReceiverId")]
    [Column(TypeName = "nvarchar(450)")]
    public string ReceiverId { get; set; }

     public string SenderName { get; set; }=string.Empty ;

    public string Message { get; set; }

    

    // Navigation properties
   
    public AppUser Sender { get; set; }

   public AppUser Receiver { get; set; }

    
}

   
    }
