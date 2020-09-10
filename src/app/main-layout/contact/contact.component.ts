import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public firstCity = {
    lat: 51.677080,
    lng: 39.170751
  };

  public secondCity = {
    lat: 45.039005,
    lng: 41.961946
  };

  public isFirstCityActive = true;
  public currentCity;

  constructor() { }

  ngOnInit() {
    this.setCity(this.isFirstCityActive);
  }

  public setCity(isFirstCity: boolean): void {
    if (isFirstCity) {
      this.currentCity = this.firstCity;
      this.isFirstCityActive = true;
    }
    else {
      this.currentCity = this.secondCity;
      this.isFirstCityActive = false;
    }
  }
}
