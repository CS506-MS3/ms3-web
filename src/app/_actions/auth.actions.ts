import * as CrudActions from './crud.actions';
import {Auth} from '../_domains/auth';

export const ACTION_NAME = 'AuthActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;

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

export type All
  = Set
  | Clear;
