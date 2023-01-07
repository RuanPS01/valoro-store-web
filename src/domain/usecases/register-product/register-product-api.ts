import axios from "axios";
import { RegisterProductRequest } from "./interfaces/register-product-request";
import { RegisterProductResponse } from "./interfaces/register-product-response";

// A mock function to mimic making an async request for data
export async function registerProduct(body: RegisterProductRequest): Promise<RegisterProductResponse> {
  const { data } = await axios.post<RegisterProductResponse>(import.meta.env.VITE_PRODUCTS_API_HOST + import.meta.env.VITE_PATH_REGISTER_PRODUCTS, body);
  return data;
}