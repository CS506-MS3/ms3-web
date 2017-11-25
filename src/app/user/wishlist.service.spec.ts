import {TestBed, inject} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import * as Wishlist from '../_actions/wishlist.reducer';
import * as Auth from '../_actions/auth.reducer';
import * as WishlistAddActions from '../_effect-actions/wishlist-add.actions';
import * as WishlistRemoveActions from '../_effect-actions/wishlist-remove.actions';

import {WishlistService} from './wishlist.service';

describe('WishlistService', () => {
  let store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          wishlist: Wishlist.reducer,
          auth: Auth.reducer
        })
      ],
      providers: [WishlistService]
    });

    store = TestBed.get(Store);
  });

  it('should be created', inject([WishlistService], (service: WishlistService) => {
    expect(service).toBeTruthy();
  }));

  describe('method: add', () => {
    it('should call add action with id', inject([WishlistService], (service: WishlistService) => {
      spyOn(store, 'dispatch');
      const testId = 1;
      service.add(testId);

      expect(store.dispatch).toHaveBeenCalledWith(new WishlistAddActions.Request(testId));
    }));
  });

  describe('method: remove', () => {
    it('should call remove action with id', inject([WishlistService], (service: WishlistService) => {
      spyOn(store, 'dispatch');
      const testId = 1;
      service.remove(testId);

      expect(store.dispatch).toHaveBeenCalledWith(new WishlistRemoveActions.Request(testId.toString()));
    }));
  });
});
