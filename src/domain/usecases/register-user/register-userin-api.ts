import axios from "axios";
import { GlobalConfig } from "../../../main/global-config";
import { RegisterUserRequest } from "./interfaces/register-user-request";
import { RegisterUserResponse } from "./interfaces/register-user-response";

export async function loginRequest(body: RegisterUserRequest): Promise<RegisterUserResponse> {
  const { data } = await axios.post<RegisterUserResponse>(GlobalConfig.apiHost + "/register", body);
  return data;
}