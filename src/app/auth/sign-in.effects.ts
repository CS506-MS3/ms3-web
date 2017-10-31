import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

import {HttpStatus} from '../core/http-status.enum';
import {RestApiService} from '../core/rest-api.service';
import {RestApiRequest} from '../core/rest-api-request';
import {RequestError} from '../_domains/request-error';
import {API} from '../core/api-endpoints.constant';

import {AlertActions} from '../_actions/alert.actions';
import * as AuthActions from '../_actions/auth.actions';
import * as WishlistActions from '../_actions/wishlist.actions';
import * as SignInActions from '../_effect-actions/sign-in.actions';

import {Auth} from '../_domains/auth';
import {Wishlist} from '../_domains/wishlist';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

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
    .mergeMap((response) => [
      new AuthActions.Set(new Auth(response.token, response.user.email, response.user.id)),
      new WishlistActions.Set(new Wishlist(response.user.wishlist))
    ]);

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(SignInActions.ERROR)
    .map((action: SignInActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {
        case HttpStatus.UNAUTHORIZED: // Invalid Credentials
          return new AlertActions.SetError('E-mail/Password Pair Does Not Exist');

        case HttpStatus.FORBIDDEN:
          this._router.navigate(['account/reactivate']);
          return new AlertActions.SetError('Activation Required');

        default:
          return new AlertActions.SetError(error.error);
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}

