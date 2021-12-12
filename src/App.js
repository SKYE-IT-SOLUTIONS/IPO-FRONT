// third party imports
import React,{useState} from "react";
import { useRoutes } from "react-router-dom";
//in app imports-presentational
import routes from "./routes";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";
import { useSelector } from "react-redux";

function App() {
  const  isUserLoggedIn  = useSelector(state => state.user.isUserLoggedIn);
  const routing = useRoutes(routes(isUserLoggedIn));
  return <ThemeContextProvider>{routing}</ThemeContextProvider>;
}

export default App;
