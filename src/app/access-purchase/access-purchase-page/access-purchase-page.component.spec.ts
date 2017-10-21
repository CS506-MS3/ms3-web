import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPurchasePageComponent } from './access-purchase-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AccessPurchasePageComponent', () => {
  let component: AccessPurchasePageComponent;
  let fixture: ComponentFixture<AccessPurchasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ AccessPurchasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPurchasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and have appropriate default config', () => {
    expect(component).toBeTruthy();
    expect(component.hasToken).toBeFalsy();
  });

  describe('onStripeTokenReceived', () => {
    it('should do something', () => {
    });
  });
});
