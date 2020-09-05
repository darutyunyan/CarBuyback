import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('top', {static: false}) top: ElementRef;
  @ViewChild('aboutCompany', {static: false}) about: ElementRef;
  @ViewChild('contantUs', {static: false}) contant: ElementRef;
  @ViewChild('services', {static: false}) services: ElementRef;
  @ViewChild('questions', {static: false}) questions: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(view) {
    this[view].nativeElement.scrollIntoView({  behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
