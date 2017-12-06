import {ItemId} from '../_domains/item-id';
import * as CrudActions from './crud.actions';
import {Accesses} from '../_domains/accesses';
import {Access} from '../_domains/access';
import {Action} from '@ngrx/store';

export const ACTION_NAME = 'AccessesActions';

export const SET  = ACTION_NAME + CrudActions.SET;
export const ADD_ITEM  = ACTION_NAME + CrudActions.ADD_ITEM;
export const REMOVE_ITEM  = ACTION_NAME + CrudActions.REMOVE_ITEM;
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;
export const CANCEL_SUBSCRIPTION = ACTION_NAME + 'CANCEL_SUBSCRIPTION';

export class Set extends CrudActions.Set {
  constructor(public payload: Accesses) {
    super(ACTION_NAME);
  }
}

export class AddItem extends CrudActions.AddItem {
  constructor(public payload: Access) {
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

export class CancelSubscription implements Action {
  type = CANCEL_SUBSCRIPTION;

  constructor(public payload: string) {
  }
}

export type All
  = Set
  | AddItem
  | RemoveItem
  | Clear
  | CancelSubscription;
