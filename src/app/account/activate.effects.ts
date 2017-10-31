import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

import {HttpStatus} from '../core/http-status.enum';
import {RestApiService} from '../core/rest-api.service';
import {RestApiRequest} from '../core/rest-api-request';
import {RequestError} from '../_domains/request-error';
import {API} from '../core/api-endpoints.constant';

import {AlertActions} from '../_actions/alert.actions';
import * as AuthActions from '../_actions/auth.actions';
import * as WishlistActions from '../_actions/wishlist.actions';

import {Auth} from '../_domains/auth';
import {Wishlist} from '../_domains/wishlist';
import {AuthResponse} from '../_domains/auth-response';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

export namespace ActivateEffects {
  export const REQUEST = 'ActivateEffects.REQUEST';
  export const SUCCESS = 'ActivateEffects.SUCCESS';
  export const ERROR = 'ActivateEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: string) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: AuthResponse) {
    }
  }

  export class Error implements Action {
    readonly type = ERROR;

    constructor(public payload: RequestError) {
    }
  }

  @Injectable()
  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .map((action: Request) => action.payload)
      .switchMap((payload) => {
        const request = new RestApiRequest(API.ACTIVATE);
        request.setUrlParams({token: payload});

        return this._api.request(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .do(() => this._router.navigate(['activationSuccess']))
      .map((action: Success) => action.payload)
      .mergeMap((payload: AuthResponse) => [
        new AuthActions.Set(new Auth(payload.token, payload.user.email, payload.user.id)),
        new WishlistActions.Set(new Wishlist(payload.user.wishlist))
      ]);

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .map((error: RequestError) => {
        switch (error.status) {
          case HttpStatus.UNAUTHORIZED:
            this._router.navigate(['activationLinkRequest']);
            return new AlertActions.SetError('Activation link invalid');

          default:
            return new AlertActions.SetError('Unknown Error: ' + error.error);
        }
      });

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
