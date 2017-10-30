import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  data = {
    properties: [
      {
        Image: 'assets/images/eachProperty.jpg',
        Address: '123 Badger St, Madison, WI',
        PropertyType: '3-bed Apartment',
        Price: '$800',
        LeaseType: '12-month'
      },
      {
        Image: 'assets/images/eachProperty.jpg',
        Address: '123 Badger St, Madison, WI',
        PropertyType: '3-bed Apartment',
        Price: '$800',
        LeaseType: '12-month'
      },
      {
        Image: 'assets/images/eachProperty.jpg',
        Address: '123 Badger St, Madison, WI',
        PropertyType: '3-bed Apartment',
        Price: '$800',
        LeaseType: '12-month'
      },
      {
        Image: 'assets/images/eachProperty.jpg',
        Address: '123 Badger St, Madison, WI',
        PropertyType: '3-bed Apartment',
        Price: '$800',
        LeaseType: '12-month'
      },
      {
        Image: 'assets/images/eachProperty.jpg',
        Address: '123 Badger St, Madison, WI',
        PropertyType: '3-bed Apartment',
        Price: '$800',
        LeaseType: '12-month'
      },
      {
        Image: 'assets/images/eachProperty.jpg',
        Address: '123 Badger St, Madison, WI',
        PropertyType: '3-bed Apartment',
        Price: '$800',
        LeaseType: '12-month'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
