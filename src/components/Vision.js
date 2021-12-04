// third party imports
import React, { useState, useContext } from "react";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import {vision} from "./CommonComponents";
import  {Row} from './CommonComponents';
import  {Col} from './CommonComponents';

const Mdiv=styled(Row)`
    font-family:${({fontFamily})=> fontFamily};
`;
const Vdiv=styled(Col)`
    margin :10px;
    background-size: 100%;
    background-Image: url("https://media.istockphoto.com/vectors/vector-of-a-boy-with-backpack-looking-at-a-mountain-top-with-a-red-vector-id1267695685?k=20&m=1267695685&s=612x612&w=0&h=Lu2cvX2IcnWZPyUlQNk7yvbPMGvdxevfrUG-iJIK2_8=");
    height: 350px;
    opacity: 1;
    object-fit: cover;
`;
const Title=styled.h1`
    text-align: center;
    margin-top: 100px;
    color: white;
`;
const Para=styled.p`
    text-align: center;
    margin-top: 50px;
    color: white;
`;
const Imgdiv=styled(Col)`

`;
const Image=styled.img`
    float: right;
    display:block;
    width:100%;
    margin-top: 10px;
    position:relative;
    object-fit: cover;

`;
function Vision(){
    const { theme, light, dark, fonts } = useContext(ThemeContext);

    const current_theme = theme ? light : dark;
    return(
        <Mdiv fontFamily={fonts.general}>
            <Vdiv >
                <Title>Vision</Title>
                    <Para>
                      Ultimately, a paragraph is a sentence or group of
                      sentences that support one main idea. In this handout, we
                      will refer to this as the “controlling idea,” because it
                      controls what happens in the rest of the paragraph.
                    </Para>
            </Vdiv>
            
        </Mdiv>
    );
}
export default Vision;