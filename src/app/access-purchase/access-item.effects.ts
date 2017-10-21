import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import * as AccessItemEffectsActions from '../_effect-actions/access-item.actions';
import * as AccessItemActions from '../_actions/access-item.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AccessItemEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(AccessItemEffectsActions.REQUEST)
    .map((action: AccessItemEffectsActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.ACCESSES.GET_PRICE_INFO);
      request.setPathParams(payload);

      return this._api.request(request)
        .map(response => new AccessItemEffectsActions.Success(response))
        .catch(error => Observable.of(new AccessItemEffectsActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(AccessItemEffectsActions.SUCCESS)
    .map((action: AccessItemEffectsActions.Success) => action.payload)
    .map((response) => new AccessItemActions.Set(response));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(AccessItemEffectsActions.ERROR)
    .map((action: AccessItemEffectsActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}

