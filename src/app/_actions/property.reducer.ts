import {Action, ActionReducer} from '@ngrx/store';
import * as PropertyActions from './property.actions';
import * as Crud from './crud.reducer';
import {Property} from '../_domains/property';

const prefix = PropertyActions.ACTION_NAME;
const INIT = 'INIT';
const initialState = null;

export function reducer(state = initialState, action: Action = {type: INIT}): Property {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
