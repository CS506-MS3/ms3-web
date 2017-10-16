import {TestBed, inject} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {StoreModule} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {Router} from '@angular/router';
import {SignInEffects} from './sign-in.effects';
import {SignOutEffects} from './sign-out.effects';

describe('AuthService', () => {
  let mockAuthReducer;
  const routerMock = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    mockAuthReducer = jasmine.createSpy('reducer');
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: mockAuthReducer
        })
      ],
      providers: [
        AuthService,
        {provide: Router, useValue: routerMock}
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should dispatch a new authenticate action with credentials', inject([AuthService], (service: AuthService) => {
    const testCredentials = new Credentials('test@email.com', 'testPassword');

    service.authenticate(testCredentials);

    expect(mockAuthReducer).toHaveBeenCalledWith(undefined, new SignInEffects.Request(testCredentials));
  }));

  it('should dispatch a new authenticate action with credentials', inject([AuthService], (service: AuthService) => {
    service.unauthenticate();

    expect(mockAuthReducer).toHaveBeenCalledWith(undefined, new SignOutEffects.Request());
  }));
});
