import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {EmailForm} from '../_domains/email-form';
import {PasswordForm} from '../_domains/password-form';

@Injectable()
export class PasswordResetService {

  constructor(private _store: Store<any>) {
  }

  requestPasswordResetLink(form: EmailForm) {
    // TODO: dispatch password reset link request action
  }

  resetPassword(form: PasswordForm) {
    // TODO: dispatch password reset request action
  }
}
