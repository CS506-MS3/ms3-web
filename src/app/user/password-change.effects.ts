import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import * as PasswordChangeActions from '../_effect-actions/password-change.actions';
import * as AuthActions from '../_actions/auth.actions';
import {AuthResponse} from '../_domains/auth-response';

@Injectable()
export class PasswordChangeEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PasswordChangeActions.REQUEST)
    .switchMap((action: PasswordChangeActions.Request) => {
      const request = new RestApiRequest(API.USER.CHANGE_PASSWORD);
      request.setPathParams({userId: action.userId});
      request.setBody(action.payload);

      return this._api.request(request)
        .map(response => new PasswordChangeActions.Success(response))
        .catch(error => Observable.of(new PasswordChangeActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PasswordChangeActions.SUCCESS)
    .map((action: PasswordChangeActions.Success) => action.payload)
    .mergeMap((payload: AuthResponse) => [
      new AuthActions.UpdateToken({token: payload.token}),
      new AlertActions.SetInfo('Password Changed')
    ]);

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PasswordChangeActions.ERROR)
    .map((action: PasswordChangeActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
