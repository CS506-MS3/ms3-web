import {Component, HostBinding, OnInit} from '@angular/core';
import {Properties} from '../../_domains/properties';

@Component({
  selector: 'app-property-list-page',
  templateUrl: './property-list-page.component.html',
  styleUrls: ['./property-list-page.component.scss']
})
export class PropertyListPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  data: Properties = {
    list: [
      {
        id: 1,
        title: 'Lorem Ipsum Dolores',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      },
      {
        id: 2,
        title: 'Lorem Ipsum Dolores',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      },
      {
        id: 3,
        title: 'Lorem Ipsum Dolores',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      },
      {
        id: 4,
        title: 'Lorem Ipsum Dolores',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      },
      {
        id: 5,
        title: 'Lorem Ipsum Dolores',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      },
      {
        id: 6,
        title: 'Lorem Ipsum Dolores',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      },
    ]
  };
  sortOptions = {
    sortBy: 'recent',
    direction: 'UP'
  };

  constructor() {
  }

  ngOnInit() {
  }

  sortList(sortOptions) {
    console.log(sortOptions);
  }

  requestMore() {
    console.log('getMore');
  }
}
