import {Action, ActionReducer} from '@ngrx/store';
import * as UserInfoActions from './user-info.actions';
import * as Crud from './crud.reducer';
import {Property} from '../_domains/property';

const prefix = UserInfoActions.ACTION_NAME;
const INIT = 'INIT';
const initialState = null;

export function reducer(state = initialState, action: Action = {type: INIT}): Property {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
