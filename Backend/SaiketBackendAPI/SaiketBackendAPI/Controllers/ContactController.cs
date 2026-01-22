using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SaiketBackendAPI.Data;
using SaiketBackendAPI.Models;

namespace SaiketBackendAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ContactController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult SendMessage(ContactMessage model)
        {
            _context.ContactMessages.Add(model);
            _context.SaveChanges();
            return Ok(new { message = "Message sent successfully" });
        }
    }

}
