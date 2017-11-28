import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {HttpStatus} from '../core/http-status.enum';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import * as PasswordResetActions from '../_effect-actions/password-reset.actions';
import {Router} from '@angular/router';

@Injectable()
export class PasswordResetEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PasswordResetActions.REQUEST)
    .map((action: PasswordResetActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.RESET_PASSWORD);
      request.setBody(payload);

      return this._api.request(request)
        .map(response => new PasswordResetActions.Success())
        .catch(error => Observable.of(new PasswordResetActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PasswordResetActions.SUCCESS)
    .do(() => this._router.navigate(['/welcome']))
    .map(() => new AlertActions.SetInfo('Password Reset'));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PasswordResetActions.ERROR)
    .map((action: PasswordResetActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {
        case HttpStatus.UNAUTHORIZED:
          return new AlertActions.SetError('Password Reset link invalid');

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}
