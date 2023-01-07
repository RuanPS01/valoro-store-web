import axios from "axios";
import { LoginRequest } from "./interfaces/login-request";
import { LoginResponse } from "./interfaces/login-response";

// A mock function to mimic making an async request for data
export async function loginRequest(body: LoginRequest): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(import.meta.env.VITE_AUTHENTICATION_API_HOST + import.meta.env.VITE_PATH_LOGIN, body);
  return data;
}