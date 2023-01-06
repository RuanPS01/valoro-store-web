export interface ListProductsRequest {
  category?: string;
  inPromotion?: boolean;
  promotionPercentMin?: number;
  spotPriceMax?: number;
  spotPriceMin?: number;
  forwardPriceMax?: number;
  forwardPriceMin?: number;
  maxInstallmentsInterestFreeMin?: number;
  collection?: string;
  haveResources?: boolean
  order?: string;
}