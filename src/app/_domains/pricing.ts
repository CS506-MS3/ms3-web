export interface Pricing {
  id: number;
  type: 'VENDOR_SUBSCRIPTION' | 'VENDOR_ADDITIONAL' | 'CUSTOMER_SUBSCRIPTION';
  alias: string;
  pricePerItem: number;
  canHaveMultiple: boolean;
}
