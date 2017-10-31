import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthPermissions} from './auth.permission';
import {AuthService} from './auth.service';
import {Auth} from '../_domains/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  private _auth: Auth;

  constructor(private _permissions: AuthPermissions, private _authService: AuthService) {
    this._authService.auth$.subscribe((auth: Auth) => {
      this._auth = auth;
    });
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this._permissions.isLoggedIn(this._auth);
  }
}
