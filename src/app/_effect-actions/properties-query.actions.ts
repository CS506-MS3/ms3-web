import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {PropertyQueryParams} from '../_domains/property-query-params';

export const REQUEST = 'PropertiesQueryEffects.REQUEST';
export const ERROR = 'PropertiesQueryEffects.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: PropertyQueryParams) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
