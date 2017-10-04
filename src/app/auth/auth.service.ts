import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthActions} from '../_actions/auth.actions';
import {Credentials} from '../_domains/credentials';

@Injectable()
export class AuthService {

  constructor(private _store: Store<any>) {

  }

  authenticate(credentials: Credentials) {

    this._store.dispatch(new AuthActions.Authenticate(credentials));
  }

  signOut() {}

}
