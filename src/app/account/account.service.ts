import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AccountActions} from '../actions/account.actions';
import {Router} from '@angular/router';

@Injectable()
export class AccountService {

  constructor(private _store: Store<any>, private _router: Router) {

  }

  create(signUpForm) {

    return this._store.dispatch({
      type: AccountActions.CREATE,
      payload: signUpForm
    });
  }

  notifyActivationRequired() {

    return this._router.navigate(['activate']);
  }

  activate() {

    return this._store.dispatch({
      type: AccountActions.ACTIVATE,
      payload: this.getActivationToken()
    });
  }

  reactivate() {}

  deactivate() {}

  private getActivationToken(): string {
    // Get activation token from url

    return '';
  }
}
