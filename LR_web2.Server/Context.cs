using Microsoft.EntityFrameworkCore;
using LR_web2.Server.Models;
namespace LR_web2.Server
{
	public class Context : DbContext
	{
		public DbSet<Travel> travels { get; set; } = null !;
		public Context(DbContextOptions<Context> options) : base(options)
		{
			Database.EnsureCreated();
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite("Data Source=Travels.db");
		}
	}
}
