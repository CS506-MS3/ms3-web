import {RequestError} from '../_domains/request-error';
import {Action} from '@ngrx/store';
import {EmailForm} from '../_domains/email-form';

export const REQUEST = 'PasswordResetLinkActions.REQUEST';
export const SUCCESS = 'PasswordResetLinkActions.SUCCESS';
export const ERROR = 'PasswordResetLinkActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: EmailForm) {
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
