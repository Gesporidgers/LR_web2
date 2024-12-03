namespace LR_web2.Server.Models
{
    public class ProductImage
    {
        public int id { get; set; }
        public Travel? product { get; set; }
        public int? productId { get; set; }
        public string? path { get; set; }
    }
}
