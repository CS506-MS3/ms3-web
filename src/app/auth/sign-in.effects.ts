import {Action} from '@ngrx/store';
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
import * as AuthActions from '../_actions/auth.actions';
import {HttpStatus} from '../core/http-status.enum';
import 'rxjs/add/observable/of';
import * as SignInActions from '../_effect-actions/sign-in.actions';

@Injectable()
export class SignInEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(SignInActions.REQUEST)
    .map((action: SignInActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.AUTH.SIGN_IN);
      request.setBody(payload);

      return this._api.request(request)
        .map(response => new SignInActions.Success(response))
        .catch(error => Observable.of(new SignInActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(SignInActions.SUCCESS)
    .map((action: SignInActions.Success) => action.payload)
    .map((response) => new AuthActions.Set(response));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(SignInActions.ERROR)
    .map((action: SignInActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {
        case HttpStatus.UNAUTHORIZED: // Invalid Credentials
          return new AlertActions.SetError('E-mail/Password Pair Does Not Exist');

        case HttpStatus.FORBIDDEN:
          this._router.navigate(['activationLinkRequest']);
          return new AlertActions.SetError('Activation Required');

        default:
          return new AlertActions.SetError(error.error);
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}

