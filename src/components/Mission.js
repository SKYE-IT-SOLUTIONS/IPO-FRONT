// third party imports
import React, { useContext } from "react";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
// import {vision} from "./CommonComponents";
import { Row, Col, Container } from "./CommonComponents";
import Missionimg from "../assets/Mission.svg";

const Mdiv = styled(Row)`
  font-family: ${({ fontFamily }) => fontFamily};
  padding: 10px 10px 10px 20px;
  margin: 0;
`;
const Vdiv = styled(Col)`
  background-size: 100%;
  background-image: url("https://i.pinimg.com/originals/bc/27/d8/bc27d86f17734a148728f5be2a0b0aa0.jpg");
  height: 350px;
  opacity: 1;
  object-fit: cover;
  @media only screen and (min-width: 700px) {
    height: 350px;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    height: 250px;
  }
  @media (min-width: 400px) and (max-width: 500px) {
    height: 220px;
  }
  @media (min-width: 200px) and (max-width: 400px) {
    height: 220px;
  }
  @media (max-width: 200px) {
    height: 200px;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 1000;
  @media only screen and (min-width: 700px) {
    margin-top: 50px;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    margin-top: 30px;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    margin-top: 25px;
  }
  @media (min-width: 200px) and (max-width: 400px) {
    margin-top: 20px;
  }
  @media (max-width: 200px) {
    margin-top: 10px;
  }
`;
const Para = styled.p`
 
  font-weight: 1000;
  @media only screen and (min-width: 1160px) {
    font-size: 15px;
    margin-top: 20px;
   
  }
  @media (min-width: 1024px) and (max-width: 1160px) {
    font-size: 15px;
    margin-top: 20px;
  }

  @media (min-width: 700px) and (max-width: 1024px) {
    font-size: 14px;
    margin-top: 20px;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    font-size: 13px;
    margin-top: 8px;
    padding-left: 100px;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 10px;
    
   
  }
  @media (max-width: 300px) {
    font-size: 8px;
    margin-top: 8px;
  }
`;
const Image = styled("img")`
  height: 100%;
  width: 100%;
  margin-top: 30px;
  border-radius: 20px;
  margin-left: 40px;
  @media (max-width: 800px) {
    visibility: hidden;
  }
`;
const P1=styled.p`
    color:#000000;
`;
function Mission() {
  //theme, light, dark,
  const { fonts } = useContext(ThemeContext);

  // const current_theme = theme ? light : dark;
  // console.log(current_theme)
  return (
    <Mdiv fontFamily={fonts.general}>
      <Vdiv>
        <Container>
          <Row>
            {" "}
            <Col lg={4} md={2} sm={2} xs={2}></Col>
            <Col lg={5} md={7} sm={10} xs={10}>
              <Title>Mission</Title>
              <Para>
                "Empower our undergraduates and alumni with the knowledge,
                skills, and experiences to:
                <br/>
                <P1>
                    a) Make sound career and academic decisions<br/>
                    b) Prepare for satisfying employment<br/>, and<br/>
                    c) Develop successful lifelong career plans in an evolving global world of work"
                </P1>
              </Para>
            </Col>
            <Col lg={3} md={3} sm={0} xs={0}>
              <Image src={Missionimg}></Image>
            </Col>
          </Row>
        </Container>
      </Vdiv>
    </Mdiv>
  );
}
export default Mission;
