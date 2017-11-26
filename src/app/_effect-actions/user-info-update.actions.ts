import {RequestError} from '../_domains/request-error';
import {Action} from '@ngrx/store';
import {EditUserInfoForm} from '../_domains/edit-user-info-form';

export const REQUEST = 'UserInfoUpdateActions.REQUEST';
export const SUCCESS = 'UserInfoUpdateActions.SUCCESS';
export const ERROR = 'UserInfoUpdateActions.ERROR';

export class Request implements Action {
  readonly type = REQUEST;

  constructor(public payload: EditUserInfoForm, public userId) {
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
