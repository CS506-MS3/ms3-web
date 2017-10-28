import { TestBed, inject } from '@angular/core/testing';

import { GeoService } from './geo.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('GeoService', () => {
  class MockHttp {
    get() {

      return Observable.of(null);
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GeoService,
        {provide: Http, useClass: MockHttp}
      ]
    });
  });

  it('should be created', inject([GeoService], (service: GeoService) => {
    expect(service).toBeTruthy();
  }));
});
