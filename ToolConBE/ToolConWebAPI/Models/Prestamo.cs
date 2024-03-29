﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ToolConWebAPI.Models
{
	public class Prestamo
	{
		[Key]
		public int PrestamoID { get; set; }
		public int HerramientaID { get; set; }
		public int UsuarioID { get; set; }
		[Column(TypeName = "date")]
		public DateTime? FechaPrestamo { get; set; }

		[Column(TypeName = "date")]
		public DateTime? FechaDevolucion { get; set; }

	}
}