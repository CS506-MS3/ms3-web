import {TestBed, inject} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import * as Wishlist from '../_actions/wishlist.reducer';
import * as Auth from '../_actions/auth.reducer';

import {WishlistService} from './wishlist.service';

describe('WishlistService', () => {
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
  });

  it('should be created', inject([WishlistService], (service: WishlistService) => {
    expect(service).toBeTruthy();
  }));

  describe('method: add', () => {
    it('should call add action with id', inject([WishlistService], (service: WishlistService) => {
      spyOn(console, 'log');
      const testId = 1;
      service.add(testId);

      expect(console.log).toHaveBeenCalledWith('add' + testId)
    }));
  });
});
