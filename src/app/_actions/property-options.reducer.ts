import {Action} from '@ngrx/store';
import * as PropertyOptionsActions from './property-options.actions';
import * as Crud from './crud.reducer';
import {Property} from '../_domains/property';
import {PropertyOptions} from '../_domains/property-options';

const prefix = PropertyOptionsActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: PropertyOptions = {
  list: []
};

export function reducer(state = initialState, action: Action = {type: INIT}): Property {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
