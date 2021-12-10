// third party imports
import React from "react";
import { useRoutes } from "react-router-dom";
//in app imports-presentational
import routes from "./routes";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {

  const routing = useRoutes(routes(true));

  return <ThemeContextProvider>{routing}</ThemeContextProvider>;
}

export default App;
