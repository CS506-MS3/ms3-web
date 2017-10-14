import {ActionReducer, Action} from '@ngrx/store';
import {AppAlert} from '../_domains/app-alert';

export namespace AlertActions {
  export const SET_ALERT = 'AlertActions.SET_ALERT';
  export const SET_INFO = 'AlertActions.SET_INFO';
  export const SET_ERROR = 'AlertActions.SET_ERROR';
  export const HIDE_ALERT = 'AlertActions.HIDE_ALERT';
  export const INIT = 'AlertActions.INIT';

  const initialState: AppAlert = new AppAlert();

  export class SetAlert implements Action {
    readonly type = SET_ALERT;

    constructor(public payload: AppAlert) {
    }
  }

  export class SetInfo implements Action {
    readonly type = SET_INFO;

    constructor(public payload: string) {
    }
  }

  export class SetError implements Action {
    readonly type = SET_ERROR;

    constructor(public payload: string) {
    }
  }

  export class HideAlert implements Action {
    readonly type = HIDE_ALERT;
  }

  export const reducer: ActionReducer<AppAlert> = (state = initialState, action: Action = {type: INIT}) => {

    switch (action.type) {
      case SET_ALERT:
        return new AppAlert(true, (<SetAlert>action).payload.type, (<SetAlert>action).payload.message);

      case SET_INFO:
        return new AppAlert(true, 'alert-info', (<SetInfo>action).payload);

      case SET_ERROR:
        return new AppAlert(true, 'alert-danger', (<SetError>action).payload);

      case HIDE_ALERT:
        return initialState;

      default:
        return state;
    }
  };
}
