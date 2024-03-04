using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolConWebAPI; 
using System.Threading.Tasks;
using System.Collections.Generic;
using ToolConWebAPI.Models;

[Route("api/[controller]")]
[ApiController]
public class HerramientasController : ControllerBase
{
	private readonly ToolConDbContext _context;

	public HerramientasController(ToolConDbContext context)
	{
		_context = context;
	}


	[HttpGet]
	public async Task<ActionResult<IEnumerable<Herramienta>>> GetHerramientas()
	{
		return await _context.Herramientas.ToListAsync();
	}


	[HttpPost("AgregarHerramientas")]
	public async Task<IActionResult> AgregarHerramientas([FromBody] Herramienta herramienta)
	{
		if (herramienta == null)
		{
			return BadRequest("Invalid tool data");
		}

		try
		{
			if (herramienta.HerramientaId != 0)
			{

				_context.Herramientas.Update(herramienta);
				await _context.SaveChangesAsync();
				return Ok(new { Message = "Tool updated successfully", HerramientaId = herramienta.HerramientaId });
			}
			else
			{

				_context.Herramientas.Add(herramienta);
				await _context.SaveChangesAsync();
				return CreatedAtAction(nameof(GetHerramientas), new { id = herramienta.HerramientaId }, herramienta);
			}
		}
		catch (Exception ex)
		{
			return StatusCode(500, "Internal server error: " + ex.Message);
		}
	}



	[HttpPost("asignarHerramienta")]
	public async Task<IActionResult> AsignarHerramienta([FromBody] Prestamo prestamo)
	{
		if (prestamo == null || prestamo.HerramientaID <= 0)
		{
			return BadRequest("Invalid assignment data");
		}


		var entity = new Prestamo
		{
			HerramientaID = prestamo.HerramientaID,
			UsuarioID = prestamo.UsuarioID,
			FechaPrestamo = DateTime.Now, 
			FechaDevolucion = DateTime.MinValue 
		};

		try
		{
			_context.Prestamos.Add(entity);


			var herramienta = await _context.Herramientas.FirstOrDefaultAsync(h => h.HerramientaId == prestamo.HerramientaID);
			if (herramienta != null)
			{
				herramienta.EstadoID = 2; 
				_context.Herramientas.Update(herramienta);
			}
			else
			{
				return NotFound($"Herramienta with ID {prestamo.HerramientaID} not found.");
			}

			await _context.SaveChangesAsync();
			return Ok(new { Message = "Tool assigned successfully", PrestamoID = entity.PrestamoID });
		}
		catch (Exception ex)
		{

			return StatusCode(500, "Internal server error: " + ex.Message);
		}
	}


	[HttpGet("SolicitudesPendientes")]
	public async Task<ActionResult<IEnumerable<dynamic>>> GetSolicitudesPendientes()
	{
		var solicitudes = await _context.Prestamos
			.Where(p => p.FechaPrestamo == null || p.FechaPrestamo <= new DateTime(1901, 01, 01))
			.Join(_context.Usuarios,
				  prestamo => prestamo.UsuarioID,
				  usuario => usuario.UsuarioID,
				  (prestamo, usuario) => new
				  {
					  UsuarioNombre = usuario.Nombre + " " + usuario.Apellido,
					  prestamo.HerramientaID,
					  prestamo.PrestamoID 
				  })
			.Join(_context.Herramientas,
				  prestamo => prestamo.HerramientaID,
				  herramienta => herramienta.HerramientaId,
				  (prestamo, herramienta) => new
				  {
					  prestamo.UsuarioNombre,
					  NombreHerramienta = herramienta.Nombre,
					  prestamo.PrestamoID 
				  })
			.ToListAsync();

		return solicitudes;
	}


	[HttpPost("ActualizarPrestamoYHerramienta/{prestamoId}")]
	public async Task<IActionResult> ActualizarPrestamoYHerramienta(int prestamoId)
	{
		var prestamo = await _context.Prestamos.FirstOrDefaultAsync(p => p.PrestamoID == prestamoId);
		if (prestamo == null)
		{
			return NotFound("Prestamo not found.");
		}

		prestamo.FechaPrestamo = DateTime.Now;

		var herramienta = await _context.Herramientas.FirstOrDefaultAsync(h => h.HerramientaId == prestamo.HerramientaID);
		if (herramienta != null)
		{
			herramienta.EstadoID = 2; 
		}
		else
		{
			return NotFound("Herramienta not found.");
		}

		await _context.SaveChangesAsync();
		return Ok(new { Message = "Prestamo y Herramienta actualizados correctamente." });
	}

	[HttpPost("CrearPrestamo")]
	public async Task<IActionResult> CrearPrestamo([FromBody] Prestamo prestamo)
	{
		if (prestamo == null)
		{
			return BadRequest("La solicitud de préstamo es inválida.");
		}

		try
		{
			var herramienta = await _context.Herramientas.FindAsync(prestamo.HerramientaID);
			if (herramienta == null)
			{
				return NotFound($"Herramienta con ID {prestamo.HerramientaID} no encontrada.");
			}

			herramienta.EstadoID = 2;
			_context.Prestamos.Add(prestamo);
			await _context.SaveChangesAsync();
			return Ok(new { mensaje = "Préstamo creado exitosamente." });
		}
		catch (Exception ex)
		{
			return StatusCode(500, "Ocurrió un error al procesar la solicitud. Por favor, intente de nuevo más tarde."+  ex);
		}
	}



	[HttpDelete("EliminarHerramienta/{herramientaId}")]
	public async Task<IActionResult> EliminarHerramienta(int herramientaId)
	{
		var herramienta = await _context.Herramientas.FindAsync(herramientaId);
		if (herramienta == null)
		{
			return NotFound();
		}

		_context.Herramientas.Remove(herramienta);
		await _context.SaveChangesAsync();

		return NoContent(); 
	}


}
