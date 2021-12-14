import React from "react";
import { Header, Main, Footer } from "../components/Layout";
import FooterContent from "../components/Footer";
import TopLogoBar from "../components/TopLogoBar";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav"

export default function AdminLayout() {
  return (
    <>
      <Header>
        <TopLogoBar />
      </Header>
      <Main dashbard={true}>
          {/* <SideNav/> */}
        <Outlet />
      </Main>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
}
