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
import {SignUpForm} from '../_domains/sign-up-form';
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
      // TODO: define request error object
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
      .map((error: RequestError) => new AlertActions.SetError('Sign Up Error: ' + error.error));

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
