import { Injectable } from '@angular/core';
import {UserInfo} from '../_domains/user-info';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

@Injectable()
export class UserInfoService {
  public userInfo$: Observable<UserInfo>;

  constructor(private _store: Store<any>) {
    this.userInfo$ = this._store.select('accesses');
  }

  update(form: UserInfo) {
    // TODO: dispatch User Info Update Request action
  }
}
