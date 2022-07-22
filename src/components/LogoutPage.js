import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

import AuthServices from "../services/AuthServices";

const authServices = new AuthServices();

const LogoutPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    authServices.handleLogout().then(() => {
      localStorage.clear();
      authServices.handleLogoutLocally();
      setIsLoading(false);
      navigate("/");
    });
  }, [navigate]);

  return isLoading ? <Spinner /> : <Navigate to="/" />;
};

export default LogoutPage;
