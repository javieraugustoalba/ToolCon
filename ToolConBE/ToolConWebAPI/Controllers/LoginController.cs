using Microsoft.AspNetCore.Mvc;
using ToolConWebAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

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
			var user = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == login.Username && u.Contraseña == login.Password);

			if (user == null)
			{
				return Unauthorized("Invalid username or password");
			}

			var token = GenerateJwtToken(user);
			return Ok(new { Message = "Login successful", Token = token });
		}

		private string GenerateJwtToken(Usuario user)
		{
			// Ensure this key is sufficiently long (at least 16 characters / 128 bits)
			var secretKeyString = "mDYnwr5lbWxRdvT39mosrhiXwGaiOkGo3fbF0NUH2SU="; // Replace this with your actual secure key
			var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKeyString));
			var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

			var claims = new[]
			{
		new Claim(ClaimTypes.NameIdentifier, user.UsuarioID.ToString()),
		new Claim(ClaimTypes.Email, user.Email),
        // Add more claims if needed
    };

			var token = new JwtSecurityToken(
				issuer: null, // Optional
				audience: null, // Optional
				claims: claims,
				expires: DateTime.Now.AddHours(1), // Token expiration time
				signingCredentials: credentials);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}

	}
}
