import {Injectable} from '@angular/core';
import {Wishlist} from '../_domains/wishlist';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

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
    console.log('add');
  }

  remove(id: number) {
    console.log('remove');
  }

  clear() {

  }
}
