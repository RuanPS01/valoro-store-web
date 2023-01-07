import { ListProducts } from "./list-products-response";

export interface ListProductsState {
  products?: ListProducts;
  status: 'loading' | 'success' | 'failed' | 'idle';
}