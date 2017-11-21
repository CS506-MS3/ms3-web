import {Injectable} from '@angular/core';
import {Property} from '../_domains/property';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as PropertyOptionsActions from '../_effect-actions/property-options.actions';
// import * as PropertyGetActions from '../_effect-actions/property-get.actions';
// import * as PropertyUpdateActions from '../_effect-actions/property-update.actions';
import * as PropertyCreateActions from '../_effect-actions/property-create.actions';
import * as PropertyRemoveActions from '../_effect-actions/property-remove.actions';
import {PropertyOptions} from '../_domains/property-options';

@Injectable()
export class PropertyService {
  public property$: Observable<Property>;
  public propertyOptions$: Observable<PropertyOptions>;

  constructor(private _store: Store<any>) {
    this.property$ = this._store.select('property');
    this.propertyOptions$ = this._store.select('propertyOptions');
  }

  get(id) {
    // this._store.dispatch(new PropertyGetActions.Request(id));
  }

  create(form) {
    this._store.dispatch(new PropertyCreateActions.Request(form));
  }

  update(form) {
    // this._store.dispatch(new PropertyUpdateActions.Request(form));
  }

  remove(id, form) {
    this._store.dispatch(new PropertyRemoveActions.Request({id: id, form: form}));
  }

  getOptions() {

    this._store.dispatch(new PropertyOptionsActions.Request());
  }
}
