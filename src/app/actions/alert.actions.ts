import {ActionReducer, Action} from '@ngrx/store';
import {AppAlert} from '../_domains/app-alert';

export namespace AlertActions {
  export const SET_ALERT = 'AlertActions.SET_ALERT';
  export const HIDE_ALERT = 'AlertActions.HIDE_ALERT';
  export const INIT = 'AlertActions.INIT';

  const initialState: AppAlert = new AppAlert();

  export class SetAlert implements Action {
    readonly type = SET_ALERT;

    constructor(public payload: AppAlert) {
    }
  }

  export class HideAlert implements Action {
    readonly type = HIDE_ALERT;
  }

  export const reducer: ActionReducer<AppAlert> = (state = initialState, action: Action = {type: INIT}) => {

    switch (action.type) {
      case SET_ALERT:
        return new AppAlert(true, (<SetAlert>action).payload.type, (<SetAlert>action).payload.message);

      case HIDE_ALERT:
        return initialState;

      default:
        return state;
    }
  };
}
