import React, { useContext } from "react";
import { Container, Row, Col, CustomButton } from "../../CommonComponents";
import styled from "styled-components";
import InternshipImg from "../../../assets/Internship.svg";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const NavButton = styled(CustomButton)`
  padding: 5px 15px;
  width: 300px;
  border-radius: 25px;
  border: 2px solid rgba(0, 0, 0, 1);
  background-color: rgba(234, 97, 141, 0.05);
  margin: 5px 0;

  @media (min-width: 768px) and (max-width: 1040px) {
    width: 250px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 250px;
    font-size: 14px;
  }
`;

const AnimatedText = styled("h1")`
  font-family: ${({ font }) => font.general};
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  padding: 25px 0;
`;

const OuterDiv = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 76vh;
  font-family: ${({ font }) => font.general};
`;

const ApplyImage = styled.div`
  height: 450px;
  width: 100%;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 400px;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 350px;
    width: 100%;
  }
`;

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 5px;
`;

function InternshipRequest() {
  const { fonts } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <OuterDiv font={fonts}>
      <AnimatedText font={fonts}>Choose You Choice</AnimatedText>
      <Row>
        <Column md={5}>
          <InnerDiv style={{ margin: "auto" }}>
            <NavButton
              onClick={() => {
                navigate("student-requests");
              }}
            >
              Student Internship Requests
            </NavButton>
            <NavButton
              onClick={() => {
                navigate("maintain-company-list");
              }}
            >
              Maintain Company List
            </NavButton>
          </InnerDiv>
        </Column>
        <Col md={7}>
          <ApplyImage image={InternshipImg} />
        </Col>
      </Row>
    </OuterDiv>
  );
}

export default InternshipRequest;
