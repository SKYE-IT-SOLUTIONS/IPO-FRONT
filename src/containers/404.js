import styled from "styled-components";
import React, { useContext } from "react";

import NoFound from "../assets/404 Error.svg";
import { ThemeContext } from "../contexts/ThemeContext";

const FluidContainer = styled.div`
  padding: 1em;
`;

const Subtitle = styled.div`
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  font-size: 1.8em;
  margin-top: 0;
`;

const StyledImg =styled.img`
  padding: auto;
  height: auto;
  width: 100%
`

const NotFound = () => {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;

  return (
    <FluidContainer>
      <StyledImg
        alt=""
        src={NoFound}
      />
      <Subtitle color={them.syntax} fontFamily={fonts.general}>
        The page you are look in for doesn't exist.
      </Subtitle>
    </FluidContainer>
  );
};

export default NotFound;
