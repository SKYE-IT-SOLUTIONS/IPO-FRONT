import React, { useContext } from 'react';
import styled from "styled-components";

import { ThemeContext } from '../contexts/ThemeContext';
import {Container,Row,Col,twitter,insta,fb,whatsapp,linkedin,youtube } from './CommonComponents'

export default function FooterContent() {

    const { theme, light, dark } = useContext(ThemeContext);

    const contentRowStyle = {
        background:`${theme ? light.f_c_bg : dark.f_c_bg}`,paddingTop:"10px",paddingBottom:"10px",fontWeight:"bold"
    }
    const iconRowStyle = {
        background:`${theme ? light.f_ic_bg : dark.f_ic_bg}`
    }

    const containerStyle = {
        textAlign:"center",
    }
    const IconImage = styled.img`
        width:24px;
        height:24px;
        padding:10px
    `
    
    return (
        <div>
            <Container style={{...containerStyle}}>
                <Row>
                    <Col>
                        <Row style={{...iconRowStyle}}>
                        <IconImage src={twitter} alt=" "/>
                        <IconImage src={insta} alt=" "/>
                        <IconImage src={fb} alt=" " />
                        <IconImage src={whatsapp} alt=" " />
                        <IconImage src={linkedin} alt=" "/>
                        <IconImage src={youtube} alt=" "/>
                        </Row>
                    </Col>
                </Row>
                <Row  style={{...contentRowStyle}}>
                    &copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:"none",color:"black"}}  href=" "> All rights reserved, Industrial Placement Office, Faculty of Agriculture, University of Ruhuna.</a>
                </Row>
            </Container>
        </div>
    )
}