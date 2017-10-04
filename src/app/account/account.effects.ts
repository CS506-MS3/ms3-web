import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/do';
import {Action} from '@ngrx/store';
import {AccountActions} from '../_actions/account.actions';
import {AlertActions} from '../_actions/alert.actions';
import {API} from '../core/api-endpoints.constant';
import {RestApiService} from '../core/rest-api.service';
import {AccountService} from './account.service';

@Injectable()
export class AccountEffects {
  @Effect() onCreate$: Observable<Action> = this.actions$
    .ofType(AccountActions.CREATE)
    .map((action: AccountActions.Create) => action.payload)
    .switchMap((payload) => this._api.request(API.USER.CREATE)
      .map(response => new AccountActions.ActivationRequired())
      .catch(error => Observable.of(new AccountActions.SignUpFailure()))
    );

  @Effect() onCreateSuccess$: Observable<Action> = this.actions$
    .ofType(AccountActions.ACTIVATION_REQUIRED)
    .do(() => this._account.notifyActivationRequired());

  @Effect() onCreateError$: Observable<Action> = this.actions$
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
