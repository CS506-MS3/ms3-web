import {Action, ActionReducer} from '@ngrx/store';
import * as PropertyQueryParamsActions from './property-query-params.actions';
import * as Crud from './crud.reducer';
import {PropertyQueryParams} from '../_domains/property-query-params';

const prefix = PropertyQueryParamsActions.ACTION_NAME;
const INIT = 'INIT';
const initialState = null;

export function reducer(state = initialState, action: Action = {type: INIT}): PropertyQueryParams {
  switch (action.type) {
    case PropertyQueryParamsActions.SET_SEARCH_PARAMS:
      return {
        ...state,
        filters: null,
        searchBy: (<PropertyQueryParamsActions.SetSearchParams>action).payload
      };

    case PropertyQueryParamsActions.SET_FILTER_PARAMS:
      return {
        ...state,
        searchBy: null,
        filters: (<PropertyQueryParamsActions.SetFilterParams>action).payload
      };

    case PropertyQueryParamsActions.SET_SORT_PARAMS:
      return {
        ...state,
        sortBy: (<PropertyQueryParamsActions.SetSortParams>action).payload.sortBy,
        sortOrder: (<PropertyQueryParamsActions.SetSortParams>action).payload.sortOrder
      };

    default:
      const newState = Crud.reducer(state, action, prefix, initialState);

      return newState === null ? initialState : newState;
  }
}
