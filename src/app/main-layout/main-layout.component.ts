import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public isShowArrowUp = false;

  @ViewChild('aboutCompany') about: ElementRef;
  @ViewChild('contantUs') contant: ElementRef;
  @ViewChild('services') services: ElementRef;
  @ViewChild('questions') questions: ElementRef;

  @HostListener('window:scroll')
  onScrollEvent() {
    if (window.pageYOffset > 500) {
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
