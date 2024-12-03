using Microsoft.EntityFrameworkCore;
using LR_web2.Server.Models;
namespace LR_web2.Server
{
	public class Context : DbContext
	{
		public DbSet<Travel> travels { get; set; } = null !;
		public DbSet<Property> properties { get; set; } = null!;
		public DbSet<ProductImage> images { get; set; } = null!;
		public Context(DbContextOptions<Context> options) : base(options)
		{
			Database.EnsureCreated();
		}
		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite("Data Source=Travels.db");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Travel>().HasMany(e=> e.Images).WithOne(e => e.product).HasForeignKey(e=>e.productId);
			modelBuilder.Entity<Travel>().HasMany(e=> e.Properties).WithOne(e => e.product).HasForeignKey(e=> e.productId);
		}
	}
}
