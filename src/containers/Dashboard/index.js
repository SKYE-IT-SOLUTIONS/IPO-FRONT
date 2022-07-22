import React from "react";
import styled from "styled-components";

import Data from "../../components/MaterialDataGrid";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 25px;
`;
const Dashboard = () => {
  return (
    <Container>
      <Data />
    </Container>
  );
};

export default Dashboard;
