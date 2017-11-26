import {RequestError} from '../_domains/request-error';
import {Action} from '@ngrx/store';
import {PasswordResetForm} from '../_domains/password-reset-form';

export const REQUEST = 'PasswordResetActions.REQUEST';
export const SUCCESS = 'PasswordResetActions.SUCCESS';
export const ERROR = 'PasswordResetActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: PasswordResetForm) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
