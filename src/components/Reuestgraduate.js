import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, CustomButton,Input} from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";

const Requestdiv=styled.div`
    font-family: ${({ font }) => font.general};
    padding: 0px 20px;
`;
const Title =styled.h1`
    text-align: center;
`;
function Requestgraduate() {
    const { fonts } = useContext(ThemeContext);
    return (
        <Requestdiv font={fonts}>
             <Title>Edit Contact Details</Title>
            
        </Requestdiv>
    )
}

export default Requestgraduate
