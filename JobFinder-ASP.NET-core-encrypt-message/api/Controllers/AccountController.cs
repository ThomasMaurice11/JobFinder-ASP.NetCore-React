using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos;
using api.Dtos.Account;
using api.Interfaces;
using api.Models;
using api.Service;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
     [Route("api/account")]
    [ApiController]
    public class AccountController:ControllerBase
    {   
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;    
        private readonly SignInManager<AppUser> _signinManager;
            private readonly IHttpContextAccessor _httpContextAccessor; 
        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService,SignInManager<AppUser> signInManager,IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signinManager = signInManager;
            _httpContextAccessor = httpContextAccessor ; // Initialize IHttpContextAccessor

        }

         [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDto.Username.ToLower());

            if (user == null)
             return Unauthorized("Invalid username!");

            var result = await _signinManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) return Unauthorized("Username not found and/or password incorrect");
            //  _httpContextAccessor.HttpContext.Session.SetString("Token", _tokenService.CreateToken(user));

            return Ok(
                new NewUserDto
                {
                    UserName = user.UserName,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user)
                }
            );
        }


          [HttpPost("register")]
         public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var appUser = new AppUser
                {
                    UserName = registerDto.Username,
                    Email = registerDto.Email,
                     Role = registerDto.Role 
                };

                var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

                if (createdUser.Succeeded)
                {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, registerDto.Role);
                    if (roleResult.Succeeded)
                    {
                        return Ok(
                            new NewUserDto
                {
                    UserName = appUser.UserName,
                    Email = appUser.Email,
                    Token = _tokenService.CreateToken(appUser)
                }
                        );
                    }
                    else
                    { 
                        return StatusCode(500, roleResult.Errors);
                    }
                }
                else
                {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, e);
            }
        }
        [HttpGet("users")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userManager.Users.ToListAsync();
            var userDtos = users.Select(user => new UserDto
            {
                UserName = user.UserName,
                Email = user.Email,
                Id=user.Id 
                
                // Role = user // Assuming Role is a property in the AppUser model
            }).ToList();

            return Ok(userDtos);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateUser(string id, [FromBody] UpdateUserDto updateUserDto)
        {
            var user = await _userManager.FindByIdAsync(id);
            if (user == null)
            {
                return NotFound($"User with ID {id} not found.");
            }

            user.UserName = updateUserDto.UserName;
            user.Email = updateUserDto.Email;
            // Update other user properties as needed

            var result = await _userManager.UpdateAsync(user);
            if (result.Succeeded)
            {
                return NoContent(); // Successfully updated
            }
            else
            {
                return StatusCode(500, result.Errors); // Error occurred while updating
            }
        }
        [HttpDelete("delete/{id}")]
public async Task<IActionResult> DeleteUser(string id)
{
    var user = await _userManager.FindByIdAsync(id);
    if (user == null)
    {
        return NotFound($"User with ID {id} not found.");
    }

    var result = await _userManager.DeleteAsync(user);
    if (result.Succeeded)
    {
        return NoContent(); // Successfully deleted
    }
    else
    {
        return StatusCode(500, result.Errors); // Error occurred while deleting
    }
}

[HttpGet("{id}")]
public async Task<IActionResult> GetUserById(string id)
{
    var user = await _userManager.FindByIdAsync(id);
    if (user == null)
    {
        return NotFound($"User with ID {id} not found.");
    }

    var userDto = new UserDto
    {
        UserName = user.UserName,
        Email = user.Email,
        Id = user.Id
        // Include other properties as needed
    };

    return Ok(userDto);



        
    }
}
}