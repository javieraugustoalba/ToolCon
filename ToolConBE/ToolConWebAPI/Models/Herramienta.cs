using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToolConWebAPI.Models
{
	public class Herramienta
	{
		[Key]
		public int HerramientaId { get; set; }

		[Required]
		[StringLength(100)]
		public string Nombre { get; set; }

		[Required]
		[StringLength(100)]
		public string Marca { get; set; }

		[Column(TypeName = "date")]
		public DateTime FechaCompra { get; set; }

		public int TiempoUsoEstimado { get; set; } // En horas

		[Column(TypeName = "decimal(10, 2)")]
		public decimal Costo { get; set; }

		public int EstadoID { get; set; }

	}
}