import {Action} from '@ngrx/store';
import {SignUpForm} from '../_domains/sign-up-form';

export namespace AccountActions {
  export const CREATE = 'AccountActions.CREATE';
  export const ACTIVATION_REQUIRED = 'AccountActions.ACTIVATION_REQUIRED';
  export const SIGN_UP_FAILURE = 'AccountActions.SIGN_UP_FAILURE';
  export const ACTIVATE = 'AccountActions.ACTIVATE';
  export const DEACTIVATE = 'AccountActions.DEACTIVATE';
  export const REACTIVATE = 'AccountActions.REACTIVATE';

  export class Create implements Action {
    readonly type = CREATE;

    constructor(public payload: SignUpForm) {
    }
  }

  export class ActivationRequired implements Action {
    readonly type = ACTIVATION_REQUIRED;
  }

  export class SignUpFailure implements Action {
    readonly type = SIGN_UP_FAILURE;
  }

  export class Activate implements Action {
    readonly type = ACTIVATE;

    constructor(public payload: string) {
    }
  }

  export class Deactivate implements Action {
    readonly type = DEACTIVATE;
  }

  export class Reactivate implements Action {
    readonly type = REACTIVATE;
  }
}
