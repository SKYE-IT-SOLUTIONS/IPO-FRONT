// third party imports
import React from "react";
import NavBar from "./components/NavBar";

//in app imports-presentational
import { Header, Main, Footer } from "./components/Layout";
import { Container, Row } from "./components/CommonComponents";

import FooterContent from "./components/Footer";

//in app imports-logical
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
// import { testing } from "./api/authAPI";
// import Button from "@restart/ui/esm/Button";
import TopLogoBar from "./components/TopLogoBar";
import ContactUs from "./components/ContactUs";
import NewsList from "./components/NewsList";
import ImageSlider from "./components/ImageSlider";
import Mover from "./components/Mover";
// import JobList from "./components/JobList";
import Subscription from "./components/Subscription";
import LogoCard from "./components/LogoCard";
// import Status from "./components/Status";

function App() {

  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Header>
          <TopLogoBar />
          <NavBar />
        </Header>
        <Main>
          <ImageSlider/>
          <Mover/>
          <NewsList/>

          {/* <Container fluid>
          <NewsList />
          <JobList />
          {/* <NotFound /> */}
          <Container>
          <Row style={{justifyContent:"center"}}>
          <LogoCard/>
          <LogoCard/>
          <LogoCard/>
          <LogoCard/>
          <LogoCard/>
          </Row>
          </Container>
          <Container fluid>
            <Row>
              <ContactUs />
              <Subscription/>
              <ContactUs />
            </Row>
          </Container>
        </Main>
        <Footer>
          <FooterContent />
        </Footer>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default App;
