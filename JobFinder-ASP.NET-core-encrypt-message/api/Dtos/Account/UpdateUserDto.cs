using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Account
{
  public class UpdateUserDto
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        // Add other properties to update as needed
    }
}