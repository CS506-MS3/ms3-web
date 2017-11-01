import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PropertySummary} from '../../_domains/property-summary';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-properties-list',
  templateUrl: './my-properties-list.component.html',
  styleUrls: ['./my-properties-list.component.scss']
})
export class MyPropertiesListComponent implements OnInit {
  properties: PropertySummary[];

  private _mockData = {list: [
    {
      id: 1,
      title: 'Lorem Ipsum Dolores 1',
      address: '123 Test Ave., Madison, WI',
      price: 550,
      startDate: '2017-10-31T00:00:00',
      duration: 3,
      thumbnailUrl: 'assets/images/bedroom.jpg',
    },
    {
      id: 2,
      title: 'Lorem Ipsum Dolores 2',
      address: '223 Test Ave., Madison, WI',
      price: 550,
      startDate: '2017-10-31T00:00:00',
      duration: 3,
      thumbnailUrl: 'assets/images/bedroom.jpg',
    },
    {
      id: 3,
      title: 'Lorem Ipsum Dolores 3',
      address: '323 Test Ave., Madison, WI',
      price: 350,
      startDate: '2017-10-31T00:00:00',
      duration: 2,
      thumbnailUrl: 'assets/images/bedroom.jpg',
    },
    {
      id: 4,
      title: 'Lorem Ipsum Dolores 4',
      address: '124 Test Ave., Madison, WI',
      price: 750,
      startDate: '2017-11-31T00:00:00',
      duration: 8,
      thumbnailUrl: 'assets/images/bedroom.jpg',
    }
  ]};

  constructor(private _store: Store<any>, private _router: Router) {
    this._store.select('myProperties').subscribe((data) => {
      if (data.list.length > 0) {
      } else {
        data = this._mockData;
      }

      this.properties = data.list;
    });
  }

  ngOnInit() {
  }

  onRemove(id) {

    this._router.navigate(['property', id, 'remove']);
  }
}
