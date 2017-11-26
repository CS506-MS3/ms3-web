import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {RestApiService} from '../core/rest-api.service';
import {Router} from '@angular/router';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {HttpStatus} from '../core/http-status.enum';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import * as PasswordResetLinkActions from '../_effect-actions/password-reset-link.actions';

@Injectable()
export class PasswordResetLinkEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PasswordResetLinkActions.REQUEST)
    .map((action: PasswordResetLinkActions.Request) => action.payload)
    .switchMap((payload) => {
    const request = new RestApiRequest(API.REQUEST_RESET_PASSWORD);
    request.setBody(payload);

    return this._api.request(request)
      .map(response => new PasswordResetLinkActions.Success())
      .catch(error => Observable.of(new PasswordResetLinkActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PasswordResetLinkActions.SUCCESS)
    .map(() => new AlertActions.SetInfo('Reset Link Sent'));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PasswordResetLinkActions.ERROR)
    .map((action: PasswordResetLinkActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {
        case HttpStatus.BAD_REQUEST:
          return new AlertActions.SetError('Form Invalid');

        case HttpStatus.NOT_FOUND:
          return new AlertActions.SetError('Account with such e-mail does not exist.');

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });


  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
