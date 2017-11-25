import {Action} from '@ngrx/store';
import {RequestError} from '../_domains/request-error';
import {Property} from '../_domains/property';

export const REQUEST = 'PropertyGetEffects.REQUEST';
export const SUCCESS = 'PropertyGetEffects.SUCCESS';
export const ERROR = 'PropertyGetEffects.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: string) {
  }
}

export class Success implements Action {
  readonly type = SUCCESS;

  constructor(public payload: Property) {
  }
}

export class Error implements Action {
  readonly type = ERROR;

  constructor(public payload: RequestError) {
  }
}
