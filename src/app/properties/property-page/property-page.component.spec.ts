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
      id: '5636139285217280',
      duration: 5,
      price: 530.59,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus felis est, et luctus lorem hendrerit nec. Aliquam mauris urna, euismod consequat ultricies eget, vehicula ut lacus. In hac habitasse platea dictumst. Sed at feugiat mi. Integer congue, dui id lobortis dignissim, nunc lacus feugiat lectus, ac mollis purus risus ut justo. Suspendisse ut lorem ante. Nunc at sem quis massa suscipit luctus et vitae neque. Quisque pharetra justo arcu, vitae sagittis nulla volutpat eu.\nEtiam gravida id mauris et placerat. Aliquam iaculis feugiat commodo. Praesent fermentum commodo ex at tincidunt. In bibendum lorem magna, nec pretium urna convallis vel. Pellentesque condimentum vestibulum neque vel vehicula. Morbi lobortis metus urna, id semper diam tristique nec. Phasellus interdum, nisi sed.',
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
        detailLevel1: 'Apt. 6B',
        detailLevel2: '430 W Johnson St.',
        city: 'Madison',
        state: 'WI',
        zipcode: '53703',
        type: 'APARTMENT'
      },
      status: false,
      owner: '5702666986455040',
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
