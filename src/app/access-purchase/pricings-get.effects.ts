import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import * as PricingsGetEffectsActions from '../_effect-actions/pricings.actions';
import * as PricingsActions from '../_actions/pricings.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PricingsGetEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(PricingsGetEffectsActions.REQUEST)
    .switchMap(() => {
      const request = new RestApiRequest(API.ACCESSES.GET_PRICE_INFO);

      return this._api.request(request)
        .map(response => new PricingsGetEffectsActions.Success(response))
        .catch(error => Observable.of(new PricingsGetEffectsActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(PricingsGetEffectsActions.SUCCESS)
    .map((action: PricingsGetEffectsActions.Success) => action.payload)
    .map((response) => new PricingsActions.Set({list: response}));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(PricingsGetEffectsActions.ERROR)
    .map((action: PricingsGetEffectsActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {

        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions) {
  }
}

