import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/of';
import {Action} from '@ngrx/store';
import {AlertActions} from '../_actions/alert.actions';
import {API} from '../core/api-endpoints.constant';
import {RestApiService} from '../core/rest-api.service';
import {AuthActions} from '../_actions/auth.actions';
import {AppAlert} from '../_domains/app-alert';
import {Auth} from '../_domains/auth';
import {HttpStatus} from '../core/http-status.enum';
import {AccountActions} from '../_actions/account.actions';
import {AuthService} from './auth.service';
import {RestApiRequest} from '../core/rest-api-request';

@Injectable()
export class AuthEffects {
  @Effect() authenticate$: Observable<Action> = this.actions$
    .ofType(AuthActions.AUTHENTICATE)
    .map((action: AuthActions.Authenticate) => action.payload)
    .switchMap((payload) => {
      const requestOptions = new RestApiRequest(API.AUTH.SIGN_IN);
      requestOptions.setBody(payload);

      return this._api.request(requestOptions);
    })
    .map(response => new AuthActions.Authenticated(response))
    .catch(error => {
      switch (error.status) {
        case HttpStatus.FORBIDDEN:
          this._auth.notifyReactivationRequired();
          break;
        case HttpStatus.UNAUTHORIZED:
          this._auth.notifyAuthenticationDenied();
          break;
        default:
          break;
      }

      return Observable.of(new AlertActions.SetAlert(
        new AppAlert(true, 'alert-danger', error.errorMessage)));
    });

  constructor(private _api: RestApiService,
              private _auth: AuthService,
              private actions$: Actions) {
  }
}

