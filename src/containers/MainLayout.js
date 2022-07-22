import React from "react";
import { Header, Main, Footer } from "../components/Layout";
import FooterContent from "../components/Footer";
import NavBar from "../components/NavBar";
import TopLogoBar from "../components/TopLogoBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header>
        <TopLogoBar />
        <NavBar />
      </Header>
      <Main dashboard={false}>
        <Outlet />
      </Main>
      <Footer>
        <FooterContent />
      </Footer>
    </>
  );
}