using System.ComponentModel.DataAnnotations;

namespace TeacherService.Dto
{
    public class FeedbackRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Phone { get; set; }

        public string Message { get; set; }
    }
}
