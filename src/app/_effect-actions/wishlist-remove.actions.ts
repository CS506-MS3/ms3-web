import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {ItemId} from '../_domains/item-id';

export const REQUEST = 'WishlistRemoveActions.REQUEST';
export const SUCCESS = 'WishlistRemoveActions.SUCCESS';
export const ERROR = 'WishlistRemoveActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: string) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: ItemId) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
