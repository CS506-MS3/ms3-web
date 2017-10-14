import { Injectable } from '@angular/core';
import {Property} from '../_domains/property';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Injectable()
export class PropertyService {
  public property$: Observable<Property>;

  constructor(private _store: Store<any>) {
    this.property$ = this._store.select('property');
  }

  get(id) {

  }

  create(form) {

  }

  update(form) {

  }

  remove(id) {

  }
}
