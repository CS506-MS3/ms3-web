import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WishlistCardComponent} from './wishlist-card.component';
import {PropertySummaryCardComponent} from '../property-summary-card/property-summary-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ClarityModule} from 'clarity-angular';

describe('WishlistCardComponent', () => {
  let component: WishlistCardComponent;
  let fixture: ComponentFixture<WishlistCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule.forChild(),
        RouterTestingModule
      ],
      declarations: [
        WishlistCardComponent,
        PropertySummaryCardComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCardComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 1,
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
  });

  describe('method: onRemove', () => {
    it('should emit the id', () => {
      spyOn(component.remove, 'emit');

      component.onRemove();

      expect(component.remove.emit).toHaveBeenCalledWith(component.data.id);
    });
  });
});
