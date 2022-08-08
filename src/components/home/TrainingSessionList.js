import React from "react";
import { Container, Row, Col } from "../CommonComponents";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import direct from "../../assets/direction.svg";

const NavList = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 76vh;
`;

const CustomUl = styled.ul`
  list-style-type: none;
`;

const CustomLi = styled.li`
  margin: 25px 0;
  cursor: pointer;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

const Arrow = styled(Icon)`
  margin: 0 15px 0 0;
  font-size: 20px;

  @media (max-width: 1040px) {
    font-size: 17px;
  }
`;

const ApplyImage = styled.div`
  height: 500px;
  width: 500px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 500px;
    width: 500px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const navList = [
  "How to prepare a CV",
  "Facing an interview",
  "Findinng a job",
  "Personal development",
  "Finding scholarships",
  "Foreign Employment",
  "Plot the career path",
];

function TrainingSessionList() {
  return (
    <NavList>
      <Row>
        <Column md={4}>
          <div style={{ margin: "auto" }}>
            <CustomUl>
              {navList &&
                navList.map((value, index) => (
                  <CustomLi key={index}>
                    <Arrow icon="bi:arrow-right-circle-fill" />
                    {value}
                  </CustomLi>
                ))}
            </CustomUl>
          </div>
        </Column>
        <Col md={8}>
          <ApplyImage image={direct} />
        </Col>
      </Row>
    </NavList>
  );
}

export default TrainingSessionList;
