import React, { useContext } from 'react';
import styled from "styled-components";

import { ThemeContext } from '../contexts/ThemeContext';
import {Container,Row,Col,twitter,insta,fb,whatsapp,linkedin,youtube } from './CommonComponents'

export default function FooterContent() {

    const { theme, light, dark, fonts } = useContext(ThemeContext);
    const them = theme ? light : dark;

    const contentRowStyle = {
        background:`${them.f_c_bg}`,paddingTop:"10px",paddingBottom:"10px",fontWeight:"bold", color:them.copyright
    }
    const iconRowStyle = {
        background:`${them.f_ic_bg}`,
    }

    const containerStyle = {
        fontFamily:fonts.general,
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
                    &copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:"none",color:them.syntax}}  href=" "> All rights reserved, Industrial Placement Office, Faculty of Agriculture, University of Ruhuna.</a>
                </Row>
            </Container>
        </div>
    )
}