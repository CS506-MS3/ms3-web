import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {hot, cold} from 'jasmine-marbles';
import {DeactivateEffects} from './deactivate.effects';
import {Observable} from 'rxjs/Observable';
import {RestApiService} from '../core/rest-api.service';
import {RequestError} from '../_domains/request-error';
import {HttpStatus} from '../core/http-status.enum';
import * as AuthActions from '../_actions/auth.actions';
import * as WishlistActions from '../_actions/wishlist.actions';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import {AlertActions} from '../_actions/alert.actions';

describe('Deactivate Effects', () => {
  let effects: DeactivateEffects.Effects;
  let actions: Observable<any>;
  class MockApiService {
    request(request) {
      return Observable.of({});
    }
  }
  let api: MockApiService;
  const testInput = {
    form: {
      password: 'password'
    },
    id: 1
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeactivateEffects.Effects,
        provideMockActions(() => actions),
        {provide: RestApiService, useClass: MockApiService}
      ],
    });

    effects = TestBed.get(DeactivateEffects.Effects);
    api = TestBed.get(RestApiService);
  });

  describe('onRequest$', () => {
    it('should dispatch Success if request is successful', () => {
      spyOn(api, 'request').and.returnValue(Observable.of({}));
      actions = hot('--a-', {a: new DeactivateEffects.Request(testInput)});

      const expected = cold('--b', {b: new DeactivateEffects.Success()});

      expect(effects.onRequest$).toBeObservable(expected);
    });

    it('should dispatch Error if request is unsuccessful', () => {
      const error: RequestError = {
        status: HttpStatus.BAD_REQUEST,
        error: 'test error'
      };
      spyOn(api, 'request').and.returnValue(Observable.throw(error));
      actions = hot('--a-', {a: new DeactivateEffects.Request(testInput)});

      const expected = cold('--b', {b: new DeactivateEffects.Error(error)});

      expect(effects.onRequest$).toBeObservable(expected);
    });
  });

  describe('onSuccess$', () => {
    it('should dispatch AuthActions.Clear', () => {
      actions = hot('--a-', {a: new DeactivateEffects.Success()});

      const expected = cold('--(bc)', {
        b: new AuthActions.Clear(),
        c: new WishlistActions.Clear()
      });

      expect(effects.onSuccess$).toBeObservable(expected);
    });
  });

  describe('onError$', () => {
    it('should dispatch AuthActions.Clear & AlertActions.SetError on 400 error', () => {
      const error: RequestError = {
        status: HttpStatus.BAD_REQUEST,
        error: 'test error'
      };
      actions = hot('--a-', {a: new DeactivateEffects.Error(error)});

      const expected = cold('--b', {
        b: new AlertActions.SetError('Deactivation Failed: Invalid Password Form')
      });

      expect(effects.onError$).toBeObservable(expected);
    });

    it('should dispatch AuthActions.Clear & AlertActions.SetError on 401 error', () => {
      const error: RequestError = {
        status: HttpStatus.UNAUTHORIZED,
        error: 'test error'
      };
      actions = hot('--a-', {a: new DeactivateEffects.Error(error)});

      const expected = cold('--(bcd)', {
        b: new AuthActions.Clear(),
        c: new WishlistActions.Clear(),
        d: new AlertActions.SetError('Deactivation Failed: Authentication Expired')
      });

      expect(effects.onError$).toBeObservable(expected);
    });

    it('should dispatch AuthActions.Clear & AlertActions.SetError on 404 error', () => {
      const error: RequestError = {
        status: HttpStatus.NOT_FOUND,
        error: 'test error'
      };
      actions = hot('--a-', {a: new DeactivateEffects.Error(error)});

      const expected = cold('--(bcd)', {
        b: new AuthActions.Clear(),
        c: new WishlistActions.Clear(),
        d: new AlertActions.SetError('Deactivation Failed: Account does not exist')
      });

      expect(effects.onError$).toBeObservable(expected);
    });

    it('should dispatch AuthActions.Clear & AlertActions.SetError on 409 error', () => {
      const error: RequestError = {
        status: HttpStatus.CONFLICT,
        error: 'test error'
      };
      actions = hot('--a-', {a: new DeactivateEffects.Error(error)});

      const expected = cold('--(bcd)', {
        b: new AuthActions.Clear(),
        c: new WishlistActions.Clear(),
        d: new AlertActions.SetError('Deactivation Failed: Account Already Inactive')
      });

      expect(effects.onError$).toBeObservable(expected);
    });

    it('should dispatch AlertActions.SetError on 500 error', () => {
      const error: RequestError = {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: 'test error'
      };
      actions = hot('--a-', {a: new DeactivateEffects.Error(error)});

      const expected = cold('--b', {
        b: new AlertActions.SetError('Deactivation Failed: Server Error')
      });

      expect(effects.onError$).toBeObservable(expected);
    });
  });
});
