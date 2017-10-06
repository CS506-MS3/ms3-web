import {Auth} from './auth';

describe('Auth Class', () => {
  it('should default to null token', () => {
    const testAuth = new Auth();

    expect(testAuth.token).toBeNull();
  });

  it('should set token to given arg', () => {
    const token = 'Token: some token';
    const testAuth = new Auth(token);

    expect(testAuth.token).toEqual(token);
  });
});
