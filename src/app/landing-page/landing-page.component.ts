import {Component, HostBinding, OnInit} from '@angular/core';
import {Properties} from '../_domains/properties';
import {PropertiesService} from '../properties/properties.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @HostBinding('class') cssClass = 'content-container';

  queryParams: any;
  data: Properties;

  constructor(private _propertiesService: PropertiesService) {
    this.queryParams = {sortBy: 'recent', direction: 'UP', count: 6};
  }

  ngOnInit() {
    this._propertiesService.query(this.queryParams);
    this._propertiesService.properties$.subscribe((properties) => {
      this.data = properties;
    });
  }

}
