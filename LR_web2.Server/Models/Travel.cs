namespace LR_web2.Server.Models
{
	public class Travel
	{
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? ShortDesc { get; set; }
		public string? ImgSrc { get; set; }
		public UInt16? Cost { get; set; }
		public string? LongDesc { get; set; }
		public List<Property>? Properties { get; } = new();
		public List<ProductImage>? Images { get; }= new();
	}
}
