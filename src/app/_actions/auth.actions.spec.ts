import {AuthActions} from './auth.actions';
import {Credentials} from '../_domains/credentials';
import {Auth} from '../_domains/auth';

describe('AuthActions', () => {
  const testCredentials = new Credentials('test@email.com', 'password');
  const testAuth = new Auth('someToken');

  describe('Actions', () => {
    describe('Authenticate', () => {
      it('should have type AUTHENTICATE, and require credentials payload', () => {
        const action = new AuthActions.Authenticate(testCredentials);

        expect(action.type).toEqual(AuthActions.AUTHENTICATE);
        expect(action.payload).toEqual(testCredentials);
      });
    });

    describe('Authenticated', () => {
      it('should have type AUTHENTICATED, and require Auth payload', () => {
        const action = new AuthActions.Authenticated(testAuth);

        expect(action.type).toEqual(AuthActions.AUTHENTICATED);
        expect(action.payload).toEqual(testAuth);
      });
    });

    describe('AuthenticationDenied', () => {
      it('should have type AUTHENTICATION_DENIED', () => {
        const action = new AuthActions.AuthenticationDenied();

        expect(action.type).toEqual(AuthActions.AUTHENTICATION_DENIED);
      });
    });

    describe('ReactivationRequired', () => {
      it('should have type REACTIVATION_REQUIRED', () => {
        const action = new AuthActions.ReactivationRequired();

        expect(action.type).toEqual(AuthActions.REACTIVATION_REQUIRED);
      });
    });

    describe('Unauthenticate', () => {
      it('should have type UNAUTHENTICATE', () => {
        const action = new AuthActions.Unauthenticate();

        expect(action.type).toEqual(AuthActions.UNAUTHENTICATE);
      });
    });

    describe('Unauthenticated', () => {
      it('should have type UNAUTHENTICATED', () => {
        const action = new AuthActions.Unauthenticated();

        expect(action.type).toEqual(AuthActions.UNAUTHENTICATED);
      });
    });
  });

  describe('Reducer', () => {
    it('should return the auth if authenticated action was called', () => {
      const initialState = new Auth();
      const action = new AuthActions.Authenticated(testAuth);

      const outputState = AuthActions.reducer(initialState, action);

      expect(outputState).toEqual(testAuth);
    });

    it('should remove existing auth if any denial or revoke action was called', () => {
      const initialState = testAuth;
      const deniedAction = new AuthActions.AuthenticationDenied();
      const reactivateAction = new AuthActions.ReactivationRequired();
      const unAuthAction = new AuthActions.Unauthenticated();

      expect(AuthActions.reducer(initialState, deniedAction)).toEqual(new Auth());
      expect(AuthActions.reducer(initialState, reactivateAction)).toEqual(new Auth());
      expect(AuthActions.reducer(initialState, unAuthAction)).toEqual(new Auth());
    });

    it('should return current state on default and transition actions', () => {
      const initialState = testAuth;
      const authenticateAction = new AuthActions.Authenticate(testCredentials);
      const unauthenticateAction = new AuthActions.Unauthenticate();
      const randomAction = {type: 'RANDOM'};

      expect(AuthActions.reducer(initialState, authenticateAction)).toEqual(testAuth);
      expect(AuthActions.reducer(initialState, unauthenticateAction)).toEqual(testAuth);
      expect(AuthActions.reducer(initialState, randomAction)).toEqual(testAuth);
    });
  });
});
