import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @ViewChild('carBuyback') carBuyback: ElementRef;
  @ViewChild('carExchange') carExchange: ElementRef;
  @ViewChild('carSale') carSale: ElementRef;
  @ViewChild('visitSpecialist') visitSpecialist: ElementRef;
  @ViewChild('registrationTransaction') registrationTransaction: ElementRef;

  scrollTo(view: string) {
    this[view].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
