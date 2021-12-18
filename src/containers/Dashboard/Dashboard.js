import React from "react";

import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header, Main, Footer } from "../../components/DashboardLayout";

import TopLogoBar from "../../components/TopLogoBar";
import NavBar from "../../components/NavBar";
import FooterContent from "../../components/Footer";
import SideNav from "../../components/SideNav";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Dashboard = () => {
  return (
    <>
      <Header>
        <TopLogoBar />
        <NavBar />
      </Header>
      <Main>
        <Container>
          <SideNav/>
          <Outlet />
        </Container>
      </Main>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
};

export default Dashboard;
