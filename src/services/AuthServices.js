import { loginIn, logOut,isUser } from "../api/auth/authAPI";

export default class AuthServices {
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
