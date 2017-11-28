import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import {AlertActions} from '../_actions/alert.actions';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import * as PropertyOptionsGetActions from '../_effect-actions/property-options.actions';
import * as PropertyOptionsActions from '../_actions/property-options.actions';

@Injectable()
export class PropertyOptionsEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PropertyOptionsGetActions.REQUEST)
    .switchMap(() => {
      const request = new RestApiRequest(API.PROPERTIES.GET_OPTIONS);

      return this._api.request(request)
        .map(response => new PropertyOptionsGetActions.Success({list: response}))
        .catch(error => Observable.of(new PropertyOptionsGetActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PropertyOptionsGetActions.SUCCESS)
    .map((action: PropertyOptionsGetActions.Success) => action.payload)
    .map((payload) => new PropertyOptionsActions.Set(payload));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PropertyOptionsGetActions.ERROR)
    .map((action: PropertyOptionsGetActions.Error) => action.payload)
    .map((error: RequestError) => {
      return new AlertActions.SetError('Unknown Error');
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
