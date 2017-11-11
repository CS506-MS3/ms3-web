import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AccessPurchaseFormComponent} from './access-purchase-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AccessPurchaseFormComponent', () => {
  let component: AccessPurchaseFormComponent;
  let fixture: ComponentFixture<AccessPurchaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [AccessPurchaseFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPurchaseFormComponent);
    component = fixture.componentInstance;
    component.item = {
      title: 'Subleaser Access Subscription',
      price: 10.99,
      canHaveMultiple: false
    };
    fixture.detectChanges();
  });

  it('should create and have default count = 1', () => {
    expect(component).toBeTruthy();
    expect(component.count).toEqual(1);
  });

  describe('increment/decrementCount', () => {
    it('should increment & decrement count appropriately, with min value 1', () => {
      expect(component.count).toEqual(1);
      component.incrementCount();
      expect(component.count).toEqual(2);
      component.incrementCount();
      expect(component.count).toEqual(3);
      component.decrementCount();
      expect(component.count).toEqual(2);
      component.decrementCount();
      expect(component.count).toEqual(1);
      component.decrementCount();
      expect(component.count).toEqual(1);
    });
  });
});
