import { Action } from '@ngrx/store';

export const SET = '.SET';
export const UPDATE = '.UPDATE';
export const ADD_ITEM = '.ADD_ITEM';
export const REMOVE_ITEM = '.REMOVE_ITEM';
export const UPDATE_ITEM = '.UPDATE_ITEM';
export const CLEAR = '.CLEAR';

export abstract class Set implements Action {
  readonly type;
  payload;

  constructor(private _prefix: string) {
    this.type = _prefix + SET;
  }
}

export abstract class Update implements Action {
  readonly type;
  payload;

  constructor(private _prefix: string) {
    this.type = _prefix + UPDATE;
  }
}

export abstract class Clear implements Action {
  readonly type;

  constructor(private _prefix: string) {
    this.type = _prefix + CLEAR;
  }
}

export abstract class AddItem implements Action {
  readonly type;
  payload;

  constructor(private _prefix: string) {
    this.type = _prefix + ADD_ITEM;
  }
}

export abstract class RemoveItem implements Action {
  readonly type;
  payload;

  constructor(private _prefix: string) {
    this.type = _prefix + REMOVE_ITEM;
  }
}

export abstract class UpdateItem implements Action {
  readonly type;
  payload;

  constructor(private _prefix: string) {
    this.type = _prefix + UPDATE_ITEM;
  }
}

export type All
  = Set
  | Update
  | Clear
  | AddItem
  | RemoveItem
  | UpdateItem;
