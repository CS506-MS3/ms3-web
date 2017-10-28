import {AccountActions} from './account.actions';
import {SignUpForm} from '../_domains/sign-up-form';

describe('AccountActions', () => {
  const testSignUpForm = new SignUpForm('test@test.com', 'testPassword', true);

  describe('Actions', () => {
    describe('Create', () => {
      it('should have type CREATE, and require SignUpForm payload', () => {
        const action = new AccountActions.Create(testSignUpForm);

        expect(action.type).toEqual(AccountActions.CREATE);
        expect(action.payload).toEqual(testSignUpForm);
      });
    });

    describe('Activate', () => {
      it('should have type ACTIVATE, and require a string activation token', () => {
        const activationToken = 'someToken1234';
        const action = new AccountActions.Activate(activationToken);

        expect(action.type).toEqual(AccountActions.ACTIVATE);
        expect(action.payload).toEqual(activationToken);
      });
    });

    describe('Deactivate', () => {
      it('should have type DEACTIVATE', () => {
        const action = new AccountActions.Deactivate();

        expect(action.type).toEqual(AccountActions.DEACTIVATE);
      });
    });

    describe('Reactivate', () => {
      it('should have type REACTIVATE', () => {
        const action = new AccountActions.Reactivate();

        expect(action.type).toEqual(AccountActions.REACTIVATE);
      });
    });
  });
});
