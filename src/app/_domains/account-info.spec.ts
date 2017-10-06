import {AccountInfo} from './account-info';

describe('AccountInfo Class', () => {
  it('should create with email, phone number and notification setting', () => {
    const testEmail = 'test@test.com';
    const testNumber = '987-123-4567';
    const testNotificationSetting = true;

    const testAccountInfo = new AccountInfo(testEmail, testNumber, testNotificationSetting);

    expect(testAccountInfo.email).toEqual(testEmail);
    expect(testAccountInfo.phoneNumber).toEqual(testNumber);
    expect(testAccountInfo.notification).toEqual(testNotificationSetting);
  });
});
