import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { logo } from "./CommonComponents";

import { Container, Navbar } from "./CommonComponents";

const IconImage = styled.img`
  margin-left: 4.5px;
  cursor: pointer;

  @media only screen and (min-width: 1160px) {
    height: 50px;
    width: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    height: 45px;
    width: 35px;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    height: 40px;
    width: 30px;
    margin-left: 5px;
  }
  @media (max-width: 700px) {
    height: 40px;
    width: 30px;
    margin-left: 9px;
  }
`;

const TopTitle = styled.h1`
  position: absolute;
  @media only screen and (min-width: 1160px) {
    font-size: 30px;
    letter-spacing: 8px;
    padding-left: 30px;
    margin-top: -20px;
    margin-bottom: 1px;
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    font-size: 25px;
    letter-spacing: 8px;
    padding-left: 20px;
    margin-top: -15px;
    margin-bottom: 1px;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    font-size: 16px;
    letter-spacing: 4.5px;
    padding-left: 20px;
    margin-top: -10px;
    margin-bottom: 1px;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    font-size: 16px;
    letter-spacing: 2px;
    padding-left: 20px;
    margin-top: -10px;
    margin-bottom: 1px;
  }
  @media (min-width: 350px) and (max-width: 500px) {
    font-size: 13px;
    letter-spacing: 0px;
    padding-left: 12px;
    margin-top: -10px;
    margin-bottom: 1px;
  }
  @media (max-width: 350px) {
    font-size: 9px;
    letter-spacing: 1px;
    padding-left: 8px;
    margin-top: -10px;
    margin-bottom: 1px;
  }
`;

const CustomDiv = styled.div`
  background: ${({ bg }) => bg};
  font-family: ${({ fonts }) => fonts.topLogo};
  color: white;
`;

const AnimatedText = styled.span`
  font-weight: 700;
  text-align: center;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: shine 10s linear infinite;
  position: relative;
  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    25% {
      background-position-x: -250%;
    }
    50% {
      background-position-x: 0%;
    }
    75% {
      background-position-x: 250%;
    }
    100% {
      background-position-x: 500%;
    }
  }
  @media only screen and (min-width: 1160px) {
    font-size: 15px;
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    font-size: 12px;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    font-size: 10px;
  }
  @media (max-width: 700px) {
    font-size: 0px;
    visibility: hidden;
  }
`;

export default function TopLogoBar() {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;

  return (
    <CustomDiv bg={them.ui} fonts={fonts}>
      <Navbar sticky="top" variant="dark" expand="md" className="navstyle">
        <Container fluid>
          <div>
            <table>
              <thead>
                <tr>
                  <td>
                  <IconImage alt="" src={logo} />
                  </td>
                  <th>
                    <TopTitle className="text">
                      Industrial Placement Office (IPO)
                    </TopTitle>
                  </th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
            </table>
          </div>
          <div>
            <AnimatedText>
              <span>Faculty Of Agriculture</span>
            {/* </AnimatedText>
         
            <AnimatedText> */}
               <br />
              <span>University Of Ruhuna</span>
            </AnimatedText>
          </div>
        </Container>
      </Navbar>
    </CustomDiv>
  );
}
