import {RequestError} from '../_domains/request-error';
import {Action} from '@ngrx/store';
import {SubscriptionCancelForm} from '../_domains/subscription-cancel-form';

export const REQUEST = 'SubscriptionCancelActions.REQUEST';
export const SUCCESS = 'SubscriptionCancelActions.SUCCESS';
export const ERROR = 'SubscriptionCancelActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: SubscriptionCancelForm) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: string) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
