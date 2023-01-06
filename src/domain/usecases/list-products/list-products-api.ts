import axios from "axios";
import { ListProductsRequest } from "./interfaces/list-products-request";
import { ListProductsResponse } from "./interfaces/list-products-response";

// A mock function to mimic making an async request for data
export async function getProductsRequest(params: ListProductsRequest): Promise<ListProductsResponse> {
  const { data } = await axios.get<ListProductsResponse>(import.meta.env.VITE_PRODUCTS_API_HOST + import.meta.env.VITE_PATH_LIST_PRODUCTS, {
    params: params
  });
  return data;
}