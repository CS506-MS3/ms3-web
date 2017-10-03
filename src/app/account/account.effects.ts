import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/do';
import {Action} from '@ngrx/store';
import {AccountActions} from '../actions/account.actions';
import {AlertActions} from '../actions/alert.actions';
import {API} from '../core/api-endpoints.constant';
import {RestApiService} from '../core/rest-api.service';
import {AccountService} from './account.service';

@Injectable()
export class AccountEffects {
  @Effect() create$: Observable<Action> = this.actions$
    .ofType(AccountActions.CREATE)
    .map((action: AccountActions.Create) => action.payload)
    .switchMap((payload) => this._api.request(API.USER.CREATE)
      .map(response => ({type: AccountActions.ACTIVATION_REQUIRED}))
      .catch(error => Observable.of({type: AccountActions.SIGN_UP_FAILURE, payload: error}))
    );

  @Effect() signUpSuccess$: Observable<Action> = this.actions$.ofType(AccountActions.ACTIVATION_REQUIRED)
    .do(() => this._account.notifyActivationRequired());

  @Effect() signUpError$: Observable<Action> = this.actions$
    .ofType(AccountActions.SIGN_UP_FAILURE)
    .map(() => (new AlertActions.SetAlert({
        show: true,
        type: 'alert-danger',
        message: 'Sign Up Error'
      }))
    );

  constructor(private _api: RestApiService,
              private _account: AccountService,
              private actions$: Actions) {
  }
}
