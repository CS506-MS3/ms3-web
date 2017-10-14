import {Action} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {Auth} from '../_domains/auth';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import 'rxjs/add/operator/switchMap';
import {AuthActions} from '../_actions/auth.actions';
import {Router} from '@angular/router';

export namespace SignUpEffects {
  export const REQUEST = 'SignUpEffects.REQUEST';
  export const SUCCESS = 'SignUpEffects.SUCCESS';
  export const ERROR = 'SignUpEffects.ERROR';

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

    constructor(public payload: any) {
      //TODO: define request error object
    }
  }

  export class Effects {
    @Effect() onRequest$: Observable<Action> = this.actions$
      .ofType(REQUEST)
      .map((action: Request) => action.payload)
      .switchMap((payload) => {
        let request = new RestApiRequest(API.USER.CREATE);
        request.setBody(payload);

        return this._api.request(request)
          .map(response => new Success(response))
          .catch(error => Observable.of(new Error(error)));
      });

    @Effect() onSuccess$: Observable<Action> = this.actions$
      .ofType(SUCCESS)
      .do(() => this._router.navigate(['activate']))
      .map((action: Success) => {
        return new AuthActions.Authenticated(action.payload)
      });

    constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
    }
  }
}
