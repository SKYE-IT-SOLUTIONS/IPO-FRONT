import styled from "styled-components";
import React, { useContext } from "react";

import NoFound from "../assets/404-Illustration.png";
import { ThemeContext } from "../contexts/ThemeContext";

const FluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const Title = styled.h1`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 4.5em;
  margin-bottom: 0;
`;

const Subtitle = styled.div`
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  font-size: 1.8em;
  margin-top: 0;
`;

const NotFound = () => {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;

  return (
    <FluidContainer>
      <img
        alt=""
        className="mt-4"
        style={{ padding: "auto", height: "300px" }}
        src={NoFound}
      />
      <Title fontFamily={fonts.general}>404!</Title>
      <Subtitle color={them.syntax} fontFamily={fonts.general}>
        The page you are look in for doesn't exist.
      </Subtitle>
    </FluidContainer>
  );
};

export default NotFound;
