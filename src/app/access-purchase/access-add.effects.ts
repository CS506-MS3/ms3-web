import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';
import {RestApiService} from '../core/rest-api.service';
import {API} from '../core/api-endpoints.constant';
import {RestApiRequest} from '../core/rest-api-request';
import {AlertActions} from '../_actions/alert.actions';
import {RequestError} from '../_domains/request-error';
import {Injectable} from '@angular/core';
import * as AccessAddActions from '../_effect-actions/access-add.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';

@Injectable()
export class AccessAddEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(AccessAddActions.REQUEST)
    .map((action: AccessAddActions.Request) => action.payload)
    .switchMap((payload) => {
      const request = new RestApiRequest(API.ACCESSES.ADD);
      request.setBody(payload);

      return this._api.request(request)
        .map(response => new AccessAddActions.Success())
        .catch(error => Observable.of(new AccessAddActions.Error(error)));
    });

  @Effect({dispatch: false}) onSuccess$: Observable<Action> = this.actions$
    .ofType(AccessAddActions.SUCCESS)
    .do(() => this._router.navigate(['accountInfo']));

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(AccessAddActions.ERROR)
    .map((action: AccessAddActions.Error) => action.payload)
    .map((error: RequestError) => {
      switch (error.status) {
        default:
          return new AlertActions.SetError('Unknown Error');
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}

