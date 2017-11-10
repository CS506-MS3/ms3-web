import {NotificationSettings} from './notification-settings';
export class SignUpForm {

  constructor(public email: string,
              public password: string,
              public notification: NotificationSettings,
              public phone?: string) {
  }
}
