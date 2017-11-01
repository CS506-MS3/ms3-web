import {TestBed, async, inject} from '@angular/core/testing';

import {VisitorGuard} from './visitor.guard';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Auth} from '../_domains/auth';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthPermissions} from './auth.permission';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot} from '@angular/router';

describe('VisitorGuard', () => {
  const mockAuthService = {
    auth$: Observable.of(new Auth())
  };
  const mockAuthPermissions = {
    isLoggedIn: jasmine.createSpy('isLoggedIn')
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        VisitorGuard,
        {provide: AuthPermissions, useValue: mockAuthPermissions},
        {provide: AuthService, useValue: mockAuthService}
      ]
    });
  });

  it('should check permission of isLoggedIn', inject([VisitorGuard], (guard: VisitorGuard) => {
    expect(guard).toBeTruthy();
    guard.canActivate(new ActivatedRouteSnapshot(), undefined);

    expect(mockAuthPermissions.isLoggedIn).toHaveBeenCalled();
  }));
});
