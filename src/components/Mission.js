// third party imports
import React, { useState, useContext } from "react";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import {vision} from "./CommonComponents";
import  {Row,Col,Container} from './CommonComponents';
import Missionimg from '../assets/Mission.svg'

const Mdiv=styled(Row)`
    font-family:${({fontFamily})=> fontFamily};
    padding: 10px 10px 10px 20px;
`;
const Vdiv=styled(Col)`
    
    background-size: 100%;
    background-Image: url("https://i.pinimg.com/originals/bc/27/d8/bc27d86f17734a148728f5be2a0b0aa0.jpg");
    height: 350px;
    opacity: 1;
    object-fit: cover;
`;
const Title=styled.h1`
    text-align: center;
    margin-top: 70px;
    font-weight: 1000;
`;
const Para=styled.p`
    text-align: center; 
    margin-top: 20px;
    margin-left:10px;
    font-weight: 1000;
    @media only screen and (min-width: 1160px) {
        font-size: 15px;
    }
    @media (min-width: 1024px) and (max-width: 1160px) {
        font-size: 15px;
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        font-size: 14px;
    }
    @media (min-width: 500px) and (max-width: 700px) {
        font-size: 13px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
    }
`;
const Image =styled("img")`
    height: 100%;
    width: 100%;
    margin-top: 30px;
    border-radius: 20px;
    margin-left: 40px;
    @media (max-width: 800px) {
        visibility: hidden;
    }
`;
function Mission(){
    const { theme, light, dark, fonts } = useContext(ThemeContext);

    const current_theme = theme ? light : dark;
    return(
        <Mdiv fontFamily={fonts.general}>
            <Vdiv >
            <Container>
                <Row> <Col lg={4} md={2} sm={2} xs={2}></Col>
                    <Col lg={5} md={7} sm={10} xs={10}>
                    <Title>Mission</Title>
                        <Para>
                            Ultimately, a paragraph is a sentence or group of
                            sentences that support one main idea. In this handout, we
                            will refer to this as the “controlling idea,” because it
                            controls what happens in the rest of the paragraph.
                        </Para>
                    </Col>
                    <Col lg={3} md={3} sm={0}  xs={0}>
                        <Image src={Missionimg}></Image>
                    </Col>
                </Row>
            </Container>
               
            </Vdiv>
            
        </Mdiv>
    );
}
export default Mission;