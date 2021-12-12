import React,{useContext} from "react";
import { Container, Row } from "./CommonComponents";
import LogoCard from "./LogoCard";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

const Title = styled.h2`
    font-family: ${({font}) => font.general};
    text-align:center;
    color:white;
`

const OuterDiv = styled.div`
    background : linear-gradient(to right, #0f0c29, #302b63, #24243e);
    width:100%;
    padding-top : 20px;
`

const LogoList = [
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1619573193776-5d8ecc9567b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1618411062366-81b4c31657cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
  "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  "https://images.unsplash.com/photo-1572916289328-eca59d6903ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1501951653466-8df816debe46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
];

function SponsorList() {
    const { fonts } = useContext(ThemeContext);

  return (
    <OuterDiv>
    <Title font={fonts}>Our Proud Sponsors</Title>
      <Container>
        <Row>
          {LogoList && LogoList.map((value, index) => <LogoCard img={value} />)}
        </Row>
      </Container>
    </OuterDiv>
  );
}

export default SponsorList;
