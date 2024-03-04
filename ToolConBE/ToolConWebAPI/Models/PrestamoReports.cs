using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToolConWebAPI.Models
{
	public class PrestamoReports
	{
		[Key]
		public int PrestamoID { get; set; }
		public int HerramientaID { get; set; }
		public int UsuarioID { get; set; }
		[Column(TypeName = "date")]
		public DateTime? FechaPrestamo { get; set; }

		[Column(TypeName = "date")]
		public DateTime? FechaDevolucion { get; set; }


		public virtual Usuario? Usuario { get; set; }
		public virtual Herramienta? Herramienta { get; set; }

		public virtual ICollection<Prestamo>? Prestamos { get; set; }


	}
}