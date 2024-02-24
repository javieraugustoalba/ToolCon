using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToolConWebAPI.Models
{
	public class Estado
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int EstadoID { get; set; }

		[Required]
		[StringLength(50)]
		public string Descripcion { get; set; }

		// Relación con Herramientas
		public virtual ICollection<Herramienta> Herramientas { get; set; }
	}
}