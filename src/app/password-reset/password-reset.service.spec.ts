import {TestBed, inject} from '@angular/core/testing';

import {PasswordResetService} from './password-reset.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as PasswordResetLinkActions from '../_effect-actions/password-reset-link.actions';
import * as PasswordResetActions from '../_effect-actions/password-reset.actions';

describe('PasswordResetService', () => {
  const mockRoute = {
    queryParams: Observable.of({token: 'testToken'})
  };
  const mockStore = {
    dispatch: jasmine.createSpy('dispatch')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: mockRoute},
        {provide: Store, useValue: mockStore},
        PasswordResetService
      ]
    });
  });

  it('should be created', inject([PasswordResetService], (service: PasswordResetService) => {
    expect(service).toBeTruthy();
  }));

  describe('method: requestPasswordResetLink', () => {
    it('should dispatch password reset link action request with input',
      inject([PasswordResetService], (service: PasswordResetService) => {
        const form = {
          email: 'test@email.com'
        };

        service.requestPasswordResetLink(form);

        expect(mockStore.dispatch).toHaveBeenCalledWith(new PasswordResetLinkActions.Request(form));
      })
    );
  });
  describe('method: resetPassword', () => {
    it('should dispatch password reset action request with token and input password',
      inject([PasswordResetService], (service: PasswordResetService) => {
        const form = {
          password: 'testPassword'
        };

        service.resetPassword(form);

        expect(mockStore.dispatch).toHaveBeenCalledWith(new PasswordResetActions.Request({
          token: 'testToken',
          password: 'testPassword'
        }));
      })
    );
  });
});
