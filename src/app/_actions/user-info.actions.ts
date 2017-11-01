import {UserInfo} from '../_domains/user-info';
import * as CrudActions from './crud.actions';

export const ACTION_NAME = 'UserInfoActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const ADD_ITEM  = ACTION_NAME + CrudActions.ADD_ITEM;
export const REMOVE_ITEM  = ACTION_NAME + CrudActions.REMOVE_ITEM;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;

export class Set extends CrudActions.Set {
  constructor(public payload: UserInfo) {
    super(ACTION_NAME);
  }
}

export class Update extends CrudActions.Update {
  constructor(public payload: any) {
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
  | Update
  | Clear;
