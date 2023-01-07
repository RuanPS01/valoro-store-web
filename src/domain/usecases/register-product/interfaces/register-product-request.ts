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
  rarity?: number;
  image: string;
  header: Header;
}

interface Header {
  token: string
}