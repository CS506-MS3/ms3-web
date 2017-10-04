import { TestBed, inject } from '@angular/core/testing';

import { AccountService } from './account.service';
import {SignUpForm} from '../_domains/sign-up-form';
import {StoreModule} from '@ngrx/store';
import {Router} from '@angular/router';

describe('AccountService', () => {
  let mockAccountReducer;
  const routerMock = {
    navigate: jasmine.createSpy('navigate')
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
        {provide: Router, useValue: routerMock}
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
    spyOn(service, 'reactivate');

    service.reactivate();

    expect(service.reactivate).toHaveBeenCalled();
  }));
});
