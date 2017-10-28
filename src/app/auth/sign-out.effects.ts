import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {RestApiRequest} from '../core/rest-api-request';
import {API} from '../core/api-endpoints.constant';
import * as AuthActions from '../_actions/auth.actions';
import * as SignOutActions from '../_effect-actions/sign-out.actions';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class SignOutEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(SignOutActions.REQUEST)
    .switchMap(() => {
      const request = new RestApiRequest(API.AUTH.SIGN_OUT);

      return this._api.request(request)
        .map(response => new SignOutActions.Success())
        .catch(error => Observable.of(new SignOutActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(SignOutActions.SUCCESS)
    .map(() => new AuthActions.Clear());

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(SignOutActions.ERROR)
    .map((action: SignOutActions.Error) => action.payload)
    .mergeMap(() => {

      return [
        new AuthActions.Clear(),
        new AlertActions.SetError('Server Error')
      ];
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
