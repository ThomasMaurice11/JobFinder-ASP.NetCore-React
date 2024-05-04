using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("Portfolios")]
    public class Portfolio
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("AppUser")]
        [Column(TypeName = "nvarchar(450)")]
        public string AppUserId { get; set; }
        
        [ForeignKey("Job")]
        public int JobId { get; set; }

        public AppUser AppUser { get; set; }
        public Job Job { get; set; }
    }
}