using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolConWebAPI.Models;
using System.Linq;
using System.Threading.Tasks;

namespace ToolConWebAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PrestamosController : ControllerBase
	{
		private readonly ToolConDbContext _context;

		public PrestamosController(ToolConDbContext context)
		{
			_context = context;
		}


		[HttpGet("ActiveLoans")]
		public async Task<ActionResult> GetActiveLoans()
		{
			var activeLoans = await _context.Prestamos
				.Select(p => new { p.UsuarioID }) 
				.Distinct() 
				.ToListAsync();

			return Ok(activeLoans);
		}

		[HttpPost("DevolverHerramienta/{prestamoId}")]
		public async Task<IActionResult> DevolverHerramienta(int prestamoId)
		{
			var prestamo = await _context.Prestamos.FindAsync(prestamoId);
			if (prestamo == null)
			{
				return NotFound("Prestamo not found.");
			}

			// Update the return date to now
			prestamo.FechaDevolucion = DateTime.Now;

			// Find the tool and update its status
			var herramienta = await _context.Herramientas.FindAsync(prestamo.HerramientaID);
			if (herramienta != null)
			{
				herramienta.EstadoID = 1; // Assuming '1' is the ID for 'Disponible'
				_context.Update(herramienta);
			}

			await _context.SaveChangesAsync();
			return Ok(new { Message = "Herramienta devuelta correctamente." });
		}


	}

}
