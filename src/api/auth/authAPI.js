import { authRequest, getErrorMessage, postRequest,  getRequest } from "../utils";
import {
  getRefreshToken,
  getAccessToken,
  setAccessToken,
  getUserId,
  setRefreshToken,
  setUserId,
  refreshAccessToken,
} from "./tokensAPI";
import {
  LOGIN_URL,
  LOGOUT_URL,
  ACCESS_URL,
  REFRESH_URL,
} from "../../config/urls";

var result = { status: false, error: null }; //global variable declared

export const loginIn = async (credentials) => {
  console.log("loginIn");
  await postRequest(LOGIN_URL, credentials)
    .then(({ data, error }) => {
      console.log(data);
      // console.log("data" + data.data);
      if (!error) {
        if(data.status === 200) {
          const { token, refreshToken, id } = data?.data;
          setAccessToken(token);
          setRefreshToken(refreshToken);
          setUserId(id);
          console.log("login success");
          result = { status: true,data: data?.data, error: null };
        }
      } else {
        if(error.status === 423) {
          console.log("login locked");
          result = { status: false,data: null, error: 423 };
        }else{
          result = { status: false,data: null, error: getErrorMessage(error) };
        }
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false,data: null, error: getErrorMessage(error) };
    });
  console.log(result);
  return result;
};

export const signUp = async (credentials,SIGNUP_URL) => {
  console.log("signUp");
  await postRequest(SIGNUP_URL, credentials)
    .then(({ data, error }) => {
      if (!error) {
        if(data.status === 201){
          // console.log("signup-data" + data.data);
          console.log("signUp success");
          result = { status: true,data: data?.data, error: null };
        }else{
          console.log("signUp failed");
          result = { status: false,data: null, error: "error" };
        }
      } else {
        console.log(error);
        if(error.status === 404){
          console.log("signUp failed-error");
          result = { status: false,data: null, error: getErrorMessage(error) };
        }else if(error.status === 400){
          console.log("signUp failed-errorByAuth");
          result = { status: false,data: null, error: error.data.message };
        }
      }
    })
    .catch((error) => {
      console.log("error " + error);
      result = { status: false,data: null, error: getErrorMessage(error) };
    });
  console.log(result);
  return result;
};

export const logOut = async () => {
  const userId = getUserId("userid");
  var config = {
    method: "POST",
    url: LOGOUT_URL + `/${userId}`,
  };
  await authRequest(config)
    .then(({ data, error }) => {
      if (!error && data.status === 200) {
        console.log("logged out");
        setAccessToken(null);
        setRefreshToken(null);
        setUserId(null);
        result = { status: true,data: data?.data, error: null };
      } else {
        result = { status: false,data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false,data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const isUser = async () => {
  console.log("isUser");
  const refresh = getRefreshToken();
  if (refresh === "") {
    return { status: false,data: null, error: "Refresh Token Not Found" };
  }
  const access = getAccessToken();
  var config = {
    method: "POST",
    url: ACCESS_URL,
    headers: {
      Authorization: `Bearer ${access}`,
      "Content-Type": "application/json",
    },
  };

  await authRequest(config)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true,data: null, error: null };
        } else {
          result = { status: false,data: null, error: "Undefined Status Code" };
        }
      } else {
        if (error.status === 401) {
          console.log("Access Token Expired")
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            result = await isUser();
          } else {
            result = { status: status,data: data?.data, error: getErrorMessage(error) };
          }
        } else {
          result = { status: false,data: null, error: getErrorMessage(error) };
        }
      }
    })
    .catch((error) => {
      result = { status: false,data: null, error: getErrorMessage(error) };
    });
  return result;
}; //must await for the result

// export const testing = async () => {
//   result = await logOut({ username: "supun97", password: "qweasdzxc" });
//   console.log(result);
// };

export const onGetAll = async (DATA_URL) => {
  await getRequest(DATA_URL)
    .then(async ({ data, error }) => {
      if (!error) {
        if (data.status === 200) {
          result = { status: true, data: data?.data, error: null };
        } else {
          result = {
            status: false,
            data: null,
            error: getErrorMessage(error),
          };
        }
      } else {
        result = { status: false, data: null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false, data: null, error: getErrorMessage(error) };
    });
  return result;
};

export const onDelete = async (DATA_URL, id) => {
  var config = {
    method: "DELETE",
    url: DATA_URL + `/${id}`,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
      "Content-Type": "application/json",
    },
  };
  await authRequest(config)
    .then(async ({ data, error }) => {
      console.log("data", data);
      if (data.status === 200) {
        result = { status: true,data:data?.data, error: null };
      }if (!error) {
        if (data.status === 202) {
          result = { status: true,data:data?.data, error: null };
        } else if (data.status === 401) {
          const { status, error } = await refreshAccessToken(
            REFRESH_URL,
            postRequest
          );
          if (status) {
            onDelete(config);
          } else {
            result = { status: false,data:null, error: getErrorMessage(error) };
          }
        }
      } else {
        result = { status: false,data:null, error: getErrorMessage(error) };
      }
    })
    .catch((error) => {
      result = { status: false,data:null, error: getErrorMessage(error) };
    });
  return result;
};

export const logOutLocally=()=>{
  setAccessToken(null);
  setRefreshToken(null);
  setUserId(null);
}