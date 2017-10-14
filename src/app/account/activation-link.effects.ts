import {Action} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {Router} from '@angular/router';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {EmailForm} from '../_domains/email-form';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';

export namespace ActivationLinkEffects {
  export const REQUEST = 'ActivationLinkEffects.REQUEST';
  export const SUCCESS = 'ActivationLinkEffects.SUCCESS';
  export const ERROR = 'ActivationLinkEffects.ERROR';

  export class Request implements Action {
    readonly type = REQUEST;

    constructor(public payload: EmailForm) {
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
        let request = new RestApiRequest(API.ACTIVATION_LINK);
        request.setBody(payload);

        return this._api.request(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect({dispatch: false}) onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .do(() => this._router.navigate(['signUpSuccess']));

    @Effect() onError$: Observable<Action> = this.actions$
      .ofType(ERROR)
      .map((action: Error) => action.payload)
      .map((error: RequestError) => new AlertActions.SetError('Unknown Error: ' + error.error));

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
