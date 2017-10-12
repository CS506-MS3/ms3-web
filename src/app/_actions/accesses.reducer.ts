import {Action, ActionReducer} from '@ngrx/store';
import * as AccessesActions from './accesses.actions';
import * as Crud from './crud.reducer';
import {Accesses} from '../_domains/accesses';

const prefix = AccessesActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Accesses = {
  list: []
};

export const reducer: ActionReducer<Accesses> = (state = initialState, action: Action = {type: INIT}) => {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
};
