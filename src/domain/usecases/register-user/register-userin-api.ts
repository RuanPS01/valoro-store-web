import axios from "axios";
import { RegisterUserRequest } from "./interfaces/register-user-request";
import { RegisterUserResponse } from "./interfaces/register-user-response";

// A mock function to mimic making an async request for data
export async function loginRequest(body: RegisterUserRequest): Promise<RegisterUserResponse> {
  const { data } = await axios.post<RegisterUserResponse>(import.meta.env.VITE_AUTHENTICATION_API_HOST + import.meta.env.VITE_PATH_REGISTER_USER, body);
  return data;
}