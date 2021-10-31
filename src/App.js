// third party imports
import React from "react";

//in app imports-presentational
import { Header, Main, Footer } from "./components/Layout";
import FooterContent from "./components/Footer";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    
    <ThemeContextProvider>
      <Header></Header>
      <Main></Main>
      <Footer>
        
        <FooterContent/>
      </Footer>
    </ThemeContextProvider>
  );
}

export default App;
