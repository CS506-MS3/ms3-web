import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyWishlistComponent} from './my-wishlist.component';
import {WishlistService} from '../wishlist.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {WishlistCardComponent} from '../../shared/wishlist-card/wishlist-card.component';
import {PropertySummaryCardComponent} from '../../shared/property-summary-card/property-summary-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ClarityModule} from 'clarity-angular';

describe('MyWishlistComponent', () => {
  let component: MyWishlistComponent;
  let fixture: ComponentFixture<MyWishlistComponent>;

  const wishlistStore = {
    list: [
      {
        id: 1,
        title: 'Test Title',
        address: '123 Test Ave., Madison, WI',
        price: 500,
        startDate: '2017-10-01T00:00:00',
        duration: 6,
        thumbnailUrl: 'assets/images/eachProperty.jpg'
      }
    ]
  };
  const mockService = {
    wishlist$: Observable.of(wishlistStore),
    remove: jasmine.createSpy('remove')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule.forChild(),
        RouterTestingModule
      ],
      providers: [
        {provide: WishlistService, useValue: mockService}
      ],
      declarations: [
        MyWishlistComponent,
        WishlistCardComponent,
        PropertySummaryCardComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.wishlist).toEqual(wishlistStore.list);
  });

  describe('method: onRemove', () => {
    it('should call service remove method with input', () => {
      const testId = 1;
      component.onRemove(testId);

      expect(mockService.remove).toHaveBeenCalledWith(testId);
    });
  });
});
