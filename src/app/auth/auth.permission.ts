import {Auth} from '../_domains/auth';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthPermissions {
  isLoggedIn(auth: Auth): boolean {
    return Boolean(auth.token);
  }
}
