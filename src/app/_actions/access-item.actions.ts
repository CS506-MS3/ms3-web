import * as CrudActions from './crud.actions';
import {AccessItemInfo} from '../_domains/access-item-info';

export const ACTION_NAME = 'AccessesItemActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;

export class Set extends CrudActions.Set {
  constructor(public payload: AccessItemInfo) {
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
