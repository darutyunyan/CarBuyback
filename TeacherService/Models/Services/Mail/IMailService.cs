using System.Threading.Tasks;
using TeacherService.Dto;

namespace TeacherService.Models.Services.Mail
{
	public interface IMailService
	{
		Task SendEmail(FeedbackRequest request);

		Task SendShortEmail(ShortFeedbackRequest request);
	}
}
