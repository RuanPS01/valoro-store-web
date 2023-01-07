export interface RegisterProductRequest {
  category: string;
  name: string;
  promotionPercent?: number;
  spotPrice: number;
  forwardPrice: number;
  maxInstallmentsInterestFree: number;
  collectionName: string;
  origin: string;
  resources?: string;
  image: string;
}