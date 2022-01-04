import React from "react";
import { Container, Row, Col } from "./CommonComponents";
import styled from "styled-components";
import { Icon } from "@iconify/react";

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
  margin: 15px 0;
  cursor: pointer;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

const Arrow = styled(Icon)`
  margin: 0 15px 0 0;
  font-size:20px;

  @media (max-width: 1040px) {
    font-size: 17px;
  }
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

function NavBarListView() {
  return (
    <NavList>
      <div style={{ margin: "auto"}}>
        <CustomUl>
          {navList &&
            navList.map((value, index) => (
              <CustomLi key={index}>
                <Arrow icon="bi:arrow-right-circle-fill"/> {value}
              </CustomLi>
            ))}
        </CustomUl>
      </div>
    </NavList>
  );
}

export default NavBarListView;
