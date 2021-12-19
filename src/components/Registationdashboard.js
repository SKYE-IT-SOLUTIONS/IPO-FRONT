import React from 'react'
import { Stack,Paper,Grid } from '@mui/material'
import styled,{ keyframes } from "styled-components";
import Student from '../assets/student.svg';
import Company from '../assets/companyimg.svg';
import { Container, Row, Col, CustomButton,Input} from "./CommonComponents";

const Mdiv=styled.div`
    padding: 100px;
    
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
  font-family: sans-serif;
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
  0% { opacity: 0; transform: translateY(-50px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-50px); }
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
const Wrapperdiv=styled.div`
    padding: 40px;
    display: flex;
    text-align: center;
    flex-direction: column;
`;
const Button=styled(CustomButton)`
    margin: auto;
`;
function Registationdashboard() {
    
    return (
        <div>
            <Header><AnimatedText>Choose Your character</AnimatedText></Header>
        <Mdiv >
            
            <Stack direction="row" spacing={10} >
             <Row> 
                 <Col style={{paddingBottom:"15px"}}>  
                <Paper elevation={6}>
                < Wrapperdiv>
                    <StyledImg
                    alt=""
                    src={Company}
                    />
                    <Button disabled>Company</Button>
                </ Wrapperdiv>
                </Paper>
                </Col>
               
                <Col>
                <Paper elevation={6}>
                < Wrapperdiv >
                    <StyledImg
                    alt=""
                    src={Student}
                    />
                    <Button disabled>Student</Button>
                </ Wrapperdiv>
                </Paper>
                </Col>
                </Row>
            </Stack>
            
        </Mdiv>
        </div>
    )
}

export default Registationdashboard
