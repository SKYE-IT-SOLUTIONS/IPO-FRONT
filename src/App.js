// third party imports
import React,{useState} from "react";
import { useRoutes } from "react-router-dom";
//in app imports-presentational
import routes from "./routes";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";
import { useSelector } from "react-redux";

function App() {
  const  isUserLoggedIn  = useSelector(state => state.user.iuli);
  console.log("State user ",useSelector(state => state.user))
  const routing = useRoutes(routes(isUserLoggedIn === "NBSS" ? true : false ));
  return <ThemeContextProvider>{routing}</ThemeContextProvider>;
}

export default App;
