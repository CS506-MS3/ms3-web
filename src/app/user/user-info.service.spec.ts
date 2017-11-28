import { TestBed, inject } from '@angular/core/testing';

import { UserInfoService } from './user-info.service';
import {StoreModule} from '@ngrx/store';

import * as Auth from '../_actions/auth.reducer';
import * as Accesses from '../_actions/accesses.reducer';

describe('UserInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          auth: Auth.reducer,
          accesses: Accesses.reducer
        })
      ],
      providers: [UserInfoService]
    });
  });

  it('should be created', inject([UserInfoService], (service: UserInfoService) => {
    expect(service).toBeTruthy();
  }));
});
