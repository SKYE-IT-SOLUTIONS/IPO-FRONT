import { loginIn, logOut } from "../api/auth/authAPI";

export default class AuthServices {
  // credentials = {username:"supun97", password:"qweasdzxc"}// -input payload sample
  handleLogin = async (credentials) => {
    const response = await loginIn(credentials);
    return response;

  };
  handleLogout = async (setIsAuthenticated) => {
    const { status, error } = await logOut();
    console.log(error);
    if (status) {
      setIsAuthenticated(false);
    } else {
      alert(error);
    }
  };
}
