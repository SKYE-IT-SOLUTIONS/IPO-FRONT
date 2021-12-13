import React from "react";

import styled from "styled-components";

import SideNav from "../../components/SideNav";
import UserList from "./Users/UserList";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Dashboard = () => {
  return (
    <React.Fragment>
      <Container>
        <SideNav />
        <UserList/>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
