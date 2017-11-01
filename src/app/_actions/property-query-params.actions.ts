import * as CrudActions from './crud.actions';
import {Action} from '@ngrx/store';

export const ACTION_NAME = 'PropertyQueryParamsActions';

export const SET_SEARCH_PARAMS = ACTION_NAME + '.SET_SEARCH_PARAMS';
export const SET_FILTER_PARAMS = ACTION_NAME + '.SET_FILTER_PARAMS';
export const SET_SORT_PARAMS = ACTION_NAME + '.SET_SORT_PARAMS';
export const CLEAR  = ACTION_NAME + CrudActions.CLEAR;

export class SetSearchParams implements Action {
  type = SET_SEARCH_PARAMS;

  constructor(public payload: string) {
  }
}

export class SetFilterParams implements Action {
  type = SET_FILTER_PARAMS;

  constructor(public payload) {
  }
}

export class SetSortParams implements Action {
  type = SET_SORT_PARAMS;

  constructor(public payload) {
  }
}

export class Clear extends CrudActions.Clear {
  constructor() {
    super(ACTION_NAME);
  }
}

export type All
  = SetSearchParams
  | SetFilterParams
  | SetSortParams
  | Clear;
