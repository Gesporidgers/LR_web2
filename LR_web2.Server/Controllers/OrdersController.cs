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
    public class OrdersController : ControllerBase
    {
        private readonly OrderContext _context;

        public OrdersController(OrderContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Getorders()
        {
            return await _context.orders.ToListAsync();
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Order>>> GetOrder(string id)
        {
            var order = await _context.orders.Where(x=>x.userID == id).ToListAsync();

            if (order == null)
            {
                return NotFound();
            }

            return order;
        }

        // PUT: api/Orders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Order>> PostOrder(Order order)
        {
            _context.orders.Add(order);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{uid}")]
        public async Task<IActionResult> ClearUserCart(string uid)
        {
			var cart = await _context.orders.Where(x => x.userID == uid).ToListAsync();
			if (cart == null)
            {
                return NotFound();
            }

            _context.orders.RemoveRange(cart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        

        private bool OrderExists(int id)
        {
            return _context.orders.Any(e => e.Id == id);
        }
    }
}
