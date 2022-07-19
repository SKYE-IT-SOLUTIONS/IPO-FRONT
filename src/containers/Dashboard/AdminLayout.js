import React from "react";

import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header, Footer,SideNav } from "../../components/DashboardLayout";

import TopLogoBar from "../../components/TopLogoBar";
import FooterContent from "../../components/Footer";
import AdminSideNav from "./Admin/AdminSideNav";

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
          <AdminSideNav/>
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
