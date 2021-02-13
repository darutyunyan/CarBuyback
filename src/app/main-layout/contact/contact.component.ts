import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/shared/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public isShowLoader = false;

  constructor(private mailServ: MailService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      email: new FormControl(null, [Validators.email]),
      message: new FormControl(null, [Validators.required])
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted = true;
    this.isShowLoader = true;

    const request = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      email: this.form.value.email,
      message: this.form.value.message
    };

    this.mailServ.shortFeedback(request).subscribe((res: any) => {
      if (res.serviceError == null) {
        alert('Ваше сообщение успешно отправлено!');
        this.form.reset({ city: 'Ставрополь' });
      } else {
        alert('Произошла ошибка, попробуйте позже!');
      }
      this.submitted = false;
      this.isShowLoader = false;
    }, () => {
      alert('Произошла ошибка, попробуйте позже!');
      this.submitted = false;
      this.isShowLoader = false;
    });
  }
}
