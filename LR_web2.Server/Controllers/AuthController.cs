using LR_web2.Server.Models;
using LR_web2.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace LR_web2.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AuthController : Controller
	{
		AuthService authService;
		UserContext userContext;
		public AuthController(AuthService authService, UserContext userContext) {
			this.userContext = userContext;
			this.authService = authService;
		}

		[HttpPost("login")]
		public ActionResult<AuthData> PostLogin([FromBody] User model)
		{
			var user = userContext.users.FirstOrDefault(u => u.email == model.email);
            if ( user == null)
            {
				return BadRequest(new { email = "no user with this email" });
            }

			var passwordValid = authService.VerifyPassword(model.password, user.password);

            if (!passwordValid )
            {
				return BadRequest(new { password = "invalid password" });
            }

			return authService.GetAuthData(user.id);
        }

		[HttpPost("register")]
		public ActionResult<AuthData> Register([FromBody] User model)
		{
			var emailUniq = () =>
			{
				var user = userContext.users.FirstOrDefault(u => u.email == model.email);
				return user == null;
			};
			if (!(emailUniq.Invoke())) return BadRequest(new { email = "user with this email already exists" });
			var usernameUniq = () =>
			{
				var user = userContext.users.FirstOrDefault(u => u.name == model.name);
				return user == null;
			};
			if (!usernameUniq.Invoke()) return BadRequest(new { name = "this name is already taken" });
			var id = Guid.NewGuid().ToString();
			var user = new User
			{
				id = id,
				email = model.email,
				name = model.name,
				password = authService.HashPassword(model.password)
			};
			userContext.users.Add(user);
			userContext.SaveChanges();
			return authService.GetAuthData(id);
		}

		[HttpOptions("checktoken")]
		public ActionResult<bool> checkToken(AuthData data)
		{
			if (data.TokenExpirationTime < DateTimeOffset.UtcNow.ToUnixTimeSeconds())
			{
				return false;
			}
			else
			{
				return true;
			}
		}

	}
}
