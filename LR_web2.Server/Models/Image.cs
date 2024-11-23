namespace LR_web2.Server.Models
{
    public class Image
    {
        public long id { get; set; }
        public Travel? product { get; set; }
        public string? path { get; set; }
    }
}
