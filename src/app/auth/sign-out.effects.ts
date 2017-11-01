import {Action} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {RestApiRequest} from '../core/rest-api-request';
import {API} from '../core/api-endpoints.constant';
import * as AuthActions from '../_actions/auth.actions';
import * as WishlistActions from '../_actions/wishlist.actions';
import * as SignOutActions from '../_effect-actions/sign-out.actions';
import {RestApiService} from '../core/rest-api.service';
import {AlertActions} from '../_actions/alert.actions';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {ActivatedRoute, Router, Route} from '@angular/router';

@Injectable()
export class SignOutEffects {
  @Effect() onRequest$: Observable<Action> = this.actions$
    .ofType(SignOutActions.REQUEST)
    .switchMap(() => {
      const request = new RestApiRequest(API.AUTH.SIGN_OUT);

      return this._api.request(request)
        .map(response => new SignOutActions.Success())
        .catch(error => Observable.of(new SignOutActions.Error(error)));
    });

  @Effect() onSuccess$: Observable<Action> = this.actions$
    .ofType(SignOutActions.SUCCESS)
    .mergeMap(() => [
      new AuthActions.Clear(),
      new WishlistActions.Clear()
    ]);

  @Effect() onError$: Observable<Action> = this.actions$
    .ofType(SignOutActions.ERROR)
    .map((action: SignOutActions.Error) => action.payload)
    .mergeMap(() => {

      return [
        new AuthActions.Clear(),
        new WishlistActions.Clear(),
        new AlertActions.SetError('Server Error')
      ];
    });

  @Effect({dispatch: false}) onAuthClear$: Observable<Action> = this.actions$
    .ofType(AuthActions.CLEAR)
    .do(() => {
      const currentRouteConfig: Route = this._router.config.find(route => route.path === this._router.url.substr(1));

      if (currentRouteConfig != null && currentRouteConfig.canActivate != null) {
        if (currentRouteConfig.canActivate[0].name === 'AuthGuard') {
          this._router.navigate(['/welcome']);
        }
      }
    });

  constructor(private _api: RestApiService, private actions$: Actions, private _router: Router) {
  }
}
