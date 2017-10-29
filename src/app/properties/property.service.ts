import {Injectable} from '@angular/core';
import {Property} from '../_domains/property';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
// import * as PropertyGetActions from '../_effect-actions/property-get.actions';
// import * as PropertyUpdateActions from '../_effect-actions/property-update.actions';
import * as PropertyCreateActions from '../_effect-actions/property-create.actions';
import * as PropertyRemoveActions from '../_effect-actions/property-remove.actions';
import {RestApiRequest} from '../core/rest-api-request';
@Injectable()
export class PropertyService {
  public property$: Observable<Property>;

  constructor(private _store: Store<any>) {
    this.property$ = this._store.select('property');
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

  remove(id) {
    this._store.dispatch(new PropertyRemoveActions.Request(id));
  }
}
