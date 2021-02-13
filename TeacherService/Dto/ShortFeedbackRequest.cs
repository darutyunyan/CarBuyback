using System.ComponentModel.DataAnnotations;

namespace TeacherService.Dto
{
    public class ShortFeedbackRequest
  {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Phone { get; set; }

        public string Email { get; set; }

        public string Message { get; set; }
    }
}
