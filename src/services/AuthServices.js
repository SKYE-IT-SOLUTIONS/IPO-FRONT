import { loginIn, logOut,isUser,signUp,logOutLocally,onGetAll,onDelete } from "../api/auth/authAPI";

const COMPANY_SIGNUP = "/auth/signup?profile=company";
const STUDENT_SIGNUP = "/auth/signup?profile=student";
const GET_ALL_COMPANIES = "/auth?filter=company";
const USER_DELETE = "auth/delete";

export default class AuthServices {

  handleCompanySignUp = async (credentials) => {
    const response = await signUp(credentials,COMPANY_SIGNUP);
    return response;

  };

  handleStudentSignUp = async (credentials) => {
    console.log("handleStudentSignUp-AuthServices");
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

  handleLogoutLocally = async () => {
    logOutLocally();
  }

  handleGetAllCompanyUsers = async () => {
    console.log("handleGetAllCompanyUsers");
    const response = await onGetAll(GET_ALL_COMPANIES);
    return response;
  }

  handleDeleteCompanyUser = async (id) => {
    console.log("handleDeleteCompanyUser");
    const response = await onDelete(USER_DELETE,id);
    return response;
  }

}