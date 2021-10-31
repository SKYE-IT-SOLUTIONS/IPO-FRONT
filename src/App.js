// third party imports
import React from "react";

//in app imports-presentational
import { Header, Main, Footer } from "./components/Layout";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Header></Header>
      <Main></Main>
      <Footer>
        Copyright {new Date().getFullYear()} &#169; SKYE IT SOLUTIONS
      </Footer>
    </ThemeContextProvider>
  );
}

export default App;
