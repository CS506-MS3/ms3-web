import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {RestApiRequest} from "../core/rest-api-request";
import {API} from '../core/api-endpoints.constant';
import * as AuthActions from '../_actions/auth.actions';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';

export namespace SignOutEffects {
  export const REQUEST = 'SignOutEffects.REQUEST';
  export const SUCCESS = 'SignOutEffects.SUCCESS';
  export const ERROR = 'SignOutEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;
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
      .switchMap(() => {
        let request = new RestApiRequest(API.AUTH.SIGN_OUT);

        return this._api.request(request)
          .map(response => new Success())
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map(() => new AuthActions.Clear());

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .mergeMap(() => {

        return [
          new AuthActions.Clear(),
          new AlertActions.SetError('Server Error')
        ];
      });

    constructor(private _api: RestApiService, private actions$: Actions) {
    }
  }
}
