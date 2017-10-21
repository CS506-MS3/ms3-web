import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPurchasePageComponent } from './access-purchase-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {Store} from '@ngrx/store';

describe('AccessPurchasePageComponent', () => {
  let component: AccessPurchasePageComponent;
  let fixture: ComponentFixture<AccessPurchasePageComponent>;
  const mockStore = {
    dispatch: jasmine.createSpy('dispatch')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {provide: Store, useValue: mockStore}
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
    it('should set purchase form to the data input if data has token', () => {
      const testPurchaseData = {
        item: {
          id: 1,
          title: 'Subleaser Access Subscription',
          pricePerItem: 10.99,
          canHaveMultiple: false
        },
        count: 1,
        token: {
          id: 'someToken',
          email: 'test@wisc.edu'
        }
      };

      component.onStripeTokenReceived(testPurchaseData);

      expect(component.hasToken).toBeTruthy();
      expect(component.purchaseForm).toEqual({
        id: testPurchaseData.item.id,
        count: testPurchaseData.count,
        token: testPurchaseData.token
      });
    });

    it('should reset token status & form if data input has no token', () => {
      const testPurchaseData = {
        item: {
          id: 1,
          title: 'Subleaser Access Subscription',
          pricePerItem: 10.99,
          canHaveMultiple: false
        },
        count: 1,
        token: {
          id: 'someToken',
          email: 'test@wisc.edu'
        }
      };
      component.onStripeTokenReceived(testPurchaseData);

      const updatedTestPurchaseData = {
        item: {
          id: 1,
          title: 'Subleaser Access Subscription',
          pricePerItem: 10.99,
          canHaveMultiple: false
        },
        count: 2,
        token: null
      };
      component.onStripeTokenReceived(updatedTestPurchaseData);

      expect(component.hasToken).toBeFalsy();
      expect(component.purchaseForm).toBeNull();
    });
  });

  describe('onSubmit', () => {
    it('should dispatch a AccessPurchaseEffects.Request', () => {
      component.purchaseForm = {
        id: 1,
        count: 1,
        token: {
          id: 'someToken',
          email: 'test@wisc.edu'
        }
      };

      component.onSubmit();

      expect(mockStore.dispatch).toHaveBeenCalledWith({
        type: 'AccessPurchaseEffects.REQUEST',
        payload: component.purchaseForm
      })
    });
  });
});
