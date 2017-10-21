import {Action} from '@ngrx/store';
import * as AccessItemActions from './access-item.actions';
import * as Crud from './crud.reducer';
import {Accesses} from '../_domains/accesses';
import {AccessItemInfo} from '../_domains/access-item-info';

const prefix = AccessItemActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: AccessItemInfo = null;

export function reducer(state = initialState, action: Action = {type: INIT}): Accesses {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
}
