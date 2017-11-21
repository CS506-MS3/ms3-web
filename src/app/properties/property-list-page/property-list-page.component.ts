import {Component, HostBinding, OnInit} from '@angular/core';
import {Properties} from '../../_domains/properties';
import {ActivatedRoute, Router} from '@angular/router';
import {PropertiesService} from '../properties.service';
import {PropertyQueryParams} from '../../_domains/property-query-params';

@Component({
  selector: 'app-property-list-page',
  templateUrl: './property-list-page.component.html',
  styleUrls: ['./property-list-page.component.scss']
})
export class PropertyListPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  queryParams: any;
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
    ],
    cursor: null
  };

  constructor(private _propertiesService: PropertiesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    const urlQueryParams = this._activatedRoute.snapshot.queryParams;
    if (!urlQueryParams.sortBy || !urlQueryParams.direction) {
      const newQueryParams = {
        sortBy: urlQueryParams.sortBy || 'recent',
        direction: urlQueryParams.direction || 'UP'
      };
      this._router.navigate(['properties'], {queryParams: newQueryParams});
    }
  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      if (params.sortBy && params.direction) {
        this.queryParams = params;
        this._propertiesService.query(<PropertyQueryParams>params);
      }
    });
    this._propertiesService.properties$.subscribe((properties) => {
      this.data = properties;
    });
  }

  sortList(sortOptions) {
    const newQueryParams = Object.assign({}, this.queryParams, sortOptions);
    delete newQueryParams.cursor;

    this._router.navigate(['properties'], {queryParams: newQueryParams});
  }

  requestMore() {
    const newQueryParams = Object.assign({}, this.queryParams, {cursor: this.data.cursor});

    this._router.navigate(['properties'], {queryParams: newQueryParams});
  }
}
