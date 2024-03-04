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

	}
}
