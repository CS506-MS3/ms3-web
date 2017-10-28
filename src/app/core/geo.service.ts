import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GeoService {
  private API_KEY = 'AIzaSyBX8CpFibBUfvhFkHQoBYVSeL2wEbRz6y8';
  private GEO_CODE_API = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  constructor(private _http: Http) {
  }

// format Number + Street + City + State
  /*  this.geoService.getLocation(this.address).subscribe(response => {
   this.result = response.json();
   this.location_lat = this.result.results[0].geometry.location.lat;
   this.location_lng = this.result.results[0].geometry.location.lng;
   console.log(this.result);
   });*/
  getLocation(address: string) {

    return this._http.get(this.GEO_CODE_API, {
      params: {
        address: address.replace(' ', '+'),
        key: this.API_KEY
      }
    });
  }

// use verifyAddress
  /*
   this.geoService.getLocation(this.address).subscribe(response => {
   this.result = response.json();
   console.log(this.result);
   if(this.result.status === 'OK')
   {
   this.exist = true;
   }
   else
   {
   this.exist = false;
   }
   });*/
}
