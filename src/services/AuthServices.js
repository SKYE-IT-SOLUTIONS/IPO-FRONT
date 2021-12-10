import { loginIn, logOut } from "../api/auth/authAPI";

export default class AuthServices {
      // credentials = {username:"supun97", password:"qweasdzxc"}// -input payload sample
  handleLogin = async (credentials, setIsAuthenticated) => {
    const { status, error } = await loginIn(credentials);
    console.log(error);
    if (status) {
      setIsAuthenticated(true);
      return {status:status,error:error};
    } else {
      return {status:status,error:error};
    }
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
