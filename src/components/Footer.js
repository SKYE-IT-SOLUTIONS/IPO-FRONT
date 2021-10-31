import React, { useContext } from "react";
import styled from "styled-components";

import { ThemeContext } from "../contexts/ThemeContext";
import {
  Container,
  Row,
  Col,
  twitter,
  insta,
  fb,
  whatsapp,
  linkedin,
  youtube,
} from "./CommonComponents";

const IconImage = styled.img`
width:40px;
height:40px;
padding:10px;
cursor: pointer;
`

export default function FooterContent() {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;

  const contentRowStyle = {
    flexDirection:"row",
    justifyContent:"center",
    background: `${them.f_c_bg}`,
    padding : "10px",
    fontWeight: "bold",
    color: them.copyright,
  };
  
  const iconRowStyle = {
        flexDirection:"row",
        justifyContent:"center",
        background:`${them.f_ic_bg}`,
    }

    const footer = {
        fontFamily:`${fonts.general}`
    }
    
    return (
        <div style={{...footer}}>
            <Container fluid>
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
            </Container>
            <Container fluid style={{...contentRowStyle}}>
                &copy; {new Date().getFullYear()} Copyright: <a style={{textDecoration:"none",color:them.syntax}}  href=" "> All rights reserved, Industrial Placement Office, Faculty of Agriculture, University of Ruhuna.</a>
            </Container>
        </div>
    )
}
