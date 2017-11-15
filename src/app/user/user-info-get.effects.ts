import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {RestApiRequest} from '../core/rest-api-request';
import {RestApiService} from '../core/rest-api.service';
import {RequestError} from '../_domains/request-error';
import {API} from '../core/api-endpoints.constant';

import {AlertActions} from '../_actions/alert.actions';
import * as WishlistActions from '../_actions/wishlist.actions';
import * as AccessesActions from '../_actions/accesses.actions';
import * as MyPropertiesActions from '../_actions/my-properties.actions';
import * as UserInfoActions from '../_actions/user-info.actions';

import * as UserInfoGetEffectsActions from '../_effect-actions/user-info-get.actions';

@Injectable()
export class UserInfoGetEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(UserInfoGetEffectsActions.REQUEST)
    .map((action: UserInfoGetEffectsActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.USER.GET_INFO);
      request.setPathParams({userId: payload});

      return this._api.request(request)
        .map(response => new UserInfoGetEffectsActions.Success(response))
        .catch(error => Observable.of(new UserInfoGetEffectsActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(UserInfoGetEffectsActions.SUCCESS)
    .map((action: UserInfoGetEffectsActions.Success) => action.payload)
    .mergeMap((data) => [
      new UserInfoActions.Set({phone: data.phone, notification: data.notification}),
      new WishlistActions.Set({list: data.wishlist}),
      new AccessesActions.Set(this.processAccess(data.access)),
      new MyPropertiesActions.Set({list: data.properties, cursor: null})
    ]);

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(UserInfoGetEffectsActions.ERROR)
    .map((action: UserInfoGetEffectsActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }

  processAccess(response) {
    let accesses = {
      vendor: null,
      customer: null
    };
    if (response.vendor_next_payment_date) {
      accesses.vendor = {
        nextPaymentDate: response.vendor_next_payment_date,
        paymentAmount: response.vendor_payment_amount
      };
    }
    if (response.customer_next_payment_date) {
      accesses.customer = {
        nextPaymentDate: response.customer_next_payment_date,
        paymentAmount: response.customer_payment_amount
      };
    }

    return accesses;
  }
}
