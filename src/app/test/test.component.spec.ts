import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import {GeoService} from '../geo.service';
import {Observable} from 'rxjs/Observable';

describe('TestComponent', () => {
  class MockGeoService {
    getLocation(params: any) {
      return Observable.of({
        status: 'OK',
        results: [
          {
            geometry: {
              location: {
                lat: 25.12,
                lng: 21.12
              }
            }
          }
        ]
      });
    }
  }
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: GeoService, useClass: MockGeoService}
      ],
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
