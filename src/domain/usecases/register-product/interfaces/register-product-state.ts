import { ProductRegister } from "./register-product-response";

export interface RegisterProductState {
  registredProduct?: ProductRegister;
  status: 'loading' | 'success' | 'failed' | 'idle';
}