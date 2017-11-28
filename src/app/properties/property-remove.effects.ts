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
import * as PropertyRemoveActions from '../_effect-actions/property-remove.actions';
import {Router} from '@angular/router';
@Injectable()
export class PropertyRemoveEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PropertyRemoveActions.REQUEST)
    .map((action: PropertyRemoveActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.USER.PROPERTIES.DELETE);
      request.setPathParams({propertyId: payload.id});
      request.setBody(payload.form);
      return this._api.request(request)
        .map(response => new PropertyRemoveActions.Success())
        .catch(error => Observable.of(new PropertyRemoveActions.Error(error)));
    });

  @Effect({dispatch: false}) onSuccess$: Observable<Action> = this.actions$
    .ofType(PropertyRemoveActions.SUCCESS)
    .do(() => this._router.navigate(['/account/info']));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PropertyRemoveActions.ERROR)
    .map((action: PropertyRemoveActions.Error) => action.payload)
    .map((error: RequestError) => {
      return new AlertActions.SetError('Unknown Error');
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}

