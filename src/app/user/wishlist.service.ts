import { Injectable } from '@angular/core';
import {Wishlist} from '../_domains/wishlist';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Injectable()
export class WishlistService {
  public wishlist$: Observable<Wishlist>;

  constructor(private _store: Store<any>) {
    this.wishlist$ = this._store.select('wishlist');
  }

  query() {

  }

  add(id: number) {

  }

  remove(id: number) {

  }

  clear() {

  }
}
