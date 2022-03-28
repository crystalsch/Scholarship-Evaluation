using InternsApp.Models;
using InternsApp.Service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternsApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InternsController : ControllerBase
    {
        IInternCollectionService _internCollectionService;
        public InternsController(IInternCollectionService internCollectionService)
        {
            _internCollectionService = internCollectionService ?? throw new ArgumentNullException(nameof(internCollectionService));
        }

        [HttpPut("{CNP}")]
        public async Task<IActionResult> UpdateInternCNPAsync(Guid CNP, [FromBody] Intern intern)
        {

            if (await _internCollectionService.Update(CNP, intern))
            {
                return Ok("Information update");
            }
            return NotFound("intern not found");
        }


        [HttpDelete("{CNP}")]
        public async Task<IActionResult> DeleteInternAsync(Guid CNP)
        {

            if (await _internCollectionService.Delete(CNP))
            {
                return Ok("the intern was deleted");
            }
            return NotFound("intern not found");
        }

        [HttpPost]
        public async Task<IActionResult> CreateIntern([FromBody] Intern intern)
        {
            if (intern == null)
                return BadRequest("intern is null");
            await _internCollectionService.Create(intern);
            return Ok(await _internCollectionService.GetAll());
        }

        [HttpGet]
        public async Task<IActionResult> GetIntern()
        {
            return Ok(await _internCollectionService.GetAll());
        }

        [HttpGet("{CNP}")]
        public async Task<IActionResult> GetInternAsync(Guid CNP)
        {
            Intern intern = await _internCollectionService.Get(CNP);
            if (intern == null)
            {
                return NotFound("intern not found");
            }
            return Ok(intern);
        }
    }
}
