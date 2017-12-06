import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {RestApiRequest} from '../core/rest-api-request';
import {RestApiService} from '../core/rest-api.service';
import {RequestError} from '../_domains/request-error';
import {API} from '../core/api-endpoints.constant';

import {AlertActions} from '../_actions/alert.actions';

import * as SubscriptionCancelActions from '../_effect-actions/subscription-cancel.actions';
import {Router} from '@angular/router';

@Injectable()
export class SubscriptionCancelEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(SubscriptionCancelActions.REQUEST)
    .map((action: SubscriptionCancelActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.ACCESSES.CANCEL);
      request.setBody(payload);

      return this._api.request(request)
        .map(response => new SubscriptionCancelActions.Success(payload.type))
        .catch(error => Observable.of(new SubscriptionCancelActions.Error(error)));
    });

  @Effect({dispatch: false}) onSuccess$: Observable<Action> = this.actions$
    .ofType(SubscriptionCancelActions.SUCCESS)
    .do(() => this._router.navigate(['/account/info']));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(SubscriptionCancelActions.ERROR)
    .map((action: SubscriptionCancelActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}
