import {StripeToken} from './stripe-token';
export interface PurchaseForm {
  token: StripeToken;
  type: string;
}
