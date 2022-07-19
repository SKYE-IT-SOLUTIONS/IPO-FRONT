import React from "react";

import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header, Footer, SideNav } from "../../components/DashboardLayout";

import TopLogoBar from "../../components/TopLogoBar";
// import NavBar from "../../components/NavBar";
import FooterContent from "../../components/Footer";
import CompanySideNav from "./Company/CompanySideNav";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const AdminLayout = () => {
  return (
    <>
      <Header>
        <TopLogoBar />
        {/* <NavBar /> */}
      </Header>
      <SideNav>
        <Container>
          <CompanySideNav/>
          <Outlet />
        </Container>
      </SideNav>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
};

export default AdminLayout;
