import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationSuccessPageComponent } from './activation-success-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ActivationSuccessPageComponent', () => {
  let component: ActivationSuccessPageComponent;
  let fixture: ComponentFixture<ActivationSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ ActivationSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
