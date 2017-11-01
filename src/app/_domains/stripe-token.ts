export interface StripeToken {
  id: string;
  object: string;
  card: any;
  client_ip?: any;
  created?: number;
  livemode?: boolean;
  type?: string;
  used?: boolean;
}
