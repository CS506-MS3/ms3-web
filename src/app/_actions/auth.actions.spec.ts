import * as AuthActions from './auth.actions';
import * as AuthReducer from './auth.reducer';
import {Credentials} from '../_domains/credentials';
import {Auth} from '../_domains/auth';

describe('AuthActions', () => {
  const testAuth = new Auth('someToken');

  describe('Actions', () => {
    describe('Set', () => {
      it('should have type SET, and require credentials payload', () => {
        const action = new AuthActions.Set(testAuth);

        expect(action.type).toEqual(AuthActions.SET);
        expect(action.payload).toEqual(testAuth);
      });
    });

    describe('Clear', () => {
      it('should have type CLEAR', () => {
        const action = new AuthActions.Clear();

        expect(action.type).toEqual(AuthActions.CLEAR);
      });
    });
  });

  describe('Reducer', () => {
    it('should return the auth if Set action was called', () => {
      const initialState = new Auth();
      const action = new AuthActions.Set(testAuth);

      const outputState = AuthReducer.reducer(initialState, action);

      expect(outputState).toEqual(testAuth);
    });

    it('should remove existing auth if Clear action was called', () => {
      const initialState = testAuth;
      const action = new AuthActions.Clear();

      expect(AuthReducer.reducer(initialState, action)).toEqual(new Auth());
    });
  });
});

