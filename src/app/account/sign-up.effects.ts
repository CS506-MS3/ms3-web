import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

import {API} from '../core/api-endpoints.constant';
import {RestApiService} from '../core/rest-api.service';
import {RestApiRequest} from '../core/rest-api-request';
import {HttpStatus} from '../core/http-status.enum';
import {RequestError} from '../_domains/request-error';

import {SignUpForm} from '../_domains/sign-up-form';

import {AlertActions} from '../_actions/alert.actions';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

export namespace SignUpEffects {
  export const REQUEST = 'SignUpEffects.REQUEST';
  export const SUCCESS = 'SignUpEffects.SUCCESS';
  export const ERROR = 'SignUpEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: SignUpForm) {
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
        const request = new RestApiRequest(API.USER.CREATE);
        request.setBody(payload);

        return this._api.request(request)
          .map(response => new Success())
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect({dispatch: false}) onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .do(() => this._router.navigate(['signUpSuccess']));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .map((error: RequestError) => {
        switch (error.status) {
          case HttpStatus.BAD_REQUEST:
            return new AlertActions.SetError('Please check your sign-up form again.');

          case HttpStatus.CONFLICT:
            return new AlertActions.SetError('An account with the submitted e-mail already exists.');

          default:
            return new AlertActions.SetError('Unknown Error');
        }
      });

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
