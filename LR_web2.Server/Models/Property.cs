namespace LR_web2.Server.Models
{
    public class Property
    {
        public int id { get; set; }
        public Travel? product { get; set; }
        public string? name { get; set; }
        public int? productId { get; set; }
        public uint property_price { get; set; }

    }
}
