// third party imports
import React,{useState} from "react";
import { useRoutes } from "react-router-dom";
//in app imports-presentational
import routes from "./routes";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";
import { isUser } from './api/auth/authAPI';
import { useEffect } from "react";

function App() {

  const routing = useRoutes(routes());
  return <ThemeContextProvider>{routing}</ThemeContextProvider>;
}
const auth = async () => {
  const {status, error} = await isUser();
  console.log(error);
  console.log("status "+ status);
  return status;
};
export default App;
