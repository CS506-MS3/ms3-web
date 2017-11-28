import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CancelSubscriptionComponent} from './cancel-subscription.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

describe('CancelSubscriptionComponent', () => {
  let component: CancelSubscriptionComponent;
  let fixture: ComponentFixture<CancelSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [CancelSubscriptionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
