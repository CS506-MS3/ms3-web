import {Property} from '../_domains/property';
import * as CrudActions from './crud.actions';

export const ACTION_NAME = 'PropertyActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;

export class Set extends CrudActions.Set {
  constructor(public payload: Property) {
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
