using System;
using System.Threading.Tasks;
using api.Dtos.Message;
using api.Extensions;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/messages")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IMessageRepository _messageRepo;

        public MessageController(UserManager<AppUser> userManager, IMessageRepository messageRepo)
        {
            _userManager = userManager;
            _messageRepo = messageRepo;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> SendMessage([FromBody] SendMessageDto dto)
        {
            var senderUsername = User.GetUsername();
            var sender = await _userManager.FindByNameAsync(senderUsername);

            if (sender == null)
                return BadRequest("Sender not found");

            var receiver = await _userManager.FindByIdAsync(dto.ReceiverId);

            if (receiver == null)
                return BadRequest("Receiver not found");

            var messageModel = new SendMessage
            {
                SenderId = sender.Id,
                ReceiverId = dto.ReceiverId,
                SenderName = sender.UserName,
                Message = dto.Message
            };

            await _messageRepo.CreateAsync(messageModel);

            if (messageModel == null)
                return StatusCode(500, "Could not create");

            return Created();
        }
           [HttpGet("receiver")]
        [Authorize]
        public async Task<IActionResult> GetCurrentUserMessages()
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);

            if (appUser == null)
                return NotFound("User not found");

            var messages = await _messageRepo.GetByCurrentUserAsync(appUser.Id);

            return Ok(messages);
        }
           
    }
}

        // Additional actions for managing messages can be added here
 

