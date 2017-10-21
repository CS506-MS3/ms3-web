import {StripeToken} from './stripe-token';
export interface PurchaseForm {
  id: number,
  count: number,
  token: StripeToken
}
