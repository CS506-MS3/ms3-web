import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Properties} from '../_domains/properties';
import * as PropertiesQueryActions from '../_effect-actions/properties-query.actions';
import {PropertyQueryParams} from '../_domains/property-query-params';

@Injectable()
export class PropertiesService {
  public properties$: Observable<Properties>;

  constructor(private _store: Store<any>) {
    this.properties$ = this._store.select('properties');
  }

  query(params: PropertyQueryParams) {

    this._store.dispatch(new PropertiesQueryActions.Request(params));
  }
}
