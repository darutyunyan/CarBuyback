using TeacherService.Dto;
using TeacherService.Models.Services.Mail;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TeacherService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactUsController : BaseController
    {
        public ContactUsController(IMailService mailService)
        {
            _mailServ = mailService;
        }

        [Route("Feedback")]
        [HttpPost]
        public async Task<Response> Feedback(FeedbackRequest request)
        {
            Response response = new Response();

            try
            {
                await _mailServ.SendEmail(request);
            }
            catch (Exception ex)
            {
                SetResponse(response, ex);
            }

            return response;
        }

        private readonly IMailService _mailServ = null;
    }
}
