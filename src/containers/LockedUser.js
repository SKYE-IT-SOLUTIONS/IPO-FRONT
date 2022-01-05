import styled from "styled-components";
import React, { useContext } from "react";
import { Container, Row, Col } from "../components/CommonComponents";
import Locked from "../assets/Security-pana.svg";
import { ThemeContext } from "../contexts/ThemeContext";

const FluidContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  min-height: 76vh;
`;

const Subtitle = styled.div`
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  font-size: 1.8em;
  margin-top: 0;

  @media (min-width: 768px) and (max-width: 1040px) {
    font-size: 1.4em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const StyledImg = styled.img`
  padding: auto;
  height: 450px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Blocked = styled.span`
  color: red;
`;

const LockedUser = () => {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;

  return (
    <FluidContainer>
      <div>
        <StyledImg alt="" src={Locked} />
        {/* <p>Your profile is temparily <Blocked>blocked</Blocked>.Please verify the mail</p> */}
        <Subtitle color={them.syntax} fontFamily={fonts.general}>
          Your profile is temparily <Blocked>blocked</Blocked>.Please verify the
          mail
        </Subtitle>
      </div>
    </FluidContainer>
  );
};

export default LockedUser;
