import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSuccessPageComponent } from './sign-up-success-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('SignUpSuccessPageComponent', () => {
  let component: SignUpSuccessPageComponent;
  let fixture: ComponentFixture<SignUpSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ SignUpSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
