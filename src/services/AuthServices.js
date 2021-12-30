import { loginIn, logOut,isUser,signUp } from "../api/auth/authAPI";

const COMPANY_SIGNUP = "/signup?profile=company";
const STUDENT_SIGNUP = "/signup?profile=student";

export default class AuthServices {

  handleCompanySignUp = async (credentials) => {
    const response = await signUp(credentials,COMPANY_SIGNUP);
    return response;

  };

  handleStudentSignUp = async (credentials) => {
    const response = await signUp(credentials,STUDENT_SIGNUP);
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
