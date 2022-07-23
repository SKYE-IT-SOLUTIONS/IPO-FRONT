/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  CustomButton,
  Input,
} from "../../CommonComponents";
import { ThemeContext } from "../../../contexts/ThemeContext";
import editContact from "../../../assets/edit-contact.svg";
import { Validator } from "../../../utils/validation";
import { patternMail, patternContact } from "../../../config/pattern";

const Contactcontainer = styled(Container)`
  font-family: ${({ font }) => font.general};
  padding: 0px 20px;
`;
const StyledImg = styled.img`
  padding: auto;
  height: 100%;
  width: 100%;
`;
const Title = styled.h1`
  text-align: center;
`;
const Inputaddress = styled(Input)`
  margin-bottom: 10px;
  font-size: 14px;
  width: 100%;
`;
const Input2 = styled(Input)`
  font-size: 16px;
  width: 100%;
`;
const Error = styled.p`
  color: #dc281e;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
`;
const Button = styled(CustomButton)``;
function EditContact() {
  const { fonts } = useContext(ThemeContext);
  const [contact, setContact] = useState();
  const [contactInfo, setContactInfo] = useState({
    error: null,
    status: false,
  });
  const [fax, setFax] = useState();
  const [faxInfo, setFaxInfo] = useState({ error: null, status: false });
  const [email, setEmail] = useState();
  const [emailInfo, setEmailInfo] = useState({ error: null, status: false });
  const [officer, setOfficer] = useState();
  const [officerInfo, setOfficerInfo] = useState({
    error: null,
    status: false,
  });

  const handleSubmit = async (credentials) => {};

  return (
    <Contactcontainer font={fonts}>
      <Title>Edit Contact Details</Title>
      <Row style={{ paddingTop: "15px" }}>
        <Col md={6} sm={12}>
          <StyledImg alt="" src={editContact} />
        </Col>
        <Col md={6} sm={12}>
          <br />
          <Row>
            <Col md={4} sm={12}>
              Contact Number
            </Col>
            <Col md={8} sm={12}>
              <Input2
                type="text"
                name="contactNumber"
                value={contact}
                placeholder="07********"
                onChange={(e) => {
                  let val = e.target.value;
                  setContact(val);
                  setContactInfo(
                    Validator(val, patternContact, "Contact Number")
                  );
                }}
              />
              {contactInfo.error && <Error>{contactInfo.error}</Error>}
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={4} sm={12}>
              Email
            </Col>
            <Col md={8} sm={12}>
              <Input2
                type="email"
                name="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailInfo(Validator(e.target.value, patternMail, "Mail"));
                }}
              />
              <br />
              {emailInfo.error && <Error>{emailInfo.error}</Error>}
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={4} sm={12}>
              Officer
            </Col>
            <Col md={8} sm={12}>
              <Input2
                type="text"
                name="officer"
                value={officer}
                placeholder="Name***"
                onChange={(e) => {
                  let val = e.target.value;
                  setOfficer(val);
                  setOfficerInfo({
                    error: "Required Officer name",
                    status: true,
                  });
                }}
              />
              {officerInfo.error && <Error>{officerInfo.error}</Error>}
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={4} sm={12}>
              Fax
            </Col>
            <Col md={8} sm={12}>
              <Input2
                type="text"
                name="fax"
                placeholder="03********"
                onChange={(e) => {
                  let val = e.target.value;
                  setFax(val);
                  setFaxInfo(Validator(val, patternContact, "Contact Number"));
                }}
              />
              <br />
              {faxInfo.error && <Error>{faxInfo.error}</Error>}
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={6} sm={12} />
            <Col md={6} sm={12}>
              <Button
                type="submit"
                submit
                disabled={!contactInfo.status || !emailInfo.status}
                onClick={() => {
                  if (contactInfo.status && emailInfo.status) {
                    handleSubmit({
                      contactnumber: contact,
                      Email: email,
                    });
                  }
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Contactcontainer>
  );
}

export default EditContact;
