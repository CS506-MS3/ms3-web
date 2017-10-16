import {TestBed, inject} from '@angular/core/testing';

import {AccountService} from './account.service';
import {SignUpForm} from '../_domains/sign-up-form';
import {Store, StoreModule} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {SignUpEffects} from "./sign-up.effects";
import {ActivateEffects} from './activate.effects';
import {ActivationLinkEffects} from './activation-link.effects';
import {DeactivateEffects} from './deactivate.effects';

describe('AccountService', () => {
  let mockAccountReducer;
  const testToken = 'testToken';
  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };
  const storeMock = {
    dispatch: jasmine.createSpy('dispatch')
  };

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
        {provide: ActivatedRoute, useValue: {params: Observable.of({activate: testToken})}},
        {provide: Router, useValue: routerMock},
        {provide: Store, useValue: storeMock}
      ]
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));

  describe('create', () => {
    it('should dispatch an SignUpEffects.Request with input', inject([AccountService], (service: AccountService) => {
      const inputSignUpForm = new SignUpForm('test@email.com', 'testPassword', false);

      service.create(inputSignUpForm);

      expect(storeMock.dispatch).toHaveBeenCalledWith(new SignUpEffects.Request(inputSignUpForm));
    }));
  });

  describe('activate', () => {
    it('should dispatch a new ActivateEffects.Request with the subscribed token', inject([AccountService], (service: AccountService) => {
      service.activate();

      expect(storeMock.dispatch).toHaveBeenCalledWith(new ActivateEffects.Request(testToken));
    }));
  });

  describe('requestActivationLink', () => {
    it('should dispatch a new ActivationLinkEffects.Request with the supplied email form', inject([AccountService], (service: AccountService) => {
      const testForm = {
        email: 'test@email.com'
      };
      service.requestActivationLink(testForm);

      expect(storeMock.dispatch).toHaveBeenCalledWith(new ActivationLinkEffects.Request(testForm));
    }));
  });

  describe('deactivate', () => {
    it('should dispatch a new DeactivateEffects.Request with the input password form', inject([AccountService], (service: AccountService) => {
      const testForm = {
        password: 'password'
      };
      service.deactivate(testForm);

      expect(storeMock.dispatch).toHaveBeenCalledWith(new DeactivateEffects.Request(testForm));
    }));
  });
});
