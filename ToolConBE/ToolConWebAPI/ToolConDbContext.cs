using System.Collections.Generic;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using ToolConWebAPI.Models;

namespace ToolConWebAPI
{
    public class ToolConDbContext : DbContext
	{
		public ToolConDbContext(DbContextOptions<ToolConDbContext> options) : base(options)
		{
		}

		public DbSet<Rol> Roles { get; set; }
		public DbSet<Estado> Estados { get; set; }
		public DbSet<Usuario> Usuarios { get; set; }
		public DbSet<Herramienta> Herramientas { get; set; }
		public DbSet<Prestamo> Prestamos { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlServer(@"Server=ATHICADIGITAL;Database=ToolConDB;Trusted_Connection=True;");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

		}
	}
}
