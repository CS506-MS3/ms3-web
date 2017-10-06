import {AppAlert} from './app-alert';

describe('AppAlert Class', () => {
  it('should default to hidden state', () => {
    const hiddenState = {
      show: false,
      type: null,
      message: null
    };

    const testAccountInfo = new AppAlert();

    expect(testAccountInfo.show).toEqual(hiddenState.show);
    expect(testAccountInfo.type).toEqual(hiddenState.type);
    expect(testAccountInfo.message).toEqual(hiddenState.message);
  });

  it('should set show, type, message to the given args', () => {
    const inputState = {
      show: true,
      type: 'Error',
      message: 'Some message'
    };

    const testAccountInfo = new AppAlert(inputState.show, inputState.type, inputState.message);

    expect(testAccountInfo.show).toEqual(inputState.show);
    expect(testAccountInfo.type).toEqual(inputState.type);
    expect(testAccountInfo.message).toEqual(inputState.message);
  });
});
