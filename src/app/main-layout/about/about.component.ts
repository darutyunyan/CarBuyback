import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output()
  public moveToServices: EventEmitter<string> = new EventEmitter<string>(true);

  toServices(){
    this.moveToServices.emit('services');
  }
}
