using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolConWebAPI;
using ToolConWebAPI.Models;

[Route("api/[controller]")]
[ApiController]
public class OperariosController : ControllerBase
{
	private readonly ToolConDbContext _context; // Replace YourDbContext with your actual DbContext class

	public OperariosController(ToolConDbContext context)
	{
		_context = context;
	}

	// GET: api/Operarios
	[HttpGet]
	public async Task<ActionResult<IEnumerable<Usuario>>> GetOperarios()
	{
		return await _context.Usuarios.ToListAsync();
	}
}
