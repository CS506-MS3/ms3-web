import * as CrudActions from './crud.actions';
import {Auth} from '../_domains/auth';
import {Action} from '@ngrx/store';

export const ACTION_NAME = 'AuthActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;
export const UPDATE_TOKEN  = ACTION_NAME + 'UPDATE_TOKEN';

export class Set extends CrudActions.Set {
  constructor(public payload: Auth) {
    super(ACTION_NAME);
  }
}

export class Clear extends CrudActions.Clear {
  constructor() {
    super(ACTION_NAME);
  }
}

export class UpdateToken implements Action {
  type = UPDATE_TOKEN;

  constructor(public payload: any) {
  }
}
export type All
  = Set
  | Clear
  | UpdateToken;
