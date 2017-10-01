import {ActionReducer, Action} from '@ngrx/store';
import {AppAlert} from '../_domains/app-alert';

export namespace AlertActions {
  export const SET_ALERT = 'SET_ALERT';
  export const HIDE_ALERT = 'HIDE_ALERT';
  export const INIT = 'INIT';

  const initialState: AppAlert = {
    show: false,
    type: null,
    message: null
  };

  export class AlertAction implements Action {
    type: string;
    payload?: AppAlert
  }

  export const appAlert: ActionReducer<AppAlert> = (state = initialState, action: AlertAction = {type: INIT}) => {

    switch (action.type) {
      case SET_ALERT:
        return Object.assign({}, state, {show: true, type: action.payload.type, message: action.payload.message});

      case HIDE_ALERT:
        return Object.assign({}, initialState);

      default:
        return state;
    }
  };

}
