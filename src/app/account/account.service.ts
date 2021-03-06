import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SignUpForm} from '../_domains/sign-up-form';
import {SignUpEffects} from './sign-up.effects';
import {ActivateEffects} from './activate.effects';
import {EmailForm} from '../_domains/email-form';
import {ActivationLinkEffects} from './activation-link.effects';
import {PasswordForm} from '../_domains/password-form';
import {DeactivateEffects} from '../user/deactivate.effects';
import {Auth} from '../_domains/auth';

@Injectable()
export class AccountService {
  private readonly ACTIVATE_URL_PARAM_KEY = 'token';
  private _activationToken: string;
  private _auth: Auth;

  constructor(private _store: Store<any>,
              private _currentRoute: ActivatedRoute) {
    this._currentRoute.queryParams.subscribe((params: Params) => {
      this._activationToken = params[this.ACTIVATE_URL_PARAM_KEY]; // TODO: confirm
    });
    this._store.select('auth').subscribe((auth) => {
      this._auth = auth;
    });
  }

  create(signUpForm: SignUpForm) {

    return this._store.dispatch(new SignUpEffects.Request(signUpForm));
  }

  activate() {

    return this._store.dispatch(new ActivateEffects.Request(this._activationToken));
  }

  requestActivationLink(form: EmailForm) {

    return this._store.dispatch(new ActivationLinkEffects.Request(form));
  }

  deactivate(form: PasswordForm) {

    return this._store.dispatch(new DeactivateEffects.Request({
      form: form,
      id: this._auth.id
    }));
  }
}
