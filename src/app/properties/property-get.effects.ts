import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import * as PropertyGetActions from '../_effect-actions/property-get.actions';
import * as PropertyActions from '../_actions/property.actions';

@Injectable()
export class PropertyGetEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PropertyGetActions.REQUEST)
    .map((action: PropertyGetActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.PROPERTIES.GET_SINGLE);
      request.setPathParams({propertyId: payload});

      return this._api.request(request)
        .map(response => new PropertyGetActions.Success(response))
        .catch(error => Observable.of(new PropertyGetActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PropertyGetActions.SUCCESS)
    .map((action: PropertyGetActions.Success) => action.payload)
    .map((payload) => new PropertyActions.Set(payload));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PropertyGetActions.ERROR)
    .map(() => new AlertActions.SetError('Property Not Found'));

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
