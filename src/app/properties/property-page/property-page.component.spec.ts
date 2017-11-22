import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertyPageComponent} from './property-page.component';
import {PropertyService} from '../property.service';
import {Observable} from 'rxjs/Observable';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('PropertyPageComponent', () => {
  let component: PropertyPageComponent;
  let fixture: ComponentFixture<PropertyPageComponent>;
  const mockPropertyService = {
    getOptions: jasmine.createSpy('getOptions'),
    get: jasmine.createSpy('get'),
    propertyOptions$: Observable.of({
      list: []
    }),
    property$: Observable.of({
      id: '123',
      duration: 5,
      price: 530.59,
      description: 'test description',
      options: [
        1,
        2,
        3,
        4,
        5,
        11,
        13
      ],
      address: {
        geocode: {
          lat: 43.0730257,
          lng: -89.3928802
        },
        detailLevel1: 'Test APT',
        detailLevel2: '111 Dayton St.',
        city: 'Madison',
        state: 'WI',
        zipcode: '53712',
        type: 'APARTMENT'
      },
      status: false,
      owner: '1234',
      imageUrls: [],
      title: 'Test Object 3',
      roomType: '1BR',
      startDate: '2017-11-10T21:16:48.757Z',
      createTime: '2017-11-11T04:52:13.480Z',
      updateTime: '2017-11-11T04:52:13.480Z'
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: PropertyService, useValue: mockPropertyService}
      ],
      declarations: [PropertyPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
