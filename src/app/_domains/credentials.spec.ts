import {Auth} from './auth';
import {Credentials} from './credentials';

describe('Credentials Class', () => {
  it('should set email & password  to given arg', () => {
    const credentials = {
      email: 'test@email.com',
      password: 'testPassword1'
    };
    const testCredentials = new Credentials(credentials.email, credentials.password);

    expect(testCredentials.email).toEqual(credentials.email);
    expect(testCredentials.password).toEqual(credentials.password);
  });
});
