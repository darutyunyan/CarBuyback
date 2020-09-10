using System.Threading.Tasks;

namespace TeacherService.Models.Services.Mail
{
    public interface IMailService
    {
        Task SendEmail(string name, string phone, string message);
    }
}
