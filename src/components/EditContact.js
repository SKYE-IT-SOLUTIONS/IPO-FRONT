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
  width: 100%;
`;
const Title =styled.h1`
    text-align: center;
`;
const Inputaddress=styled(Input)`
    margin-bottom:10px;
    font-size:14px;
    width: 100%;
`;
const Input2=styled(Input)`
    font-size:16px;
    width: 100%;
`;
const Button=styled(CustomButton)`

`;
function EditContact() {
    const { fonts } = useContext(ThemeContext);
    const [addressNo,setAddressNo]=useState();
    const [address1,setAddress1]=useState();
    const [address2,setAddress2]=useState();
    const [address3,setAddress3]=useState();
    const [city,setCity]=useState();
    const [contact,setContact]=useState();
    const [fax,setFax]=useState();
    const [email,setEmail]=useState();
    const [name,setName]=useState();

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
                        <Col md={4} sm={12}>
                            <tr>Address</tr>
                        </Col>
                    <Col md={8} sm={12}>
                        <table>
                            <Inputaddress type="text" name="name" value={addressNo} placeholder="Apart No"/>
                            <Inputaddress type="text" name="name" value={address1} placeholder="Line1"/>
                            <Inputaddress type="text" name="name" value={address2} placeholder="Line2"/>
                            <Inputaddress type="text" name="name" value={address3} placeholder="Line3"/>
                            <Inputaddress type="text" name="name" value={city} placeholder="City"/>
                        </table>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={4} sm={12}>
                        Telephone
                    </Col>
                    <Col md={8} sm={12}>
                        <Input2 type="text" name="name" value={contact} placeholder="07********"/>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={4} sm={12}>
                        Fax
                    </Col>
                    <Col md={8} sm={12}>
                        <Input2 type="fax" name="Fax" value={fax} placeholder="Fax No"/>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={4} sm={12}>
                        Email
                    </Col>
                    <Col md={8} sm={12}>
                        <Input2 type="email" name="Email" value={email} placeholder="Email"/>
                    </Col>
                    </Row>
                    <br/>
                    <Row>
                    <Col md={4} sm={12}>
                        Industrial Placement <br/>Officer
                    </Col>
                    <Col md={8} sm={12}>
                        <Input2 type="text" name="name" value={name} placeholder="Name"/>
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
