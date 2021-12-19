import { loginIn, logOut,isUser,signUp } from "../api/auth/authAPI";

export default class AuthServices {

  handleSignUp = async (credentials) => {
    const response = await signUp(credentials);
    return response;

  };

    // credentials = {username:"supun97", password:"qweasdzxc"}// -input payload sample
  handleLogin = async (credentials) => {
    const response = await loginIn(credentials);
    return response;

  };
  handleLogout = async () => {
    const result = await logOut();
    return result;
  };

  handleIsUserLoggedIn = async () => {
    console.log("handleIsUserLoggedIn");
    const response = await isUser();
    return response;
  }
}
