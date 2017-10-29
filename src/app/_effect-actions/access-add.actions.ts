import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {PurchaseForm} from '../_domains/purchase-form';

export const REQUEST = 'AccessAddEffects.REQUEST';
export const SUCCESS = 'AccessAddEffects.SUCCESS';
export const ERROR = 'AccessAddEffects.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: PurchaseForm) {
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
