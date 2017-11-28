import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import 'rxjs/add/operator/switchMap';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import * as PropertiesQueryActions from '../_effect-actions/properties-query.actions';
import * as PropertiesActions from '../_actions/properties.actions';

@Injectable()
export class PropertiesQueryEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PropertiesQueryActions.REQUEST)
    .map((action: PropertiesQueryActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.PROPERTIES.QUERY);
      request.setUrlParams(payload);

      if (payload.cursor) {
        return this._api.request(request)
          .map(response => <Action>new PropertiesActions.IncreaseList(response))
          .catch(error => Observable.of(new PropertiesQueryActions.Error(error)));
      } else {
        return this._api.request(request)
          .map(response => <Action>new PropertiesActions.Set(response))
          .catch(error => Observable.of(new PropertiesQueryActions.Error(error)));
      }
    });

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PropertiesQueryActions.ERROR)
    .map((action: PropertiesQueryActions.Error) => action.payload)
    .map((error: RequestError) => {
      return new AlertActions.SetError('Unknown Error');
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}
