import {NotificationSettings} from './notification-settings';

export interface EditUserInfoForm {
  phone: string;
  notification: NotificationSettings;
  password: string;
}
