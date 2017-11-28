import {Action, ActionReducer} from '@ngrx/store';
import * as AccessesActions from './accesses.actions';
import * as Crud from './crud.reducer';
import {Accesses} from '../_domains/accesses';

const prefix = AccessesActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Accesses = {
  vendor: null,
  customer: null
};

export function reducer(state = initialState, action: Action = {type: INIT}): Accesses {
  switch (action.type) {
    case AccessesActions.CANCEL_SUBSCRIPTION:
      switch ((<AccessesActions.CancelSubscription>action).payload) {
        case 'VENDOR': {

          return {
            vendor: Object.assign({}, state.vendor, {
              next_payment_date: null
            }),
            customer: state.customer
          };
        }

        case 'CUSTOMER': {

          return {
            vendor: state.vendor,
            customer: Object.assign({}, state.customer, {
              next_payment_date: null
            })
          };
        }

        default:
          return state;
      }

    default:
      const newState = Crud.reducer(state, action, prefix, initialState);

      return newState === null ? initialState : newState;
  }
}
