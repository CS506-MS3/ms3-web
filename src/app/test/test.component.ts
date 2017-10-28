import { Component, OnInit } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent{
  result: any;
  exist: boolean;
  address = '';
  location_lat: any;
  location_lng: any;
  constructor(private geoService: GeoService) {
  }

  test() {
    this.geoService.getLocation(this.address).subscribe(response => {
      this.result = response.json();
      this.location_lat = this.result.results[0].geometry.location.lat;
      this.location_lng = this.result.results[0].geometry.location.lng;
    });
    this.geoService.getLocation(this.address).subscribe(response => {
      this.result = response.json();
      if(this.result.status === 'OK')
      {
        this.exist = true;
      }
      else
      {
        this.exist = false;
      }
    });
  }
}
