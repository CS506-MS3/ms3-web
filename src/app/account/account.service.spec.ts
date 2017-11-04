import {TestBed, inject} from '@angular/core/testing';

import {AccountService} from './account.service';
import {SignUpForm} from '../_domains/sign-up-form';
import {Store, StoreModule} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {SignUpEffects} from './sign-up.effects';
import {ActivateEffects} from './activate.effects';
import {ActivationLinkEffects} from './activation-link.effects';
import {DeactivateEffects} from '../user/deactivate.effects';

describe('AccountService', () => {
  let mockAccountReducer;
  const testToken = 'testToken';
  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockStore;
  class MockStore {
    dispatch = jasmine.createSpy('dispatch');
    select(params: any) {
      return Observable.of({
        id: 1
      });
    }
  }

  beforeEach(() => {
    mockAccountReducer = jasmine.createSpy('account');
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({account: mockAccountReducer})
      ],
      providers: [
        AccountService,
        {provide: ActivatedRoute, useValue: {queryParams: Observable.of({token: testToken})}},
        {provide: Router, useValue: routerMock},
        {provide: Store, useClass: MockStore}
      ]
    });

    mockStore = TestBed.get(Store);
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));

  describe('create', () => {
    it('should dispatch an SignUpEffects.Request with input', inject([AccountService], (service: AccountService) => {
      const inputSignUpForm = new SignUpForm('test@email.com', 'testPassword', {marketing: false});

      service.create(inputSignUpForm);

      expect(mockStore.dispatch).toHaveBeenCalledWith(new SignUpEffects.Request(inputSignUpForm));
    }));
  });

  describe('activate', () => {
    it('should dispatch a new ActivateEffects.Request with the subscribed token',
      inject([AccountService], (service: AccountService) => {
        service.activate();

        expect(mockStore.dispatch).toHaveBeenCalledWith(new ActivateEffects.Request(testToken));
      })
    );
  });

  describe('requestActivationLink', () => {
    it('should dispatch a new ActivationLinkEffects.Request with the supplied email form',
      inject([AccountService], (service: AccountService) => {
        const testForm = {
          email: 'test@email.com'
        };
        service.requestActivationLink(testForm);

        expect(mockStore.dispatch).toHaveBeenCalledWith(new ActivationLinkEffects.Request(testForm));
      })
    );
  });

  describe('deactivate', () => {
    it('should dispatch a new DeactivateEffects.Request with the input password form',
      inject([AccountService], (service: AccountService) => {
        const testForm = {
          password: 'password'
        };
        service.deactivate(testForm);

        expect(mockStore.dispatch).toHaveBeenCalledWith(new DeactivateEffects.Request({
          form: testForm,
          id: 1
        }));
      })
    );
  });
});
