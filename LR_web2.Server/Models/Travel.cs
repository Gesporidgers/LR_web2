namespace LR_web2.Server.Models
{
	public class Travel
	{
		public long Id { get; set; }
		public string? Name { get; set; }
		public string? ShortDesc { get; set; }
		public string? ImgSrc { get; set; }
		public UInt16? Cost { get; set; }
		public string? LongDesc { get; set; }
		public List<Property>? Properties { get; set; }
		public List<Image>? Images { get; set; }
	}
}
