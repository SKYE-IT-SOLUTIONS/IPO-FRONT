// 3rd party components
import React, { createContext, useEffect, useState } from "react";
import { isUser } from "../api/auth/authAPI";
import { getRefreshToken } from "../api/auth/tokensAPI";

// in app components

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const refreshToken = getRefreshToken();
      if (
        refreshToken !== null ||
        refreshToken !== undefined ||
        refreshToken !== ""
      ) {
        const { status, error } = await isUser();
        setIsAuthenticated(status);
        console.log("user log Status: "+ status);
        setUserError(error);
      }else{
        setIsAuthenticated(false);
        setUserError("Error: No refresh token found");
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userError, setIsAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
