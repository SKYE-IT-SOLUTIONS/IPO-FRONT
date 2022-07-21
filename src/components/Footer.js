import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ThemeContext } from "../contexts/ThemeContext";
import {
  Container,
  Row,
  twitter,
  insta,
  fb,
  whatsapp,
  linkedin,
  youtube,
} from "./CommonComponents";

const IconImage = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
`;
const FooterWrapper = styled.div`
  font-family: ${({ font }) => font};
  background-color: ${({ bg }) => bg};
  @media (min-width: 500px){
      font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const IconRow = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const Copyright = styled(Container)`
  background: ${({ bg }) => bg};
  padding: 10px;
  font-weight: bold;
  color: ${({ fcolor }) => fcolor};
  & > a {
    color: ${({ fccolor }) => fccolor};
    text-decoration: none;
    :hover {
      cursor: pointer;
    }
  }
`;

export default function FooterContent() {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light.footer : dark.footer;
  // const navigate = useNavigate();

  return (
    <FooterWrapper font={fonts.general} bg={them.f_ic_bg}>
      <Container fluid>
        <IconRow>
          <IconImage src={twitter} alt=" " />
          <IconImage src={insta} alt=" " />
          <IconImage src={fb} alt=" " />
          <IconImage src={whatsapp} alt=" " />
          <IconImage src={linkedin} alt=" " />
          <IconImage src={youtube} alt=" " />
        </IconRow>
      </Container>
      <Copyright
        fluid
        bg={them.f_c_bg}
        fcolor={them.copyright}
        fccolor={them.syntax}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        All rights reserved, 
        <a href=" ">
          {" "}
          Industrial Placement Office, Faculty of
          Agriculture, University of Ruhuna.
        </a><br/>
        Developed By: <a href="/developers" target="_blank">SKYE IT SOLUTIONS</a>
      </Copyright>
    </FooterWrapper>
  );
}
