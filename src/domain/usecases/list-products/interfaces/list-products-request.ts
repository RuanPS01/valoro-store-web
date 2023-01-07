export interface ListProductsRequest {
  category?: string;
  sellerUserId?: string;
  sellerUserEmail?: string;
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
  referenceOrder?: string;
}