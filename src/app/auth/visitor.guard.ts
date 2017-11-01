import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../_domains/auth';
import {AuthPermissions} from './auth.permission';
import {AuthService} from './auth.service';

@Injectable()
export class VisitorGuard implements CanActivate {
  private _auth: Auth;

  constructor(private _permissions: AuthPermissions, private _authService: AuthService, private _router: Router) {
    this._authService.auth$.subscribe((auth: Auth) => {
      this._auth = auth;
    });
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._permissions.isLoggedIn(this._auth)) {
      this._router.navigate(['account/info']);
      return false;
    } else {
      return true;
    }
  }
}
