import {Injectable} from '@angular/core';
import {Accesses} from '../_domains/accesses';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AccessService {
  public accesses$: Observable<Accesses>;

  constructor(private _store: Store<any>) {
    this.accesses$ = this._store.select('accesses');
  }

  get() {
    // TODO: dispatch accesses request action
  }

  makePurchase(form) {
    // TODO: dispatch access add request action
  }

  cancelSubscription(id) {
    // TODO: dispatch access cancel request action
  }
}
