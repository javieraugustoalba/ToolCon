using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolConWebAPI;
using ToolConWebAPI.Models;

[Route("api/[controller]")]
[ApiController]
public class OperariosController : ControllerBase
{
	private readonly ToolConDbContext _context; 
	private bool UsuarioExists(int id)
	{
		return _context.Usuarios.Any(e => e.UsuarioID == id);
	}
	public OperariosController(ToolConDbContext context)
	{
		_context = context;
	}


	[HttpGet]
	public async Task<ActionResult<IEnumerable<Usuario>>> GetOperarios()
	{
		return await _context.Usuarios.ToListAsync();
	}


	[HttpPost("CrearModificarOperario")]
	public async Task<ActionResult<Usuario>> CrearModificarOperario([FromBody] Usuario usuario)
	{
		if (usuario == null)
		{
			return BadRequest("Invalid user data");
		}

		if (usuario.UsuarioID > 0)
		{

			_context.Entry(usuario).State = EntityState.Modified;
		}
		else
		{

			_context.Usuarios.Add(usuario);
		}

		try
		{
			await _context.SaveChangesAsync();
		}
		catch (DbUpdateConcurrencyException) when (!UsuarioExists(usuario.UsuarioID))
		{
			return NotFound("Usuario not found.");
		}
		catch (Exception ex)
		{
			return StatusCode(500, "Internal server error: " + ex.Message);
		}

		return Ok(new { Message = "Operario processed successfully", UsuarioID = usuario.UsuarioID });
	}


	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteOperario(int id)
		{
		var operario = await _context.Usuarios.FindAsync(id);
		if (operario == null)
		{
			return NotFound();
		}


		var hasActiveLoans = await _context.Prestamos.AnyAsync(p => p.UsuarioID == id && p.FechaDevolucion == null);
		if (hasActiveLoans)
		{

			return Ok(new { Message = "El usuario tiene prestamos activos y no puede ser eliminado." });
		}

		_context.Usuarios.Remove(operario);
		await _context.SaveChangesAsync();

		return NoContent(); 
	}

}
