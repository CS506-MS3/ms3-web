import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';

export const REQUEST = 'UserInfoGet.REQUEST';
export const SUCCESS = 'UserInfoGet.SUCCESS';
export const ERROR = 'UserInfoGet.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: number | string) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
