import {Action} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {Auth} from '../_domains/auth';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import * as AuthActions from '../_actions/auth.actions';
import {HttpStatus} from '../core/http-status.enum';
import 'rxjs/add/observable/of';

export namespace SignInEffects {
  export const REQUEST = 'SignInEffects.REQUEST';
  export const SUCCESS = 'SignInEffects.SUCCESS';
  export const ERROR = 'SignInEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: Credentials) {
    }
  }

  export class Success implements Action {
    readonly type = SUCCESS;

    constructor(public payload: Auth) {
    }
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
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .map((action: Success) => action.payload)
      .map((response) => new AuthActions.Set(response));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .map((error: RequestError) => {
        switch (error.status) {
          case HttpStatus.UNAUTHORIZED: // Invalid Credentials
            return new AlertActions.SetError('Invalid Credentials');

          case HttpStatus.FORBIDDEN:
            this._router.navigate['activationLinkRequest'];
            return new AlertActions.SetError('Activation Required');

          default:
            return new AlertActions.SetError('Unknown Error');
        }
      });

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
