import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Credentials} from '../_domains/credentials';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../_domains/auth';
import * as SignInActions from '../_effect-actions/sign-in.actions';
import * as SignOutActions from '../_effect-actions/sign-out.actions';

@Injectable()
export class AuthService {
  public auth$: Observable<Auth>;

  constructor(private _store: Store<any>) {
    this.auth$ = this._store.select('auth');
  }

  authenticate(credentials: Credentials) {

    this._store.dispatch(new SignInActions.Request(credentials));
  }

  unauthenticate() {

    this._store.dispatch(new SignOutActions.Request());
  }
}
