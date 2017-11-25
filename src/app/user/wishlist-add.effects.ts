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

import * as WishlistAddActions from '../_effect-actions/wishlist-add.actions';

@Injectable()
export class WishlistAddEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(WishlistAddActions.REQUEST)
    .map((action: WishlistAddActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.USER.WISHLIST.ADD);
      request.setBody({id: payload});

      return this._api.request(request)
        .map(response => new WishlistAddActions.Success(response))
        .catch(error => Observable.of(new WishlistAddActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(WishlistAddActions.SUCCESS)
    .map((action: WishlistAddActions.Success) => new WishlistActions.AddItem(action.payload));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(WishlistAddActions.ERROR)
    .map((action: WishlistAddActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
