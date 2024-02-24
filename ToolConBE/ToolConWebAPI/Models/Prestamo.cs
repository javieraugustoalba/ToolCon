using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToolConWebAPI.Models
{
	public class Prestamo
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int PrestamoID { get; set; }

		[Column(TypeName = "date")]
		public DateTime FechaPrestamo { get; set; }

		[Column(TypeName = "date")]
		public DateTime FechaDevolucion { get; set; }

		[Required]
		[StringLength(50)]
		public string EstadoPrestamo { get; set; } // Ej: "Prestado", "Devuelto"

		// Relación con Herramienta
		public int HerramientaID { get; set; }
		public virtual Herramienta Herramienta { get; set; }

		// Relación con Usuario
		public int UsuarioID { get; set; }
		public virtual Usuario Usuario { get; set; }
	}
}