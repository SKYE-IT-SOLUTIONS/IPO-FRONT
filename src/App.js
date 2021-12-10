// third party imports
import React, { useContext } from "react";
import { useRoutes } from "react-router-dom";
//in app imports-presentational
import routes from "./routes";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";

import { AuthContext } from "./contexts/AuthContext";

function App() {
  
  const {isAuthenticated} = useContext(AuthContext);
  const routing = useRoutes(routes(isAuthenticated));
  
  return <ThemeContextProvider>{routing}</ThemeContextProvider>;
}

export default App;
