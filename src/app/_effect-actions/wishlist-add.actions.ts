import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {PropertySummary} from '../_domains/property-summary';

export const REQUEST = 'WishlistAddActions.REQUEST';
export const SUCCESS = 'WishlistAddActions.SUCCESS';
export const ERROR = 'WishlistAddActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: number | string) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: PropertySummary) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
