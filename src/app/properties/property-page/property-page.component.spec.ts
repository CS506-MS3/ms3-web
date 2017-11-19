import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertyPageComponent} from './property-page.component';
import {PropertyService} from '../property.service';
import {Observable} from 'rxjs/Observable';

describe('PropertyPageComponent', () => {
  let component: PropertyPageComponent;
  let fixture: ComponentFixture<PropertyPageComponent>;
  const mockPropertyService = {
    propertyOptions$: Observable.of({
      list: []
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
