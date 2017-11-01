import {Action, ActionReducer} from '@ngrx/store';
import * as MyPropertiesActions from './my-properties.actions';
import * as Crud from './crud.reducer';
import {Properties} from '../_domains/properties';

const prefix = MyPropertiesActions.ACTION_NAME;
const INIT = 'INIT';
const initialState = {
  list: []
};

export function reducer(state = initialState, action: Action = {type: INIT}): Properties {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
