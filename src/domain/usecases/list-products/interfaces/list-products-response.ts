export interface ListProductsResponse {
  data: ListProducts
  isArray: boolean;
  path: string;
  duration: string;
  method: string;
}

export interface ListProducts {
  items: Product[];
  page: number;
  totalItems: number;
  totalPages: number;
  itemsPerPage: number;
}

export interface Product {
  category: string;
  name: string;
  promotionPercent: number;
  spotPrice: number;
  forwardPrice: number;
  maxInstallmentsInterestFree: number;
  collection: string;
  origin: string;
  resources: string;
  image: string;
}
