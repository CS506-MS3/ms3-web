import {Action} from '@ngrx/store';
import {PropertyForm} from '../_domains/property-form';
import {RequestError} from '../_domains/request-error';

export const REQUEST = 'PropertyCreate.REQUEST';
export const SUCCESS = 'PropertyCreate.SUCCESS';
export const ERROR = 'PropertyCreate.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: PropertyForm) {
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
