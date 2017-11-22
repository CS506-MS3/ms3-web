import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistButtonComponent } from './wishlist-button.component';
import {ClarityModule} from 'clarity-angular';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {WishlistService} from '../../user/wishlist.service';

describe('WishlistButtonComponent', () => {
  let component: WishlistButtonComponent;
  let fixture: ComponentFixture<WishlistButtonComponent>;

  let wishlistStore;
  let mockService;

  beforeEach(async(() => {
    wishlistStore = {
      list: [
        {
          id: 1,
          title: 'Test Title',
          address: '123 Test Ave., Madison, WI',
          price: 500,
          startDate: '2017-10-01T00:00:00',
          duration: 6,
          thumbnailUrl: 'assets/images/eachProperty.jpg'
        },
        {
          id: 2,
          title: 'Test Title',
          address: '123 Test Ave., Madison, WI',
          price: 500,
          startDate: '2017-10-01T00:00:00',
          duration: 6,
          thumbnailUrl: 'assets/images/eachProperty.jpg'
        }
      ]
    };
    mockService = {
      wishlist$: Observable.of(wishlistStore),
      featureOn$: Observable.of(true),
      add: jasmine.createSpy('add'),
      remove: jasmine.createSpy('remove')
    };

    TestBed.configureTestingModule({
      imports: [
        ClarityModule.forChild()
      ],
      providers: [
        {provide: WishlistService, useValue: mockService}
      ],
      declarations: [ WishlistButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistButtonComponent);
    component = fixture.componentInstance;
    component.property = {
      id: 3,
      title: 'Test Title',
      address: '123 Test Ave., Madison, WI',
      price: 500,
      startDate: '2017-10-01T00:00:00',
      duration: 6,
      thumbnailUrl: 'assets/images/eachProperty.jpg'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.wishlist).toEqual(wishlistStore.list);
    expect(component.hasWishlist).toBeTruthy()
  });

  describe('method: isInWishlist', () => {
    it('should return false if property does not match item in wishlist', () => {
      expect(component.isInWishlist()).toEqual(false);
    });

    it('should return true if property matches an item in wishlist', () => {
      component.property = {
        id: 2,
        title: 'Test Title',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      };
      fixture.detectChanges();

      expect(component.isInWishlist()).toEqual(true);
    });
  });

  describe('method: toggleWishlist', () => {
    let event;
    beforeEach(() => {
      event = {
        stopPropagation: jasmine.createSpy('stopPropagation')
      };
    });

    describe('if in wishlist', () => {
      beforeEach(() => {
        component.toggleWishlist(event);
      });
      it('should stop propagation & call remove if in wishlist', () => {

        expect(event.stopPropagation).toHaveBeenCalled();
      });
    });

    describe('if not in wishlist', () => {
      beforeEach(() => {
        component.property = {
          id: 2,
          title: 'Test Title',
          address: '123 Test Ave., Madison, WI',
          price: 500,
          startDate: '2017-10-01T00:00:00',
          duration: 6,
          thumbnailUrl: 'assets/images/eachProperty.jpg'
        };
        fixture.detectChanges();

        component.toggleWishlist(event);
      });

      it('should stop propagation & call add if not in wishlist', () => {

        expect(event.stopPropagation).toHaveBeenCalled();
      });
    });
  });
});
