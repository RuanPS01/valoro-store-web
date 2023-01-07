export interface RegisterProductResponse {
  data: ProductRegister;
  path: string;
  duration: string;
  method: string;
}

export interface ProductRegister {
  id: string;
}
