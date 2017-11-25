import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertiesFilterComponent} from './properties-filter.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {PropertyService} from '../property.service';

describe('PropertiesFilterComponent', () => {
  let component: PropertiesFilterComponent;
  let fixture: ComponentFixture<PropertiesFilterComponent>;

  const mockPropertyClass = {
    getOptions: jasmine.createSpy('getOptions'),
    propertyOptions$: Observable.of({
      list: [
        {
          id: 1,
          type: 'AMENITIES',
          alias: 'option1'
        }
      ]
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        {provide: PropertyService, useValue: mockPropertyClass}
      ],
      declarations: [PropertiesFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesFilterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
