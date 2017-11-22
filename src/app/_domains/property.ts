export interface Property {
  id: string;
  status: boolean;
  title: string;
  address: {
    geocode: {
      lat: number;
      lng: number;
    };
    detailLevel1: string;
    detailLevel2: string;
    city: string;
    state: string;
    zipcode: string;
    type: string;
  };
  description: string;
  roomType: string;
  price: number;
  startDate: string;
  duration: number;
  options: number[];
  imageUrls: string[];
  owner?: string;
  createTime?: string;
  updateTime?: string;
}
