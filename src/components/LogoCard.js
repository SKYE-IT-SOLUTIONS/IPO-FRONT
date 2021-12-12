import React from "react";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { Col } from "./CommonComponents";

const CustomLogo = styled(Col)`
  &: hover {
    transform: scale(1.2);
    transition-delay: 300ms;
  };
  padding-top : 10px;
  display : flex;
  margin:auto;
  margin-bottom: 30px;
`;

const CustomCard = styled(Card)`
  width: 18rem;
  border-radius: 15px;
  background: #E0EAFC;
  margin:auto;
`;

const LogoImg = styled.div`
border-radius: 15px;
  background-image: url(${({ image }) => image});
  height: 130px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


export default function LogoCard({ img }) {
    return (
      <CustomLogo md={4} sm={4} lg={3} xl={3} xxl={2} xs={10}>
        <CustomCard >
          <LogoImg image={img}/>
        </CustomCard>
      </CustomLogo>
    );
}
