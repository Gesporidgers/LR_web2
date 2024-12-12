using LR_web2.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace LR_web2.Server
{
	public class UserContext : DbContext
	{
		public DbSet<User> users {  get; set; }
		
		public UserContext(DbContextOptions<UserContext> options) : base(options) { Database.EnsureCreated();}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseSqlite("Data Source = Users.db");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<User>().ToTable("users");
			modelBuilder.Entity<User>().Property(user => user.name).HasMaxLength(60).IsRequired();
			modelBuilder.Entity<User>().Property(user => user.email).HasMaxLength(60).IsRequired();
			
		}
	}
}
