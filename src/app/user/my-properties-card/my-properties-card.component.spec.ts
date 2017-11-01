import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPropertiesCardComponent } from './my-properties-card.component';
import {PropertySummaryCardComponent} from '../property-summary-card/property-summary-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MyPropertiesCardComponent', () => {
  let component: MyPropertiesCardComponent;
  let fixture: ComponentFixture<MyPropertiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        MyPropertiesCardComponent,
        PropertySummaryCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPropertiesCardComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 4,
      title: 'Lorem Ipsum Dolores 4',
      address: '124 Test Ave., Madison, WI',
      price: 750,
      startDate: '2017-11-31T00:00:00',
      duration: 8,
      thumbnailUrl: 'assets/images/bedroom.jpg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
