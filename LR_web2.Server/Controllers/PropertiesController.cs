﻿using System;
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
    public class PropertiesController : ControllerBase
    {
        private readonly PropertyContext _context;

        public PropertiesController(PropertyContext context)
        {
            _context = context;
        }

        // GET: api/Properties
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Property>>> Getproperties()
        {
            return await _context.properties.ToListAsync();
        }

        // GET: api/Properties/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Property>> GetProperty(long id)
        {
            var @property = await _context.properties.FindAsync(id);

            if (@property == null)
            {
                return NotFound();
            }

            return @property;
        }

        // PUT: api/Properties/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProperty(long id, Property @property)
        {
            if (id != @property.id)
            {
                return BadRequest();
            }

            _context.Entry(@property).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PropertyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Properties
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Property>> PostProperty(Property @property)
        {
            _context.properties.Add(@property);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProperty", new { id = @property.id }, @property);
        }

        // DELETE: api/Properties/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProperty(long id)
        {
            var @property = await _context.properties.FindAsync(id);
            if (@property == null)
            {
                return NotFound();
            }

            _context.properties.Remove(@property);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PropertyExists(long id)
        {
            return _context.properties.Any(e => e.id == id);
        }
    }
}