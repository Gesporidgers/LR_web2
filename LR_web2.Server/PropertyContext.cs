using Microsoft.EntityFrameworkCore;
using LR_web2.Server.Models;
namespace LR_web2.Server
{
	public class PropertyContext : DbContext
	{
		public DbSet<Property> properties { get; set; } = null !;
		public PropertyContext(DbContextOptions<PropertyContext> options) : base(options)
		{
			Database.EnsureCreated();
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite("Data Source=Properities.db");
		}
	}
}
