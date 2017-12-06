import {RequestError} from '../_domains/request-error';
import {Action} from '@ngrx/store';
import {ChangePasswordForm} from '../_domains/change-password-form';
import {AuthResponse} from '../_domains/auth-response';

export const REQUEST = 'PasswordChangeActions.REQUEST';
export const SUCCESS = 'PasswordChangeActions.SUCCESS';
export const ERROR = 'PasswordChangeActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: ChangePasswordForm, public userId) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: AuthResponse) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
