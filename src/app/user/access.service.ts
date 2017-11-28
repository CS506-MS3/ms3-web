import {Injectable} from '@angular/core';
import {Accesses} from '../_domains/accesses';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as SubscriptionCancelActions from '../_effect-actions/subscription-cancel.actions';

@Injectable()
export class AccessService {
  public accesses$: Observable<Accesses>;

  constructor(private _store: Store<any>) {
    this.accesses$ = this._store.select('accesses');
  }

  get() {
  }

  makePurchase(form) {
  }

  cancelSubscription(form, type) {

    this._store.dispatch(new SubscriptionCancelActions.Request({
      password: form.password,
      type: type
    }));
  }
}
