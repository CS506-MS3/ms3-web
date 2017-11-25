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

import * as WishlistRemoveActions from '../_effect-actions/wishlist-remove.actions';

@Injectable()
export class WishlistRemoveEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(WishlistRemoveActions.REQUEST)
    .map((action: WishlistRemoveActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.USER.WISHLIST.DELETE);
      request.setPathParams({id: payload});

      console.log(payload);
      console.log(parseInt(payload));
      return this._api.request(request)
        .map(response => new WishlistRemoveActions.Success({id: payload}))
        .catch(error => Observable.of(new WishlistRemoveActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(WishlistRemoveActions.SUCCESS)
    .map((action: WishlistRemoveActions.Success) => new WishlistActions.RemoveItem(action.payload));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(WishlistRemoveActions.ERROR)
    .map((action: WishlistRemoveActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
