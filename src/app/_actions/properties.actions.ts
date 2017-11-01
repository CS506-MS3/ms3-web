import * as CrudActions from './crud.actions';
import {Properties} from '../_domains/properties';
import {Action} from '@ngrx/store';

export const ACTION_NAME = 'PropertiesActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;
export const INCREASE_LIST = ACTION_NAME + '.INCREASE_LIST';

export class Set extends CrudActions.Set {
  constructor(public payload: Properties) {
    super(ACTION_NAME);
  }
}

export class Clear extends CrudActions.Clear {
  constructor() {
    super(ACTION_NAME);
  }
}

export class IncreaseList implements Action {
  type = INCREASE_LIST;

  constructor(public payload: Properties) {
  }
}

export type All
  = Set
  | IncreaseList
  | Clear;
