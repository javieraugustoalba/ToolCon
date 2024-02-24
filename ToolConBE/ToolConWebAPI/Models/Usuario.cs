using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToolConWebAPI.Models
{
	public class Usuario
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int UsuarioID { get; set; }

		[Required]
		[StringLength(100)]
		public string Nombre { get; set; }

		[Required]
		[StringLength(100)]
		public string Apellido { get; set; }

		[Required]
		[StringLength(100)]
		public string Email { get; set; }

		[Required]
		[StringLength(100)]
		public string Contraseña { get; set; }

		// Relación con Rol
		public int RolID { get; set; }
		public virtual Rol Rol { get; set; }

		// Relación con Préstamos
		public virtual ICollection<Prestamo> Prestamos { get; set; }
	}
}