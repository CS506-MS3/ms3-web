import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import 'rxjs/add/operator/do';
import {Injectable} from '@angular/core';
import {HttpStatus} from '../core/http-status.enum';
import 'rxjs/add/observable/of';
import * as PropertyCreateActions from '../_effect-actions/property-create.actions';

@Injectable()
export class PropertyCreateEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PropertyCreateActions.REQUEST)
    .map((action: PropertyCreateActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.PROPERTIES.CREATE);
      request.setBody(payload);

      return this._api.request(request)
        .map(response => new PropertyCreateActions.Success())
        .catch(error => Observable.of(new PropertyCreateActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PropertyCreateActions.SUCCESS)
    .do(() => this._router.navigate(['account/info']))
    .map(() => new AlertActions.SetInfo('Property Created'));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PropertyCreateActions.ERROR)
    .map((action: PropertyCreateActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {
        case HttpStatus.PAYMENT_REQUIRED:
          this._router.navigate(['access/vendor-add']);
          return new AlertActions.SetInfo('Payment Required for additional properties');

        case HttpStatus.FORBIDDEN:
          this._router.navigate(['access/vendor']);
          return new AlertActions.SetInfo('Payment Required for subscription');

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}

