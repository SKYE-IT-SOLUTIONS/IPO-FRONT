import React from "react";
import styled from "styled-components";
import { logo } from "./CommonComponents";

import { Container, Navbar } from "./CommonComponents";

const IconImage = styled.img`
  height: 50px;
  width: 40px;
  margin-left: 4.5px;
  cursor: pointer;
`;

const TopTitle = styled.h1`
  position: absolute;
  font-size: 30px;
  color: white;
  font-family: "Lora", serif;
  letter-spacing: 8px;
  padding-left: 30px;
  margin-top: -20px;
  margin-bottom: 1px;
`;

const CustomDiv = styled.div`
  @media only screen and (min-width: 1160px) {
    background: red;
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    background: blue;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    background: pink;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    background: purple;
  }
  @media (min-width: 350px) and (max-width: 500px) {
    background: gray;
  }
  @media (max-width: 350px) {
    background: black;
  }
`;

export default function TopLogoBar() {
  return (
    <CustomDiv>
      <Navbar
        sticky="top"
        variant="dark"
        expand="md"
        className="navstyle"
      >
        <Container fluid>
          <div>
            <table>
              <thead>
                <tr>
                  <IconImage alt="" src={logo} />
                  <th>
                    <TopTitle className="text">Industrial Placement Office (IPO)</TopTitle>
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
            {/* <MovingTexts>
                <p className="text1">Faculty Of Agriculture</p>
                <p className="text2">University Of Ruhuna</p>
                </MovingTexts> */}
          </div>
        </Container>
      </Navbar>
    </CustomDiv>
  );
}
