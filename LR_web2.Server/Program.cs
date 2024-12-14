using LR_web2.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using LR_web2.Server.Services;

namespace LR_web2.Server
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			// Add services to the container.

			builder.Services.AddControllers();
			builder.Services.AddDbContext<Context>(options => options.UseSqlite("Data Source=Travels.db"));
			builder.Services.AddDbContext<UserContext>(options => options.UseSqlite("Data Source = Users.db"));
			builder.Services.AddDbContext<OrderContext>(options => options.UseSqlite("Data Source = Carts.db"));
			builder.Services.AddMvc();
			builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddJwtBearer(options =>
				{
					options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
					{
						ValidateIssuer = false,
						ValidateAudience = false,
						ValidateLifetime = true,
						ValidateIssuerSigningKey = true,
						IssuerSigningKey = new SymmetricSecurityKey(
							Encoding.UTF8.GetBytes("bRhYJRIZvBj2vW4MrV5HVdPgIE6VMtCFB0kTtJ1m"))
					};
				});
			builder.Services.AddSingleton(
				new AuthService("bRhYJRIZvBj2vW4MrV5HVdPgIE6VMtCFB0kTtJ1m", 2592000));
				// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			builder.Services.AddMvc().AddJsonOptions(options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
			var app = builder.Build();

			app.UseDefaultFiles();
			app.UseStaticFiles();
			
			
			
			
			app.UseAuthentication();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.MapFallbackToFile("/index.html");

			app.Run();
		}
	}
}
