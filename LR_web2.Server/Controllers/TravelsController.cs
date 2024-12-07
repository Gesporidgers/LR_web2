using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LR_web2.Server;
using LR_web2.Server.Models;

namespace LR_web2.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TravelsController : ControllerBase
	{
		private readonly Context _context;

		public TravelsController(Context context)
		{
			_context = context;
		}

		// GET: api/Travels
		[HttpGet]
		public IEnumerable<Travel> Gettravels()
		{
			return _context.travels.ToList();
		}

		// GET: api/Travels/5
		[HttpGet("{id}")]
		public ActionResult<Travel> GetTravel(int id)
		{
			var travel = _context.travels.Include(i => i.Images).Include(o => o.Properties).ToList().FirstOrDefault(t => t.Id == id);

			if (travel == null)
			{
				return NotFound();
			}

			return travel;
		}

		// POST: api/Travels
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Travel>> PostTravel(Travel travel)
		{
			_context.travels.Add(travel);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetTravel", new { id = travel.Id }, travel);
		}

		// DELETE: api/Travels/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteTravel(int id)
		{
			var travel = await _context.travels.FindAsync(id);
			if (travel == null)
			{
				return NotFound();
			}

			_context.travels.Remove(travel);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool TravelExists(int id)
		{
			return _context.travels.Any(e => e.Id == id);
		}
	}
}
