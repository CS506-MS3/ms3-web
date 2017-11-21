import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertyListPageComponent} from './property-list-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {PropertiesService} from '../properties.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('PropertyListPageComponent', () => {
  let component: PropertyListPageComponent;
  let fixture: ComponentFixture<PropertyListPageComponent>;
  const mockService = {
    query: jasmine.createSpy('query'),
    properties$: Observable.of({list: [], cursor: null})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: PropertiesService, useValue: mockService}
      ],
      declarations: [PropertyListPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
