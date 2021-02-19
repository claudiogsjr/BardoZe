using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ubboat_Adm.Infra;
using Ubboat_Adm.Model;

namespace Ubboat_Adm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContasController : ControllerBase
    {
        private readonly Contexto _context;

        public ContasController(Contexto context)
        {
            _context = context;
        }

        // GET: api/Contas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contas>>> GetConta()
        {
            return await _context.Conta.ToListAsync();
        }

        // GET: api/Contas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contas>> GetContas(int id)
        {
            var contas = await _context.Conta.FindAsync(id);

            if (contas == null)
            {
                return NotFound();
            }

            return contas;
        }

        // PUT: api/Contas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContas(int id,[FromForm] Contas contas)
        {
            if (id != contas.Id)
            {
                return BadRequest();
            }

            contas.Valor_Final = contas.Valor + contas.Juros + contas.Taxa - contas.Desconto;

            _context.Entry(contas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContasExists(id))
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

        // POST: api/Contas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Contas>> PostContas([FromForm] Contas contas)
        {
            _context.Conta.Add(contas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContas", new { id = contas.Id }, contas);
        }

        // DELETE: api/Contas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContas(int id)
        {
            var contas = await _context.Conta.FindAsync(id);
            if (contas == null)
            {
                return NotFound();
            }

            _context.Conta.Remove(contas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContasExists(int id)
        {
            return _context.Conta.Any(e => e.Id == id);
        }
    }
}
