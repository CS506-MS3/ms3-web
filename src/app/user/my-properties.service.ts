import {Injectable} from '@angular/core';
import {Properties} from '../_domains/properties';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Injectable()
export class MyPropertiesService {
  public myProperties$: Observable<Properties>;

  constructor(private _store: Store<any>) {
    this.myProperties$ = this._store.select('myProperties');
  }

  getList() {
    // TODO: dispatch my properties request
  }
}
