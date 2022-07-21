import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Input, Lable, CustomButton } from "./CommonComponents";
import { Simple_Validator, Validator } from "../utils/validation";
import { patternMail } from "../config/pattern";
import CustomSnackBar from "./CustomSnackBar";
import DataService from "../services/DataService";
import { Recaptcha } from "./CommonComponents";

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
  color:#0f3443;
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

const Title =  styled.h1`
  font-family: ${({ fonts }) => fonts.title};
  font-size: 25px;
  color:#DC281E;
`
const RECAPTCHA =styled(Recaptcha)`
  margin: auto;
  display: flex;
  justify-content: center;
`;


function Subscription() {
  const { fonts } = useContext(ThemeContext);

  const [name, setName] = useState("");
  const [nameInfo, setNameInfo] = useState({ error: null, status: false });

  const [email, setEmail] = useState("");
  const [emailInfo, setEmailInfo] = useState({ error: null, status: false });

  const [isLoading, setisLoading] = useState(false);
  // const [submitError, setSubmitError] = useState(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [severity, setSeverity] = useState("");
  const [recaptcha,setRecaptcha] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const dataService = new DataService();

  const handleSubscribe = async () => {
    if(nameInfo.status && emailInfo.status){
      setisLoading(true)
      const {status,error} = await dataService.handleSubscription({ name:name, email:email });
      if(status){
        setMessage("Subscribed Successfully")
        setSeverity("success")
        setSnackbarOpen(true)
        setName("")
        setEmail("")
        setNameInfo({error:null,status:false})
        setEmailInfo({error:null,status:false})
      }else{
        setMessage(error)
        setSeverity("error")
        setSnackbarOpen(true)
      }
      setisLoading(false)
    }
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setRecaptcha(!recaptcha);
  }

  return (
    <SubscriptDiv fonts={fonts} md={4} sm={12}>
      <SubIcon icon="entypo:mail" width="70" />
      <Title fonts={fonts}>SUBSCRIBE US</Title>
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
      <RECAPTCHA
            onChange={onChange}
      />
      <SubBttn
        submit
        disabled={isLoading || !nameInfo.status || !emailInfo.status || !recaptcha}
        onClick={handleSubscribe}
      >
        SUBMIT
      </SubBttn>
      <CustomSnackBar isOpen={snackbarOpen}  severity={severity} handleClose={handleClose} message={message}/>
    </SubscriptDiv>
  );
}

export default Subscription;
