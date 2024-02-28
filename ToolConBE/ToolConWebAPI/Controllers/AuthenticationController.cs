using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System;
using ToolConWebAPI.Models;

namespace ToolConWebAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class AuthenticationController : ControllerBase
	{

		private readonly ToolConDbContext _context;

		public AuthenticationController(ToolConDbContext context)
		{
			_context = context;
		}
		[HttpPost("validateToken")]
		public IActionResult ValidateToken()
		{
			var token = Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

			if (token == null)
			{
				return BadRequest(new { isValid = false, error = "Token is missing." });
			}

			bool isValid = ValidateJwtToken(token); //TODO: Implement this method for the token validation logic

			if (!isValid)
			{
				return Ok(new { isValid = false });
			}

			return Ok(new { isValid = true });
		}

		private bool ValidateJwtToken(string token)
		{
			//TODO: Implement this method for the token validation logic
			return true;
		}
	}
}
