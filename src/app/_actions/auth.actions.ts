import {Action, ActionReducer} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {Auth} from '../_domains/auth';

export namespace AuthActions {
  export const AUTHENTICATE = 'AuthActions.AUTHENTICATE';
  export const AUTHENTICATED = 'AuthActions.AUTHENTICATED';
  export const AUTHENTICATION_DENIED = 'AuthActions.AUTHENTICATION_DENIED';
  export const REACTIVATION_REQUIRED = 'AuthActions.REACTIVATION_REQUIRED';
  export const UNAUTHENTICATE = 'AuthActions.UNAUTHENTICATE';
  export const UNAUTHENTICATED = 'AuthActions.UNAUTHENTICATED';
  const INIT = 'AuthActions.INIT';

  const initialState = null;

  export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    constructor(public payload: Credentials) {
    }
  }

  export class Authenticated implements Action {
    readonly type = AUTHENTICATED;

    constructor(public payload: Auth) {
    }
  }

  export class AuthenticationDenied implements Action {
    readonly type = AUTHENTICATION_DENIED;
  }

  export class ReactivationRequired implements Action {
    readonly type = REACTIVATION_REQUIRED;
  }

  export class Unauthenticate implements Action {
    readonly type = UNAUTHENTICATE;
  }

  export class Unauthenticated implements Action {
    readonly type = UNAUTHENTICATED;
  }

  export const reducer: ActionReducer<Auth> = (state = initialState, action: Action = {type: INIT}) => {

    switch (action.type) {
      case AUTHENTICATED:
        return (<Authenticated>action).payload;

      case AUTHENTICATION_DENIED:
      case REACTIVATION_REQUIRED:
      case UNAUTHENTICATED:
        return initialState;

      case AUTHENTICATE:
      case UNAUTHENTICATE:
      default:
        return state;
    }
  };
}
