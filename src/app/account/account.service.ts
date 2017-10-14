import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SignUpForm} from '../_domains/sign-up-form';
import {SignUpEffects} from './sign-up.effects';
import {ActivateEffects} from './activate.effects';

@Injectable()
export class AccountService {
  private readonly ACTIVATE_URL_PARAM_KEY = 'activate';
  private _activationToken: string;

  constructor(private _store: Store<any>,
              private _currentRoute: ActivatedRoute) {
    this._currentRoute.params.subscribe((params: Params) => {
      this._activationToken = params[this.ACTIVATE_URL_PARAM_KEY]; // TODO: confirm
    });
  }

  create(signUpForm: SignUpForm) {

    return this._store.dispatch(new SignUpEffects.Request(signUpForm));
  }

  activate() {

    return this._store.dispatch(new ActivateEffects.Request(this._activationToken));
  }

  requestActivationLink() {
    // WILL_CHANGE
  }

  deactivate() {
    // WILL_CHANGE
  }
}
