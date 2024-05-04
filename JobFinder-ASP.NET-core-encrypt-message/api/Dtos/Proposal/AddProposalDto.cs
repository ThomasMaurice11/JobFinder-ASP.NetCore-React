using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Proposal
{
   public class AddProposalDto
{
public int JobId { get; set; }
    public string SenderName { get; set; }
    public string DescribeYourself { get; set; }
    public IFormFile Attachment { get; set; } 

}
}