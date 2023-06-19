import axios from "axios";
import { LoginRequest } from "./interfaces/login-request";
import { LoginResponse } from "./interfaces/login-response";

// A mock function to mimic making an async request for data
export async function loginRequest(body: LoginRequest): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(import.meta.env.API_HOST + "/auth", body);
  return data;
}