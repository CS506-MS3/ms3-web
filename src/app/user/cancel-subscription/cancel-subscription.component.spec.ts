import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CancelSubscriptionComponent} from './cancel-subscription.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {AccessService} from '../access.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ActivatedRoute} from '@angular/router';

describe('CancelSubscriptionComponent', () => {
  let component: CancelSubscriptionComponent;
  let fixture: ComponentFixture<CancelSubscriptionComponent>;

  let mockService;
  let mockRoute;

  beforeEach(async(() => {
    mockService = {
      cancelSubscription: jasmine.createSpy('cancelSubscription')
    };
    mockRoute = {
      queryParams: Observable.of({
        type: 'VENDOR'
      })
    };
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: mockRoute},
        {provide: AccessService, useValue: mockService}
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

  describe('method: onSubmit', () => {
    it('should submit form to service method with the type in query param if valid', () => {
      component.cancelForm.controls.password.setValue('testPassword');

      component.onSubmit(component.cancelForm);

      expect(mockService.cancelSubscription)
        .toHaveBeenCalledWith({password: 'testPassword'}, 'VENDOR');
    });

    it('should not submit if invalid', () => {
      component.cancelForm.controls.password.reset();

      component.onSubmit(component.cancelForm);

      expect(mockService.cancelSubscription).not.toHaveBeenCalled();
    });
  });
});
