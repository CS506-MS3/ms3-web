import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SubscriptionListComponent} from './subscription-list.component';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {RouterTestingModule} from '@angular/router/testing';

describe('SubscriptionListComponent', () => {
  class MockStore {
    select() {
      return Observable.of({
        list: []
      });
    }
  }
  let component: SubscriptionListComponent;
  let fixture: ComponentFixture<SubscriptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: Store, useClass: MockStore}
      ],
      declarations: [SubscriptionListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.vendorAccess).toBeDefined();
    expect(component.customerAccess).toBeDefined();
  });
});
