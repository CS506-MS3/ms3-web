import {SignUpForm} from './sign-up-form';

describe('SignUpForm Class', () => {
  const testEmail = 'test@test.com';
  const testPassword = 'testPassword';
  const testNotificationSetting = {marketing: true};
  const testNumber = '987-123-4567';

  it('should be able to create with just email and password & notification settings', () => {
    const testSignUpForm = new SignUpForm(testEmail, testPassword, testNotificationSetting);

    expect(testSignUpForm.email).toEqual(testEmail);
    expect(testSignUpForm.password).toEqual(testPassword);
    expect(testSignUpForm.notification).toEqual(testNotificationSetting);
  });

  it('should also accept phone number', () => {
    const testSignUpForm = new SignUpForm(testEmail, testPassword, testNotificationSetting, testNumber);

    expect(testSignUpForm.email).toEqual(testEmail);
    expect(testSignUpForm.password).toEqual(testPassword);
    expect(testSignUpForm.notification).toEqual(testNotificationSetting);
  });
});
