import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';

export const REQUEST = 'SignOutEffects.REQUEST';
export const SUCCESS = 'SignOutEffects.SUCCESS';
export const ERROR = 'SignOutEffects.ERROR';

export class Request implements Action {
  readonly type = REQUEST;
}

export class Success implements Action {
  readonly type = SUCCESS;
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
