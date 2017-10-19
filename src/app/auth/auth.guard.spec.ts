import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';
import {Auth} from '../_domains/auth';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthPermissions} from './auth.permission';

describe('AuthGuard', () => {
  const mockAuthService = {
    auth$: Observable.of(new Auth())
  };
  const mockAuthPermissions = {
    isLoggedIn: jasmine.createSpy('isLoggedIn')
  };
  let mockSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        {provide: AuthPermissions, useValue: mockAuthPermissions},
        {provide: AuthService, useValue: mockAuthService}
      ]
    });

    mockSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);
  });

  it('should check permission of isLoggedIn', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
    guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    expect(mockAuthPermissions.isLoggedIn).toHaveBeenCalled();
  }));
});
