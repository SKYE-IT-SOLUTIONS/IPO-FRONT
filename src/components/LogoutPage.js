import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

import AuthServices from "../services/AuthServices";

const authServices = new AuthServices();

const LogoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    authServices.handleLogout().then(() => {
      localStorage.clear();
      authServices.handleLogoutLocally();
      setIsLoading(false);
      window.location.pathname = "/";
    });
  }, []);

  return isLoading ? <Spinner /> : <Navigate to="/" />;
};

export default LogoutPage;
