import { useState } from "react";
import "./App.css";
import Login from "./components/Login/component";
import authService from "./lib/services/Auth/auth";
import Signup from "./components/Signup/component";
import { UserInputDto, UserOutputDto } from "./lib/services/Auth/types";

const App = () => {
  // initialize state
  const [user, setUser] = useState<UserOutputDto | null>(null);

  // // function to hydrate user if cookie exists
  // const hydrateAuth = async () => {
  //   const currentSessionCookie = document.cookie;
  //   if (!currentSessionCookie) return setUser(null);

  //   console.log("hydrate auth cookie from storage", currentSessionCookie);
  //   const initialUser: UserOutputDto = await authService.hydrate({
  //     cookie: currentSessionCookie,
  //   });

  //   if (initialUser) {
  //     setUser(initialUser);
  //   }
  // };

  // // use hydrateAuth
  // useEffect(() => {
  //   hydrateAuth();
  // }, []);

  const handleSignup = async (signupObj: UserInputDto) => {
    try {
      const newUser: UserOutputDto = await authService.signup(signupObj);
      console.log(newUser)
      setUser(newUser);
    } catch (error) {
      console.error(error);
      throw new Error("couldn't signup");
    }
  };

  const handleLogin = async (loginObj: UserInputDto) => {
    try {
      const user: UserOutputDto = await authService.login(loginObj);
      setUser(user);
    } catch (error) {
      console.error(error);
      throw new Error("Couldn't login");
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      setUser(null);
    } catch (e) {
      console.error(e);
      throw new Error("couldn't logout user");
    }
  };

  return (
    <div>
      {!user ? (
        <div>
          <Signup signup={handleSignup} />
          <Login login={handleLogin} />
        </div>
      ) : (
        <div>
          <div>{user.email}</div>
          <div>{user.id}</div>
          <button onClick={handleLogout}>logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
