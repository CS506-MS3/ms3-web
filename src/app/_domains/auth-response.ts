import {PropertySummary} from './property-summary';

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    wishlist: PropertySummary[];
  };
}
