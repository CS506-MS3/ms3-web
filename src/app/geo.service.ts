import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GeoService {
  private API_KEY ='AIzaSyBX8CpFibBUfvhFkHQoBYVSeL2wEbRz6y8';
  private address: string[];
  private address_sent: string = '';
  private exist: boolean;
  private result: any;
  private temp: string;
  constructor(private http: Http) {
  }
// format Number + Street + City + State
/*  this.geoService.getLocation(this.address).subscribe(response => {
  this.result = response.json();
  this.location_lat = this.result.results[0].geometry.location.lat;
  this.location_lng = this.result.results[0].geometry.location.lng;
  console.log(this.result);
});*/
  getLocation(address: string){
    this.address = address.split(' ', 10);
    for (let i of this.address)
    {
      this.address_sent = this.address_sent.concat('+');
      this.address_sent = this.address_sent.concat(i);
    }
    this.address_sent = this.address_sent.substr(1);
    this.address_sent = 'https://maps.googleapis.com/maps/api/geocode/json?address='.concat(this.address_sent);
    this.address_sent = this.address_sent.concat('&key=');
    this.address_sent = this.address_sent.concat(this.API_KEY);
    this.result = this.http.get(this.address_sent);
    this.address_sent = '';
    return this.result;
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
