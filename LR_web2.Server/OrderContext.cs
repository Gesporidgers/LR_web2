using LR_web2.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace LR_web2.Server
{
	public class OrderContext : DbContext
	{
		public DbSet<Order> orders { get; set; }

		public OrderContext(DbContextOptions<OrderContext> options) : base(options){Database.EnsureCreated(); }
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			
			optionsBuilder.UseSqlite("Data Source = Orders.db");
		}

	}
}
