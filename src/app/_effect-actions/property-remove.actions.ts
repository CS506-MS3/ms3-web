import {Action} from '@ngrx/store';
import {ItemId} from '../_domains/item-id';
import {RequestError} from '../_domains/request-error';

export const REQUEST = 'PropertyRemove.REQUEST';
export const SUCCESS = 'PropertyRemove.SUCCESS';
export const ERROR = 'PropertyRemove.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: ItemId) {
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
