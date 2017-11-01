import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySummaryCardComponent } from './property-summary-card.component';
import 'rxjs/add/observable/of';

describe('PropertySummaryCardComponent', () => {

  let component: PropertySummaryCardComponent;
  let fixture: ComponentFixture<PropertySummaryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySummaryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySummaryCardComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 4,
      title: 'Lorem Ipsum Dolores 4',
      address: '124 Test Ave., Madison, WI',
      price: 750,
      startDate: '2017-11-31T00:00:00',
      duration: 8,
      thumbnailUrl: 'assets/images/bedroom.jpg',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
