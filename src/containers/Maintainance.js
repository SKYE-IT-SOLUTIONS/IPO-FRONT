import styled from "styled-components";
import React, { useContext } from "react";

import Maintain from "../assets/Maintenance-cuate.svg";
import { ThemeContext } from "../contexts/ThemeContext";

const FluidContainer = styled.div`
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

const StyledImg =styled.img`
  padding: auto;
  height: 450px;
  width: 100%;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`

const Maintainance = () => {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;

  return (
    <FluidContainer>
      <StyledImg
        alt=""
        src={Maintain}
      />
      <Subtitle color={them.syntax} fontFamily={fonts.general}>
        This feature is under maintenance and available soon.
      </Subtitle>
    </FluidContainer>
  );
};

export default Maintainance;
