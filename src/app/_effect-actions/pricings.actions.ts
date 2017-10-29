import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {Pricing} from '../_domains/pricing';

export const REQUEST = 'SignInEffects.REQUEST';
export const SUCCESS = 'SignInEffects.SUCCESS';
export const ERROR = 'SignInEffects.ERROR';

export class Request implements Action {
  readonly type = REQUEST;
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: Pricing[]) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
