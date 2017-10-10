import {Action, ActionReducer} from '@ngrx/store';
import * as WishlistActions from './wishlist.actions';
import * as Crud from './crud.reducer';
import {Wishlist} from '../_domains/wishlist';

const prefix = WishlistActions.ACTION_NAME;
const INIT = 'INIT';
const initialState = new Wishlist();

export const reducer: ActionReducer<any> = (state = initialState, action: Action = {type: INIT}) => {
  const newState = Crud.reducer(state, action, prefix, initialState);

  return newState === null ? initialState : newState;
};
