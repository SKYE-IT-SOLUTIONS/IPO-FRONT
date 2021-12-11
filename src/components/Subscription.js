import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Input, Lable, CustomButton } from "./CommonComponents";
import { subscribeIpo } from "../api/subAPI";
import { Simple_Validator, Validator } from "../services/ValidationService";
import { patternMail } from "../config/pattern";

const SubscriptDiv = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: ${({ fonts }) => fonts.general};
  background: linear-gradient(to top, #00b09b, #96c93d);
`;
const SubLable = styled(Lable)`
  text-align: left;
`;
const InfoLable = styled(Lable)`
  font-size: 13px;
  color: white;
  padding-top: 0px;
  padding-bottom: 0px;
`;
const EmailInfo = styled(Lable)`
  font-size: 13px;
  color: white;
  padding-top: 0px;
  padding-bottom: 0px;
  text-align: left;
`;

const SubInput = styled(Input)`
  width: 100%;
`;

const SubIcon = styled(Icon)`
  margin: auto;
`;

const SubBttn = styled(CustomButton)`
  margin: 10px auto;
  padding: auto;
`;
const Error = styled.p`
  color: #dc281e;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
`;

function Subscription() {
  const { fonts } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [nameInfo, setNameInfo] = useState({ error: null, status: false });

  const [email, setEmail] = useState("");
  const [emailInfo, setEmailInfo] = useState({ error: null, status: false });

  const [isLoading, setisLoading] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  return (
    <SubscriptDiv fonts={fonts} md={4} sm={12}>
      <SubIcon icon="entypo:mail" width="70" />
      <InfoLable>
        Join our subscribe list to get the latest news & updates
      </InfoLable>
      <SubLable>Name</SubLable>
      <SubInput
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          let val = e.target.value;
          setName(val);
          setNameInfo(Simple_Validator(val, "Name"));
        }}
      />
      {nameInfo !== null && <Error>{nameInfo.error}</Error>}
      <SubLable>Email Address</SubLable>
      <SubInput
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={(e) => {
          let val = e.target.value;
          setEmail(val);
          setEmailInfo(Validator(val, patternMail, "Email"));
        }}
      />
      {emailInfo !== null && <Error>{emailInfo.error}</Error>}
      <EmailInfo>We'll never share your email with anyone else.</EmailInfo>
      {submitError != null && <Error>{submitError}</Error>}
      <SubBttn
        submit
        disabled={isLoading}
        onClick={async () => {
          setisLoading(true)
          if(nameInfo.status && emailInfo.status){
            const {status,error} = await subscribeIpo({ name, email });
            if(status){
              setName("")
              setEmail("")
              setSubmitError(null)
            }else{
              setSubmitError(error)
            }
          }
          setisLoading(false)
        }}
      >
        SUBMIT
      </SubBttn>
    </SubscriptDiv>
  );
}

export default Subscription;
