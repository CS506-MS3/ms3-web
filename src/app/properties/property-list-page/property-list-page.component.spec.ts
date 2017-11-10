import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PropertyListPageComponent} from './property-list-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('PropertyListPageComponent', () => {
  let component: PropertyListPageComponent;
  let fixture: ComponentFixture<PropertyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
