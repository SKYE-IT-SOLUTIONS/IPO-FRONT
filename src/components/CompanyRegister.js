import React, { useContext, useState } from "react";
import {
  CustomButton,
  Input,
  Lable,
  Container,
  Row,
  Col,
} from "./CommonComponents";
import styled from "styled-components";
import company from "../assets/Businessman.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import { passwordMatcher } from "../utils/passwordMatcher";
import { Simple_Validator, Validator } from "../utils/validation";
import {patternPassword,patternContact,patternMail} from '../config/pattern'
import AuthServices from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import CustomSnackBar from "./CustomSnackBar";

const RegistrationDiv = styled(Container)`
  font-family: ${({ font }) => font.general};
`;

const LoginImg = styled.img`
  width: 100%;
`;

const AddInput = styled(Input)`
  margin-top:10px;
`

const Heading = styled.h1`
  font-size: 25px;
  text-align: left;
  padding: 10px 0px;
  font-weight: bolder;
  color: #001e62;
  text-align: center;
  /* margin-top: -30px; */
`;

const LoginCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginBttn = styled(CustomButton)`
  width: 150px;
  margin: 15px 0px;
`;

const SeparateDiv = styled.div`
  border: 4px solid;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  text-align: left;
  background-color: #eef2f3;
`;

const Error = styled.p`
  color: #dc281e;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
`;

function CompanyRegister() {
  const { fonts } = useContext(ThemeContext);

  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [person, setPerson] = useState("")
  const [contact, setContact] = useState("")
  const [no, setNo] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("");
  const [password, setpassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [nameInfo, setNameInfo] = useState({ error: null, status: false });
  const [emailInfo, setEmailInfo] = useState({ error: null, status: false });
  const [personInfo, setPersonInfo] = useState({ error: null, status: false });
  const [contactInfo, setContactInfo] = useState({ error: null, status: false });
  const [cityInfo, setCityInfo] = useState({ error: null, status: false });
  const [passwordInfo, setPasswordInfo] = useState({ error: null, status: false });
  const [matchPassword, setMatchPassword] = useState({error:null,isMatching:false});

  const [error, setError] = useState("");
  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsErrorMsgOpen(false);
  };

  const authServices = new AuthServices();
  const navigate = useNavigate();

  const handleSubmit = async (credentials) => {
    setIsLoading(true);
    const {status,data,error}  = await authServices.handleSignUp(credentials);
    if(status){
      sessionStorage.setItem("email",data?.email);
      navigate("/register/sendMail");
    }else{
      setError(error);
      setIsErrorMsgOpen(true);
    }
    setIsLoading(false);
  }

  return (
    <RegistrationDiv font={fonts}>
      <Row style={{ paddingTop: "10px" }}>
        <LoginCol md={6} sm={12} xs={12}>
          <LoginImg src={company} />
        </LoginCol>
        <LoginCol md={6} sm={12} xs={12}>
          <SeparateDiv>
            <Heading>COMPANY REGISTRATION</Heading>

            <Lable>Company Name</Lable>
            <Input
              type="text"
              onChange={(e) => {
                let val = e.target.value
                setName(val)
                setNameInfo(Simple_Validator(val,"Company Name"))
              }}
            />
            {nameInfo.error && <Error>{nameInfo.error}</Error>}

            <Lable>Email</Lable>
            <Input
              type="email"
              onChange={(e) => {
                let val = e.target.value
                setemail(val)
                setEmailInfo(Validator(val,patternMail,"Email"))
              }}
            />
            {emailInfo.error && <Error>{emailInfo.error}</Error>}

            <Lable>Contact Person</Lable>
            <Input
              type="text"
              onChange={(e) => {
                let val = e.target.value
                setPerson(val);
                setPersonInfo(Simple_Validator(val,"Contact person"))
              }}
            />
            {personInfo.error && <Error>{personInfo.error}</Error>}

            <Lable>Contact Number</Lable>
            <Input
              type="text"
              onChange={(e) => {
                let val = e.target.value
                setContact(val);
                setContactInfo(Validator(val,patternContact,"Contact number"))
              }}
            />
            {contactInfo.error && <Error>{contactInfo.error}</Error>}

            <Lable>Address</Lable>
            <Input
              type="text"
              placeholder="No"
              onChange={(e) => {
                setNo(e.target.value);
              }}
            />
            <AddInput
              type="text"
              placeholder="Street"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
            <AddInput
              type="text"
              placeholder="City"
              onChange={(e) => {
                let val = e.target.value
                setCity(val)
                setCityInfo(Simple_Validator(val,"City"))
              }}
            />
            {cityInfo.error && <Error>{cityInfo.error}</Error>}

            <Lable>Password</Lable>
            <Input
              type="text"
              value={password}
              onChange={(e) => {
                let val = e.target.value
                setPasswordInfo(Validator(val,patternPassword,"Password"))
                setpassword(e.target.value)
              }}
            />
             {passwordInfo.error && <Error>{passwordInfo.error}</Error>}

            <Lable>Confirm Password</Lable>
            <Input
              type="text"
              value={confirmPassword}
              onChange={(e) => {
                let value = e.target.value
                setConfirmPassword(value)
                setMatchPassword(passwordMatcher(password,value))
                // console.log(val)
              }}
            />

              {!matchPassword.isMatching && <Error>{matchPassword.error}</Error>}

            <LoginBttn submit disabled={isLoading ||!nameInfo.status || !emailInfo.status || !personInfo.status || !contactInfo.status || !cityInfo.status || !passwordInfo.status || !matchPassword.isMatching} onClick={()=>{
              if(nameInfo.status && emailInfo.status && personInfo.status && contactInfo.status && cityInfo.status && passwordInfo.status && matchPassword.isMatching){
                handleSubmit({
                  "email" : email,
                  "password" : password,
                  "companyname":name,
                  "conatctperson":person,
                  "conatctnumber":contact,
                  "address":`${no},<br/>${street},<br/>${city}`,
                  "role" : ["company"]
              });
              }
            }}>Register</LoginBttn>
          </SeparateDiv>
        </LoginCol>
      </Row>
      <CustomSnackBar isOpen={isErrorMsgOpen}  severity="error" handleClose={handleClose} message={error}/>
    </RegistrationDiv>
  );
}

export default CompanyRegister;
