import {Action, ActionReducer} from '@ngrx/store';
import * as PropertiesActions from './properties.actions';
import * as Crud from './crud.reducer';
import {Properties} from '../_domains/properties';

const prefix = PropertiesActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Properties = {
  list: []
};

export const reducer: ActionReducer<Properties> = (state = initialState, action: Action = {type: INIT}) => {
  switch (action.type) {
    case PropertiesActions.INCREASE_LIST:
      return {
        ...state,
        list: [...state.list, ...((<PropertiesActions.IncreaseList>action).payload.list)]
      };

    default:
      const newState = Crud.reducer(state, action, prefix, initialState);

      return newState === null ? initialState : newState;
  }
};
