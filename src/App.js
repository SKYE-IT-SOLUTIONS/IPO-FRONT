/* eslint-disable react-hooks/exhaustive-deps */
// third party imports
import React,{useEffect} from "react";
import { useRoutes } from "react-router-dom";
//in app imports-presentational
import routes from "./routes";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";
import { useSelector } from "react-redux";

import {useDispatch} from 'react-redux'
import { setUserId, setUserLoggedIn, setUserRole } from "./store/userSlice"

import AuthServices from "./services/AuthServices";

function App() {
  const authService = new AuthServices();
  const dispatch = useDispatch();

  useEffect(() => {
    async function verifyUser() {
      const {status, error } = await  authService.handleIsUserLoggedIn();//error
      console.log("status",status);
      if(!status){
        dispatch(setUserLoggedIn("SSNB"));
        dispatch(setUserId(""));
        dispatch(setUserRole(""));
      }else{
        console.log(error);
      }
      
    }
    verifyUser();
  }, [])
  const  isUserLoggedIn  = useSelector(state => state.user.iuli);
  const  userRole  = useSelector(state => state.user.userRole);
  console.log("State user ",useSelector(state => state.user))
  const routing = useRoutes(routes(isUserLoggedIn === "NBSS" ? true : false ,userRole));
  return <ThemeContextProvider>{routing}</ThemeContextProvider>;
}

export default App;
