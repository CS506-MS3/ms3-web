import {Action, ActionReducer} from '@ngrx/store';
import * as UserInfoActions from './user-info.actions';
import * as Crud from './crud.reducer';
import {UserInfo} from '../_domains/user-info';

const prefix = UserInfoActions.ACTION_NAME;
const INIT = 'INIT';
const initialState = {
  phoneNumber: null,
  notification: null
};

export function reducer(state = initialState, action: Action = {type: INIT}): UserInfo {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
