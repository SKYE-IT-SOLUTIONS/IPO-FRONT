import React from 'react'
import { Stack,Paper,Grid } from '@mui/material'
import styled from "styled-components";
import Student from '../assets/Student.svg';
import Company from '../assets/Company.svg';
import { Container, Row, Col, CustomButton,Input} from "./CommonComponents";

const Mdiv=styled.div`
    padding: 100px;
   
    
`;
const StyledImg =styled.img`
  padding: auto;
  width: 100%;
  height: 100%;
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
    )
}

export default Registationdashboard
