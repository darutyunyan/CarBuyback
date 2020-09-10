import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Output()
  public moveToServices: EventEmitter<string> = new EventEmitter<string>(true);

  constructor() { }

  ngOnInit() {
  }

  toServices(){
    this.moveToServices.emit('services');
  }
}
