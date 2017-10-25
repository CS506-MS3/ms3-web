import {Action} from '@ngrx/store';
import * as AccessItemActions from './pricings.actions';
import * as Crud from './crud.reducer';
import {Accesses} from '../_domains/accesses';
import {Pricings} from '../_domains/pricings';

const prefix = AccessItemActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Pricings = {list: []};

export function reducer(state = initialState, action: Action = {type: INIT}): Accesses {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
