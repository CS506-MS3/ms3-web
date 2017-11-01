import { Injectable } from '@angular/core';
import {UserInfo} from '../_domains/user-info';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Auth} from '../_domains/auth';
import * as UserInfoGetActions from '../_effect-actions/user-info-get.actions';

@Injectable()
export class UserInfoService {
  public userInfo$: Observable<UserInfo>;
  public auth$: Observable<Auth>;
  private _auth: Auth;

  constructor(private _store: Store<any>) {
    this.userInfo$ = this._store.select('accesses');
    this.auth$ = this._store.select('auth');
    this.auth$.subscribe((auth) => {
      this._auth = auth;
    });
  }

  get() {

    this._store.dispatch(new UserInfoGetActions.Request(this._auth.id));
  }

  update(form: UserInfo) {
    // TODO: dispatch User Info Update Request action
  }
}
