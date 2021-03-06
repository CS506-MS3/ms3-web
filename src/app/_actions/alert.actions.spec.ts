import {AlertActions} from './alert.actions';
import {AppAlert} from '../_domains/app-alert';

describe('AlertActions', () => {
  const testAppAlert = new AppAlert(true, 'ERROR', 'Some Error Message');

  describe('Actions', () => {
    describe('HideAlert', () => {
      it('should have type HIDE_ALERT, and not require AppAlert payload', () => {
        const action = new AlertActions.HideAlert();

        expect(action.type).toEqual(AlertActions.HIDE_ALERT);
      });
    });
  });

  describe('Reducer', () => {
    it('should return the default empty alert if HideAlert is given', () => {
      const initialState = testAppAlert;
      const inputAction = new AlertActions.HideAlert();

      const outputState = AlertActions.reducer(initialState, inputAction);

      expect(outputState.constructor.name).toEqual('AppAlert');
      expect(outputState).toEqual(new AppAlert());
    });

    it('should return current state if other actions are given', () => {
      const outputState = AlertActions.reducer(testAppAlert, {type: 'RANDOM'});

      expect(outputState.constructor.name).toEqual('AppAlert');
      expect(outputState).toEqual(testAppAlert);
    });
  });
});
