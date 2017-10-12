import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AccountActions} from '../_actions/account.actions';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SignUpForm} from '../_domains/sign-up-form';

@Injectable()
export class AccountService {
  private _activationToken: string;

  constructor(private _store: Store<any>, private _router: Router, private _currentRoute: ActivatedRoute) {
    this._currentRoute.params.subscribe((params: Params) => {
      this._activationToken = params['activationToken'];
    });
  }

  create(signUpForm: SignUpForm) {

    return this._store.dispatch(new AccountActions.Create(signUpForm));
  }

  notifyActivationRequired() {

    return this._router.navigate(['activate']);
  }

  activate() {

    return this._store.dispatch(new AccountActions.Activate(this._activationToken));
  }

  requestActivationLink() {}

  deactivate() {}
}
