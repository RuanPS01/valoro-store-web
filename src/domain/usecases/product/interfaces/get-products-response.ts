import { Product } from "./product";

export interface GetProductsResponse {
  items: Product[];
  page: number;
  totalPerPage: number;
  totalOfPages: number;
}