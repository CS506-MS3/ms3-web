import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {StoreModule} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {AuthActions} from '../_actions/auth.actions';

describe('AuthService', () => {
  let mockAuthReducer;
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
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should dispatch a new authenticate action with credentials', inject([AuthService], (service: AuthService) => {
    const testCredentials = new Credentials('test@email.com', 'testPassword');

    service.authenticate(testCredentials);

    expect(mockAuthReducer).toHaveBeenCalledWith(undefined, new AuthActions.Authenticate(testCredentials));
  }));

  it('should dispatch a new authenticate action with credentials', inject([AuthService], (service: AuthService) => {
    service.unauthenticate();

    expect(mockAuthReducer).toHaveBeenCalledWith(undefined, new AuthActions.Unauthenticate());
  }));
});
