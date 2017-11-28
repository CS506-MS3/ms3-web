import * as CrudActions from './crud.actions';
import {PropertyOptions} from '../_domains/property-options';

export const ACTION_NAME = 'PropertyOptionsActions';

export const SET  = ACTION_NAME + CrudActions.SET;

export class Set extends CrudActions.Set {
  constructor(public payload: PropertyOptions) {
    super(ACTION_NAME);
  }
}

export type All
  = Set;
