import {TestBed, inject} from '@angular/core/testing';

import {AccessService} from './access.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Store} from '@ngrx/store';
import * as SubscriptionCancelActions from '../_effect-actions/subscription-cancel.actions';

describe('AccessService', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = {
      select: jasmine.createSpy('select').and.returnValue(Observable.of({
        vendor: {
          nextPaymentDate: null,
          paymentAmount: null
        },
        customer: {
          nextPaymentDate: null,
          paymentAmount: null
        },
      })),
      dispatch: jasmine.createSpy('dispatch')
    };
    TestBed.configureTestingModule({
      providers: [
        {provide: Store, useValue: mockStore},
        AccessService
      ]
    });
  });

  it('should be created', inject([AccessService], (service: AccessService) => {
    expect(service).toBeTruthy();
  }));

  describe('Cancel Subscription', () => {
    it('should dispatch SubscriptionCancelActions Request',
      inject([AccessService], (service: AccessService) => {
      const form = {
        password: 'test'
      };
      const type = 'VENDOR';

      service.cancelSubscription(form, type);

      expect(mockStore.dispatch).toHaveBeenCalledWith(new SubscriptionCancelActions.Request({
        password: 'test',
        type: 'VENDOR'
      }));
    }));
  });
});
