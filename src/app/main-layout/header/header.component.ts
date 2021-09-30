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
  public submitted = false;
  public isShowLoader = false;

  constructor(private mailServ: MailService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
      city: new FormControl('Воронеж', [Validators.required]),
      carModel: new FormControl(null),
      model: new FormControl(null),
      year: new FormControl(null),
      mileage: new FormControl(null),
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
    this.isShowLoader = true;

    const request = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      city: this.form.value.city,
      carModel: this.form.value.carModel,
      model: this.form.value.model,
      year: this.form.value.year,
      mileage: this.form.value.mileage,
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
      this.isShowLoader = false;
    }, () => {
      alert('Произошла ошибка, попробуйте позже!');
      this.submitted = false;
      this.isShowLoader = false;
    });
  }
}
