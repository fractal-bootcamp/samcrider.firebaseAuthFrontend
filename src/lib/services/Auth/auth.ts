import axios from "axios";
import { UserCookieInputDto, UserInputDto } from "./types";

const baseUrl: string = "/api/auth";

const signup = async (credentials: UserInputDto) => {
  const res = await axios.post(`${baseUrl}/signup`, credentials);

  console.log(res);
  console.log(res.data);

  return res.data;
};

const login = async (credentials: UserInputDto) => {
  const res = await axios.post(`${baseUrl}/login`, credentials);

  return res.data;
};

const hydrate = async (credentials: UserCookieInputDto) => {
  console.log("cookie in auth service hydate function", credentials.cookie);
  const res = await axios.post(`${baseUrl}/hydrate`, credentials);

  return res.data;
};

const logout = async () => {
  const res = await axios.get(`${baseUrl}/logout`);
  return res.data;
};

export default { login, logout, signup, hydrate };
