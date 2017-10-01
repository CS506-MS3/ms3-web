import {Action, ActionReducer} from '@ngrx/store';

export namespace AccountActions {
  const initialState = null;
  const INIT = 'INIT';
  export const CREATE = 'AccountActions.CREATE';
  export const ACTIVATION_REQUIRED = 'AccountActions.ACTIVATION_REQUIRED';
  export const SIGN_UP_FAILURE = 'AccountActions.SIGN_UP_FAILURE';
  export const ACTIVATE = 'AccountActions.ACTIVATE';

  export class Create implements Action {
    type: string;
    payload: SignUpForm;
  }

  export class SignUpForm {
    email: string;
    password: string;
    phoneNumber?: string;
    notificationSetting?: boolean;
  }

  export const reducer: ActionReducer<any> = (state = initialState, action: Action = {type: INIT}) => {

    switch (action.type) {

    }
  }
}
