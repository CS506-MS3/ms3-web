import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {Router} from '@angular/router';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import {PasswordForm} from '../_domains/password-form';
import * as AuthActions from '../_actions/auth.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

export namespace DeactivateEffects {
  export const REQUEST = 'DeactivateEffects.REQUEST';
  export const SUCCESS = 'DeactivateEffects.SUCCESS';
  export const ERROR = 'DeactivateEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: PasswordForm) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;
  }

  export class Error implements Action {
    readonly type = ERROR;

    constructor(public payload: RequestError) {
      //TODO: define request error object
    }
  }

  @Injectable()
  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .map((action: Request) => action.payload)
      .switchMap((payload) => {
        let request = new RestApiRequest(API.AUTH.SIGN_IN);
        request.setBody(payload);

        return this._api.request(request)
          .switchMap(response => {
            let request = new RestApiRequest(API.DEACTIVATE);
            request.setHeader('DeactivateToken', response);

            return this._api.request(request)
              .map((response) => new Success())
              .catch(error => Observable.of(new Error(error)));
          })
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map(() => new AuthActions.Clear());

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .mergeMap((error: RequestError) => {

        return [
          new AuthActions.Clear(),
          new AlertActions.SetError(error.error)
        ];
      });

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
