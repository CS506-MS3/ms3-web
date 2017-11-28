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
  data: Properties;

  constructor(private _propertiesService: PropertiesService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) {
    this._activatedRoute.queryParams.subscribe((params) => {
      if (params.sortBy && params.direction) {
        this.queryParams = params;
      } else {
        this.queryParams = Object.assign({
          sortBy: 'recent',
          direction: 'UP'
        }, params);
      }
    });
  }

  ngOnInit() {
    this._propertiesService.query(this.queryParams);
    this._activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
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

  applyFilter(filterParams) {
    const defaultQueryParams = {
      sortBy: this._activatedRoute.snapshot.queryParams.sortBy || 'recent',
      direction: this._activatedRoute.snapshot.queryParams.direction || 'UP'
    };
    const newQueryParams = Object.assign({}, defaultQueryParams, filterParams);

    this._router.navigate(['properties'], {queryParams: newQueryParams});
  }
}
