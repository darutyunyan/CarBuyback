using System.ComponentModel.DataAnnotations;

namespace TeacherService.Dto
{
    public class FeedbackRequest
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string City { get; set; }

        public string CarModel { get; set; }

        public string Model { get; set; }

        public string Year { get; set; }

        public string Mileage { get; set; }

        public string Message { get; set; }
    }
}
