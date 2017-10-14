import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {SignInEffects} from './sign-in.effects';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../_domains/auth';

@Injectable()
export class AuthService {
  public auth$: Observable<Auth>;

  constructor(private _store: Store<any>) {
    this.auth$ = this._store.select('auth');
  }

  authenticate(credentials: Credentials) {

    this._store.dispatch(new SignInEffects.Request(credentials));
  }

  unauthenticate() {

    // this._store.dispatch(new AuthActions.Unauthenticate());
  }
}
