using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using TeacherService.Dto;

namespace TeacherService.Models.Services.Mail
{
    public class MailService : IMailService
    {
        public MailService(EmailSetting settings)
        {
            _settings = settings;
        }

        public async Task SendEmail(FeedbackRequest request)
        {
            var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress(_settings.SenderName, _settings.EmailFrom));
            emailMessage.To.Add(new MailboxAddress(string.Empty, _settings.EmailTo));
            emailMessage.Subject = NEW_CLIENT;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = string.Format(MESSAGE_FORMAT,
                    request.Name,
                    request.Phone,
                    request.City,
                    request.CarModel,
                    request.Model,
                    request.Year,
                    request.Mileage,
                    request.Message)
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(_settings.SmtpClient, _settings.Port, true);
                await client.AuthenticateAsync(_settings.EmailFrom, _settings.PasswordFrom);
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }
        }

		public async Task SendShortEmail(ShortFeedbackRequest request)
		{
			var emailMessage = new MimeMessage();

			emailMessage.From.Add(new MailboxAddress(_settings.SenderName, _settings.EmailFrom));
			emailMessage.To.Add(new MailboxAddress(string.Empty, _settings.EmailTo));
			emailMessage.Subject = NEW_QUESTION;
			emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
			{
				Text = string.Format(SHORT_MESSAGE_FORMAT,
					request.Name,
					request.Phone,
					request.Email,
					request.Message)
			};

			using (var client = new SmtpClient())
			{
				await client.ConnectAsync(_settings.SmtpClient, _settings.Port, true);
				await client.AuthenticateAsync(_settings.EmailFrom, _settings.PasswordFrom);
				await client.SendAsync(emailMessage);

				await client.DisconnectAsync(true);
			}
		}

		#region Private constants

		private const string NEW_CLIENT = "Новая заявка на звонок!";

		private const string NEW_QUESTION = "Новый вопрос!";

        private const string MESSAGE_FORMAT = "<p>Имя: {0}<br>Телефон: {1}<br>Город: {2}<br>Марка автомобиля: {3}<br>Модель: {4}<br>Год выпуска: {5}<br>Пробег: {6}</p><p>Сообщение: {7}</p>";

		private const string SHORT_MESSAGE_FORMAT = "<p>Имя: {0}<br>Телефон: {1}<br>Почта: {2}<p>Сообщение: {3}</p>";

		#endregion

		#region Private property

		private EmailSetting _settings = null;

        #endregion
    }
}
