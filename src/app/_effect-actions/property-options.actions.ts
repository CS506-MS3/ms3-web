import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {PropertyOptions} from '../_domains/property-options';

export const REQUEST = 'PropertyOptions.REQUEST';
export const SUCCESS = 'PropertyOptions.SUCCESS';
export const ERROR = 'PropertyOptions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: PropertyOptions) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
