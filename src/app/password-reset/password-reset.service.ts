import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {EmailForm} from '../_domains/email-form';
import {PasswordForm} from '../_domains/password-form';
import {ActivatedRoute, Params} from '@angular/router';
import * as PasswordResetLinkActions from '../_effect-actions/password-reset-link.actions';
import * as PasswordResetActions from '../_effect-actions/password-reset.actions';

@Injectable()
export class PasswordResetService {
  private readonly RESET_PASSWORD_TOKEN_KEY = 'token';
  private _resetPasswordToken: string;

  constructor(private _store: Store<any>, private _currentRoute: ActivatedRoute) {
    this._currentRoute.queryParams.subscribe((params: Params) => {
      this._resetPasswordToken = params[this.RESET_PASSWORD_TOKEN_KEY];
    });
  }

  requestPasswordResetLink(form: EmailForm) {

    return this._store.dispatch(new PasswordResetLinkActions.Request(form));
  }

  resetPassword(form: PasswordForm) {

    return this._store.dispatch(new PasswordResetActions.Request({
      token: this._resetPasswordToken,
      password: form.password
    }));
  }
}
