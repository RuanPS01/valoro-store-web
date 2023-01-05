export interface Product {
  category: string;
  name: string;
  promotionPercent?: number;
  spotPrice: number;
  forwardPrice: number;
  maxInstallmentsInterestFree: number;
  imageBase64: string;
}