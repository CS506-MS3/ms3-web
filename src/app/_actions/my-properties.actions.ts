import * as CrudActions from './crud.actions';
import {Properties} from '../_domains/properties';
import {PropertySummary} from '../_domains/property-summary';
import {ItemId} from '../_domains/item-id';

export const ACTION_NAME = 'MyPropertiesActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const ADD_ITEM  = ACTION_NAME + CrudActions.ADD_ITEM;
export const REMOVE_ITEM  = ACTION_NAME + CrudActions.REMOVE_ITEM;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;

export class Set extends CrudActions.Set {
  constructor(public payload: Properties) {
    super(ACTION_NAME);
  }
}

export class AddItem extends CrudActions.AddItem {
  constructor(public payload: PropertySummary) {
    super(ACTION_NAME);
  }
}

export class RemoveItem extends CrudActions.RemoveItem {
  constructor(public payload: ItemId) {
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
  | AddItem
  | RemoveItem
  | Clear;
