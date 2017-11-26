import {NotificationSettings} from './notification-settings';

export interface EditUserInfoForm {
  phone: number;
  notification: NotificationSettings;
  password: string;
}
