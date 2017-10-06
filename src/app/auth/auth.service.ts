import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthActions} from '../_actions/auth.actions';
import {Credentials} from '../_domains/credentials';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private _store: Store<any>, private _router: Router) {

  }

  authenticate(credentials: Credentials) {

    this._store.dispatch(new AuthActions.Authenticate(credentials));
  }

  unauthenticate() {

    this._store.dispatch(new AuthActions.Unauthenticate());
  }

  notifyReactivationRequired() {

    this._router.navigate(['reactivate']);
    this._store.dispatch(new AuthActions.ReactivationRequired());
  }

  notifyAuthenticationDenied() {

    this._store.dispatch(new AuthActions.AuthenticationDenied());
  }

}
