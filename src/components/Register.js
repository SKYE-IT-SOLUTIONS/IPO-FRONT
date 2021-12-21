import React,{useContext} from 'react'
import { Stack,Paper } from '@mui/material'
import styled from "styled-components";
import Student from '../assets/student.svg';
import Company from '../assets/companyimg.svg';
import {Row, Col, CustomButton} from "./CommonComponents";
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "../contexts/ThemeContext";

const Mdiv=styled.div`
    padding: 100px;
    font-family: ${({ font }) => font.general};
`;
const StyledImg =styled.img`
  padding: auto;
  width: 100%;
  height: 100%;
  &: hover {
    transform: scale(1.2);
    transition-delay: 300ms;
  };
`;
const Header=styled.h1`
    margin-left: 100px;
    @media only screen and (min-width: 1160px) {
        margin-left: 100px;
    
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    margin-left: 100px;
    
  }

  @media (min-width: 848px) and (max-width: 1024px) {
    margin-left: 100px;
    
  }
  @media (min-width: 767px) and (max-width: 848px) {
    margin-left: 100px;
    
  }
  @media (min-width: 500px) and (max-width: 767px) {
    margin-left: 100px;

  }
  @media (min-width: 300px) and (max-width: 500px) {
    margin-left: 40px;
  
  }
  @media (max-width: 300px) {
    margin-left: 80px;
  }
`;
const AnimatedText = styled.span`
  margin-top: 20px;
  font-weight: 800;
  font-family: ${({ font }) => font.general};
  background: black;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  animation: text 10s infinite;
  text-align: center;
  position: absolute;
  text-align: center;
  @keyframes text {
  0% { opacity: 0; transform: translateZ(-50px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateZ(-50px); }
  }
  @media only screen and (min-width: 1160px) {
    font-size: 50px;
    
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    font-size: 45px;
    
  }

  @media (min-width: 848px) and (max-width: 1024px) {
    font-size: 35px;
    
  }
  @media (min-width: 767px) and (max-width: 848px) {
    font-size: 35px;
    
  }
  @media (min-width: 500px) and (max-width: 767px) {
    font-size: 30px;

  }
  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 28px;
  
  }
  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 25px;
  
  }
  @media (max-width: 300px) {
    font-size: 20px;  
  }
`;
const WrapperDiv=styled.div`
    padding: 40px;
    display: flex;
    text-align: center;
    flex-direction: column;
    cursor: pointer;
`;
const Button=styled(CustomButton)`
    margin: auto;
`;
function Register() {
  const { fonts } = useContext(ThemeContext);
  const navigate = useNavigate();
    
    return (
        <div>
            <Header><AnimatedText font={fonts}>Choose Your character</AnimatedText></Header>
        <Mdiv font={fonts}>
            
            <Stack direction="row" spacing={10} >
             <Row> 
                 <Col style={{paddingBottom:"15px"}}>  
                <Paper elevation={6} onClick={()=>{navigate("companyReg")}}>
                <WrapperDiv>
                    <StyledImg
                    alt=""
                    src={Company}
                    />
                    <Button disabled submit>Company</Button>
                </WrapperDiv>
                </Paper>
                </Col>
               
                <Col>
                <Paper elevation={6} onClick={()=>{navigate("studentReg")}}>
                <WrapperDiv>
                    <StyledImg
                    alt=""
                    src={Student}
                    />
                    <Button disabled submit>Student</Button>
                </WrapperDiv>
                </Paper>
                </Col>
                </Row>
            </Stack>
            
        </Mdiv>
        </div>
    )
}

export default Register;


