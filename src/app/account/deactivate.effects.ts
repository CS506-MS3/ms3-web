import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import {PasswordForm} from '../_domains/password-form';
import * as AuthActions from '../_actions/auth.actions';
import * as WishlistActions from '../_actions/wishlist.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import {HttpStatus} from '../core/http-status.enum';

export namespace DeactivateEffects {
  export const REQUEST = 'DeactivateEffects.REQUEST';
  export const SUCCESS = 'DeactivateEffects.SUCCESS';
  export const ERROR = 'DeactivateEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: any) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;
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
        const request = new RestApiRequest(API.DEACTIVATE);
        request.setPathParams({userId: payload.id});
        request.setBody(payload.form);

        return this._api.request(request)
          .map(() => new Success())
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .mergeMap(() => [
        new AuthActions.Clear(),
        new WishlistActions.Clear()
      ]);

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .mergeMap((error: RequestError) => {
        switch (error.status) {
          case HttpStatus.BAD_REQUEST:
            return [
              new AlertActions.SetError('Deactivation Failed: Invalid Password Form')
            ];

          case HttpStatus.UNAUTHORIZED:
            return [
              new AuthActions.Clear(),
              new WishlistActions.Clear(),
              new AlertActions.SetError('Deactivation Failed: Authentication Expired')
            ];

          case HttpStatus.NOT_FOUND:
            return [
              new AuthActions.Clear(),
              new WishlistActions.Clear(),
              new AlertActions.SetError('Deactivation Failed: Account does not exist')
            ];

          case HttpStatus.CONFLICT:
            return [
              new AuthActions.Clear(),
              new WishlistActions.Clear(),
              new AlertActions.SetError('Deactivation Failed: Account Already Inactive')
            ];

          default:
            return [
              new AlertActions.SetError('Deactivation Failed: Server Error')
            ];
        }
      });

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
