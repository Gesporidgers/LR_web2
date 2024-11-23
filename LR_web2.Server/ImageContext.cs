using Microsoft.EntityFrameworkCore;
using LR_web2.Server.Models;
namespace LR_web2.Server
{
	public class ImageContext : DbContext
	{
		public DbSet<Image> travels { get; set; } = null !;
		public ImageContext(DbContextOptions<ImageContext> options) : base(options)
		{
			Database.EnsureCreated();
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite("Data Source=Images.db");
		}
	}
}
