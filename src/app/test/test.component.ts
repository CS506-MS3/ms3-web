import {Component, OnInit} from '@angular/core';
import {GeoService} from '../core/geo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  exist: boolean;
  address = '';
  location_lat: any;
  location_lng: any;

  constructor(private geoService: GeoService) {
  }

  test() {
    this.geoService.getLocation(this.address).subscribe(response => {
      let result = response.json();

      this.exist = result.status === 'OK';
      this.location_lat = result.results[0].geometry.location.lat;
      this.location_lng = result.results[0].geometry.location.lng;
    });
  }
}
