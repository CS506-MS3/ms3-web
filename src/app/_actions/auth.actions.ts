import {Action, ActionReducer} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {Auth} from '../_domains/auth';

export namespace AuthActions {
  export const AUTHENTICATE = 'AuthActions.AUTHENTICATE';
  export const AUTHENTICATING = 'AuthActions.AUTHENTICATING';
  export const AUTHENTICATED = 'AuthActions.AUTHENTICATED';
  export const ACTIVATION_REQUIRED = 'AuthActions.ACTIVATION_REQUIRED';
  export const UNAUTHENTICATED = 'AuthActions.UNAUTHENTICATED';
  export const AUTHENTICATION_DENIED = 'AuthActions.AUTHENTICATION_DENIED';
  const INIT = UNAUTHENTICATED;

  export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    constructor(public payload: Credentials) {
    }
  }

  export class Authenticating implements Action {
    readonly type = AUTHENTICATING;
  }

  export class Authenticated implements Action {
    readonly type = AUTHENTICATED;

    constructor(public payload: Auth) {
    }
  }

  export class AuthenticationDenied implements Action {
    readonly type = AUTHENTICATION_DENIED;

    constructor(public payload) {
    }
  }

  export const reducer: ActionReducer<string> = (state = INIT, action: Action = {type: INIT}) => {

    switch (action.type) {
      case AUTHENTICATE:
        return AUTHENTICATING;
      case AUTHENTICATED:
        return AUTHENTICATED;

      default:
        return state;
    }
  };
}
