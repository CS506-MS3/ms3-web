import {Action, ActionReducer} from '@ngrx/store';
import * as AccessesActions from './accesses.actions';
import * as Crud from './crud.reducer';
import {Accesses} from '../_domains/accesses';

const prefix = AccessesActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Accesses = {
  vendor: null,
  customer: null
};

export function reducer(state = initialState, action: Action = {type: INIT}): Accesses {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
