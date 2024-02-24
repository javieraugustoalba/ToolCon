using Microsoft.AspNetCore.Mvc;
using ToolConWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ToolConWebAPI.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class LoginController : ControllerBase
	{
		private readonly ToolConDbContext _context; 

		public LoginController(ToolConDbContext context)
		{
			_context = context;
		}

		[HttpPost]
		public async Task<ActionResult> Login([FromBody] LoginModel login)
		{

			var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == login.Username && u.Contraseña == login.Password);  //TODO: hash and salt password

			if (user == null)
			{
				return Unauthorized("Invalid username or password");
			}

			return Ok(new { Message = "Login successful" });
		}
	}
}
