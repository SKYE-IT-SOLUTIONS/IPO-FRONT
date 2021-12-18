import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, CustomButton,Input} from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import editContact from '../assets/edit-contact.svg';

const Contactcontainer=styled(Container)`
    font-family: ${({ font }) => font.general};
    padding: 0px 20px;
`;
const StyledImg =styled.img`
  padding: auto;
  height: 100%;
  width: 100%
`;
const Title =styled.h1`
    text-align: center;
`;
const Inputaddress=styled(Input)`
    margin-bottom:10px;
    color: #808B96 ;
    font-size:14px;
`;
const Input2=styled(Input)`
    color: #808B96 ;
    font-size:16px;
`;
const Button=styled(CustomButton)`

`;
function EditContact() {
    const { fonts } = useContext(ThemeContext);
    return (
        <Contactcontainer font={fonts}>
            <Title>Edit Contact Details</Title>
            <Row style={{ paddingTop: "15px" }}>
                <Col md={6} sm={12}>
                    <StyledImg
                    alt=""
                    src={editContact}
                    />
                </Col>
                <Col md={6} sm={12}>
                    <Row>
                        <Col md={6} sm={12}>
                            <tr>Address</tr>
                        </Col>
                    <Col md={6} sm={12}>
                        <table>
                            <tr><Inputaddress type="text" name="name" value="Name"/></tr>
                            <tr><Inputaddress type="text" name="name" value="Line1"/></tr>
                            <tr><Inputaddress type="text" name="name" value="Line2"/></tr>
                            <tr><Inputaddress type="text" name="name" value="Line3"/></tr>
                            <tr><Inputaddress type="text" name="name" value="Country"/></tr>
                        </table>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={6} sm={12}>
                        Telephone
                    </Col>
                    <Col md={6} sm={12}>
                        <Input2 type="text" name="name" value="+94-"/>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={6} sm={12}>
                        Fax
                    </Col>
                    <Col md={6} sm={12}>
                        <Input2 type="fax" name="Fax" value="Fax No"/>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={6} sm={12}>
                        Email
                    </Col>
                    <Col md={6} sm={12}>
                        <Input2 type="email" name="Email" value="abc@gmail.com"/>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={6} sm={12}>
                        Industrial Placement Officer
                    </Col>
                    <Col md={6} sm={12}>
                        <Input2 type="text" name="name" value="Name"/>
                    </Col>
                    </Row><br/>
                    <Row>
                    <Col md={6} sm={12}/>
                    <Col md={6} sm={12}>
                    <Button type="submit" submit>Submit</Button>
                    </Col>
                    </Row>
                        
                </Col>
            </Row>
           
        </Contactcontainer>
    )
}

export default EditContact
