import axios from "axios";
import { UserCookieInputDto, UserInputDto } from "./types";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const baseUrl: string = "/api/auth";

const signup = async (credentials: UserInputDto) => {
  try {
    // try to create a firebase user
    const firebaseUser = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    if (!firebaseUser) {
      throw new Error("Failed to create firebase user");
    }

    // get authToken
    const authToken = await firebaseUser.user.getIdToken();

    // if firebaseuser, post to backend with authtoken to add user to db
    const res = await axios.post(
      `${baseUrl}/signup`,
      { email: firebaseUser.user.email, firebaseId: firebaseUser.user.uid },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    console.log("hello signup res", res);

    // return the newly created user from db
    return res.data;
  } catch (e) {
    alert("Signup failed, reload and try again");
    console.error(e);
  }
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
