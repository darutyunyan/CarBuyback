import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailService } from 'src/app/shared/mail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  public moveToContactUs: EventEmitter<string> = new EventEmitter<string>(true);

  public form: FormGroup;
  submitted = false;

  constructor(private mailServ: MailService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      city: new FormControl('Ставрополь', [Validators.required]),
      message: new FormControl(null)
    });
  }

  toContact() {
    this.moveToContactUs.emit('contant');
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted = true;

    const request = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      city: this.form.value.city,
      message: this.form.value.message
    };

    this.mailServ.feedback(request).subscribe((res: any) => {
      if (res.serviceError == null) {
        alert('Ваше сообщение успешно отправлено!');
        this.form.reset({ city: 'Ставрополь' });
      } else {
        alert('Произошла ошибка, попробуйте позже!');
      }
      this.submitted = false;
    }, () => {
      alert('Произошла ошибка, попробуйте позже!');
      this.submitted = false;
    });
  }
}
