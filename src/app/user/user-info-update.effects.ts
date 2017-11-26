import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import * as UserInfoUpdateActions from '../_effect-actions/user-info-update.actions';

@Injectable()
export class UserInfoUpdateEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(UserInfoUpdateActions.REQUEST)
    .switchMap((action: UserInfoUpdateActions.Request) => {
      const request = new RestApiRequest(API.USER.UPDATE_ACCOUNT_INFO);
      request.setPathParams({userId: action.userId});
      request.setBody(action.payload);

      return this._api.request(request)
        .map(response => new UserInfoUpdateActions.Success())
        .catch(error => Observable.of(new UserInfoUpdateActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(UserInfoUpdateActions.SUCCESS)
    .map(() => new AlertActions.SetInfo('User Info Updated'));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(UserInfoUpdateActions.ERROR)
    .map((action: UserInfoUpdateActions.Error) => action.payload)
    .map((error: RequestError) => new AlertActions.SetError('Unknown Error'));

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
