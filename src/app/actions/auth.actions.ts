import {Action, ActionReducer} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import {Credentials} from '../_domains/credentials';

export namespace AuthActions {
  export const AUTHENTICATE = 'AuthActions.AUTHENTICATE';
  export const INIT = 'AuthActions.INIT';

  const initialState = new Auth();

  export class Authenticate implements Action {
    readonly type = AUTHENTICATE;
    constructor(public payload: Credentials) {
    }
  }

  export const reducer: ActionReducer<Auth> = (state = initialState, action: Action = {type: INIT}) => {

    switch (action.type) {
      default:
        return state;
    }
  };
}
