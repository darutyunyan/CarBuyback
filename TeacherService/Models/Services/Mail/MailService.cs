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
                Text = string.Format(MESSAGE_FORMAT, request.Name, request.Phone, request.City, request.Message)
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

        private const string MESSAGE_FORMAT = "<p>Имя: {0}<br>Телефон: {1}<br>Город: {2}</p><p>Сообщение: {3}</p>";

        #endregion

        #region Private property

        private EmailSetting _settings = null;

        #endregion
    }
}
