import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/of';
import {Action} from '@ngrx/store';
// import {AccountActions} from '../actions/account.actions';
import {AlertActions} from '../_actions/alert.actions';
import {API} from '../core/api-endpoints.constant';
import {RestApiService} from '../core/rest-api.service';
import {AuthActions} from '../_actions/auth.actions';
// import {Member} from '../_domains/member';

@Injectable()
export class AuthEffects {
  @Effect() authenticate$: Observable<Action> = this.actions$
    .ofType(AuthActions.AUTHENTICATE)
    .map((action: AuthActions.Authenticate) => action.payload)
    .switchMap((payload) => {
      const requestOptions = API.AUTH.SIGN_IN;
      return this._api.request(Object.assign(requestOptions, {body: payload})); // TODO: (refact) request should have body param
    })
    .map(response => new AuthActions.Authenticated(response))
    .catch(error => Observable.of(new AuthActions.AuthenticationDenied(error))
    );

  // @Effect() authenticated$: Observable<Action> = this.actions$
  //   .ofType(AuthActions.AUTHENTICATED)
  //   .map((action: AuthActions.Authenticated) => action.payload)
  //   .mergeMap((data: Member) => {
  //     return [
  //       new TokenActions.Update(data.token),
  //       new UserActions.Update(data.accountInfo),
  //     ];
  //   });

  @Effect() signInError$: Observable<Action> = this.actions$
    .ofType(AuthActions.AUTHENTICATION_DENIED)
    .map(() => (new AlertActions.SetAlert({
        show: true,
        type: 'alert-danger',
        message: 'Login Error'
      }))
    );

  constructor(private _api: RestApiService,
              private actions$: Actions) {
  }
}

