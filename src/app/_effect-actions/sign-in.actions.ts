import {Action} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {RequestError} from '../_domains/request-error';
import {AuthResponse} from '../_domains/auth-response';

export const REQUEST = 'SignInEffects.REQUEST';
export const SUCCESS = 'SignInEffects.SUCCESS';
export const ERROR = 'SignInEffects.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: Credentials) {
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
    // TODO: define request error object
  }
}
