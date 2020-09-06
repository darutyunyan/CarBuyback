import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public isShowArrowUp = false;

  @ViewChild('aboutCompany', { static: false }) about: ElementRef;
  @ViewChild('contantUs', { static: false }) contant: ElementRef;
  @ViewChild('services', { static: false }) services: ElementRef;
  @ViewChild('questions', { static: false }) questions: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    if (window.pageYOffset > 1000) {
      this.isShowArrowUp = true;
    } else {
      this.isShowArrowUp = false;
    }
  }

  constructor() { }

  ngOnInit() {
    this.onScrollEvent();
  }

  scrollTo(view: string) {
    this[view].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
