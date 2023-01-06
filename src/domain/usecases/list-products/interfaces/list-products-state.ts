import { ListProductsResponse } from "./list-products-response";

export interface ListProductsState {
  products?: ListProductsResponse;
  status: 'loading' | 'success' | 'failed' | 'idle';
}