import {Action} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import 'rxjs/add/operator/switchMap';
import * as AuthActions from '../_actions/auth.actions';
import {Router} from '@angular/router';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {HttpStatus} from '../core/http-status.enum';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';

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

    constructor(public payload: Auth) {
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
        let request = new RestApiRequest(API.ACTIVATE);
        request.setBody({activationToken: payload});

        return this._api.request(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .do(() => this._router.navigate(['activationSuccess']))
      .map((action: Success) => {
        return new AuthActions.Set(action.payload)
      });

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .map((error: RequestError) => {
        switch (error.status) {
          case HttpStatus.UNAUTHORIZED: // TODO: In case token invalid. confirm with server
            this._router.navigate(['activationLinkRequest']);
            return new AlertActions.SetError('Invalid Link: ' + error.error);

          case HttpStatus.BAD_REQUEST: // TODO: In case account has been activated. confirm with server
            this._router.navigate(['landingPage']);
            return new AlertActions.SetError('Account has already been activated');

          default:
            return new AlertActions.SetError('Unknown Error: ' + error.error);
        }
      });

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
