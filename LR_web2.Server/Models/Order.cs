namespace LR_web2.Server.Models
{
	public class Order
	{
		public int Id { get; set; }
		public string userID { get; set; }
		public int travelID { get; set; }
		public UInt16 travelPrice { get; set; }

	}
}
