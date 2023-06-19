import axios from "axios";
import { GlobalConfig } from "../../../main/global-config";
import { LoginRequest } from "./interfaces/login-request";
import { LoginResponse } from "./interfaces/login-response";

export async function loginRequest(body: LoginRequest): Promise<LoginResponse> {
  const { data } = await axios.post<LoginResponse>(GlobalConfig.apiHost + "/auth", body);
  return data;
}