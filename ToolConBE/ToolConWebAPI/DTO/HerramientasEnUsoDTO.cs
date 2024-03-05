namespace ToolConWebAPI.DTO
{
	public class HerramientaEnUsoDTO
	{
	public int PrestamoID { get; set; }
		public int HerramientaID { get; set; }
		public string Nombre { get; set; }
		public string Marca { get; set; }
		public DateTime FechaCompra { get; set; }
		public int TiempoUsoEstimado { get; set; }
		public decimal Costo { get; set; }
		public int EstadoID { get; set; }
	}
}
