using ClosedXML.Excel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolConWebAPI;

[Route("api/[controller]")]
[ApiController]
public class ReportsController : ControllerBase
{
	private readonly ToolConDbContext _context; 

	public ReportsController(ToolConDbContext context)
	{
		_context = context;
	}

	[HttpGet("HerramientasEnExistencia")]
	public IActionResult HerramientasEnExistencia()
	{
		using (var workbook = new XLWorkbook())
		{
			var worksheet = workbook.Worksheets.Add("Herramientas En Existencia");
			var currentRow = 1;
			worksheet.Cell(currentRow, 1).Value = "Nombre";
			worksheet.Cell(currentRow, 2).Value = "Marca";
			worksheet.Cell(currentRow, 3).Value = "FechaCompra";

			var herramientas = _context.Herramientas.Where(h => h.EstadoID == 1).ToList();

			foreach (var herramienta in herramientas)
			{
				currentRow++;
				worksheet.Cell(currentRow, 1).Value = herramienta.Nombre;
				worksheet.Cell(currentRow, 2).Value = herramienta.Marca;
				worksheet.Cell(currentRow, 3).Value = herramienta.FechaCompra;
			}

			using (var stream = new MemoryStream())
			{
				workbook.SaveAs(stream);
				var content = stream.ToArray();

				return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "HerramientasEnExistencia.xlsx");
			}
		}
	}

	[HttpGet("HerramientasPorOperarios")]
	public async Task<IActionResult> GetHerramientasPorOperariosReport()
	{
		using (var workbook = new XLWorkbook())
		{
			var worksheet = workbook.Worksheets.Add("Herramientas por Operarios");


			worksheet.Cell(1, 1).Value = "Operario";
			worksheet.Cell(1, 2).Value = "Herramienta";
			worksheet.Cell(1, 3).Value = "Marca";


			var herramientasPorOperarios = await _context.Prestamos
				 .Where(p => p.FechaDevolucion == null)
				 .Join(_context.Usuarios,
					 prestamo => prestamo.UsuarioID,
					 usuario => usuario.UsuarioID,
					 (prestamo, usuario) => new { Prestamo = prestamo, Usuario = usuario })
				 .Join(_context.Herramientas,
					 combined => combined.Prestamo.HerramientaID,
					 herramienta => herramienta.HerramientaId,
					 (combined, herramienta) => new
					 {
						 Operario = combined.Usuario.Nombre + " " + combined.Usuario.Apellido,
						 Herramienta = herramienta.Nombre,
						 Marca = herramienta.Marca
					 })
				 .ToListAsync();


			int currentRow = 2;
			foreach (var item in herramientasPorOperarios)
			{
				worksheet.Cell(currentRow, 1).Value = item.Operario;
				worksheet.Cell(currentRow, 2).Value = item.Herramienta;
				worksheet.Cell(currentRow, 3).Value = item.Marca;
				currentRow++;
			}

			using (var stream = new MemoryStream())
			{
				workbook.SaveAs(stream);
				var content = stream.ToArray();
				return File(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Herramientas_por_Operarios.xlsx");
			}
		}
	}

}
