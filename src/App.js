// third party imports
import React from "react";
import NavBar from "./components/NavBar";

//in app imports-presentational
import { Header, Main, Footer } from "./components/Layout";
import FooterContent from "./components/Footer";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
// import { testing } from "./api/authAPI";
// import Button from "@restart/ui/esm/Button";
import NotFound from "./containers/404";
import TopLogoBar from "./components/TopLogoBar";
import NewsCard from "./components/NewsCard";
import NewsList from "./components/NewsList";

function App() {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Header>
          <TopLogoBar />
          <NavBar />
        </Header>
        <Main>
          {/* <Button onClick={testing}>Pressed</Button> */}
          <NewsList/>
          <NotFound />
        </Main>
        <Footer>
          <FooterContent />
        </Footer>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
