import {Injectable} from '@angular/core';
import {Wishlist} from '../_domains/wishlist';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import * as WishlistAddActions from '../_effect-actions/wishlist-add.actions';
import * as WishlistRemoveActions from '../_effect-actions/wishlist-remove.actions';

@Injectable()
export class WishlistService {
  public wishlist$: Observable<Wishlist>;
  public featureOn$: Observable<boolean>;

  constructor(private _store: Store<any>) {
    this.wishlist$ = this._store.select('wishlist');
    this.featureOn$ = this._store.select('auth').map((auth) => {
      return auth.token !== null;
    });
  }

  query() {

  }

  add(id: number) {

    this._store.dispatch(new WishlistAddActions.Request(id));
  }

  remove(id: number) {

    this._store.dispatch(new WishlistRemoveActions.Request(id.toString()));
  }

  clear() {

  }
}
