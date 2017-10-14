import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Properties} from '../_domains/properties';

@Injectable()
export class PropertiesService {
  public properties$: Observable<Properties>;

  constructor(private _store: Store<any>) {
    this.properties$ = this._store.select('properties');
  }

  query() {

  }

  filter(filterParams: any) {

  }

  search(searchParams: any) {

  }

  sort(category, order) {

  }
}
