import {TestBed, inject} from '@angular/core/testing';

import {AccountService} from './account.service';
import {SignUpForm} from '../_domains/sign-up-form';
import {Store, StoreModule} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/Observable/of';
import {SignUpEffects} from "./sign-up.effects";

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
        {provide: ActivatedRoute, useValue: {params: Observable.of({activationToken: testToken})}},
        {provide: Router, useValue: routerMock},
        {provide: Store, useValue: storeMock}
      ]
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));

  it('should have create method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'create');

    service.create(new SignUpForm('test@email.com', 'password', true));

    expect(service.create).toHaveBeenCalled();
  }));

  it('should have activate method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'activate');

    service.activate();

    expect(service.activate).toHaveBeenCalled();
  }));

  it('should have deactivate method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'deactivate');

    service.deactivate();

    expect(service.deactivate).toHaveBeenCalled();
  }));

  it('should have reactivate method', inject([AccountService], (service: AccountService) => {
    spyOn(service, 'requestActivationLink');

    service.requestActivationLink();

    expect(service.requestActivationLink).toHaveBeenCalled();
  }));

  describe('create', () => {
    it('should dispatch an AccountActions.Create with input', inject([AccountService], (service: AccountService) => {
      const inputSignUpForm = new SignUpForm('test@email.com', 'testPassword', false);

      service.create(inputSignUpForm);

      expect(storeMock.dispatch).toHaveBeenCalledWith(new SignUpEffects.Request(inputSignUpForm));
    }));
  });

  describe('notifyActivationRequired', () => {
    it('should call navigate to activate page', inject([AccountService], (service: AccountService) => {
      service.notifyActivationRequired();

      expect(routerMock.navigate).toHaveBeenCalledWith(['activate']);
    }));
  });

  describe('activate', () => {
    it('should dispatch a new AccountActions.Activate with the subscribed token', inject([AccountService], (service: AccountService) => {
    }));
  });
});
