using TeacherService.Models.Services.Mail;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace TeacherService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; private set; }
        private readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public void ConfigureServices(IServiceCollection services)
        {
            // Init Mail service.
            EmailSetting settings = new EmailSetting();
            Configuration.GetSection("AppSettings:EmailSetting").Bind(settings);
            services.AddTransient<IMailService>(x => new MailService(settings));

            // Init Cors service.
            string clientUrl = Configuration.GetValue<string>("AppSettings:ClientUrl:Url");

            services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins, builder => builder
                    .WithOrigins(clientUrl)
                    .AllowAnyHeader()
                    .AllowAnyMethod());
            });

            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
