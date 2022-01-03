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
import student from "../assets/studentreg.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import { passwordMatcher } from "../utils/passwordMatcher";
import { Simple_Validator, Validator } from "../utils/validation";
import {patternPassword} from '../config/pattern';
import AuthServices from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import CustomSnackBar from "./CustomSnackBar";
import RECAPTCHA from "react-google-recaptcha";

const RegistrationDiv = styled(Container)`
  font-family: ${({ font }) => font.general};
`;

const LoginImg = styled.img`
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 25px;
  text-align: left;
  padding: 10px 0px;
  font-weight: bolder;
  color: #001e62;
  text-align: center;
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

const Error = styled.p`
  color: #dc281e;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
`;

const Success = styled.p`
  color: 	#009933;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
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

function StudentRegister() {
  const { fonts } = useContext(ThemeContext);

  const [name, setName] = useState("")
  const [reg, setReg] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const [nameInfo, setNameInfo] = useState({ error: null, status: false });
  const [regInfo, setRegInfo] = useState({ error: null, status: false });
  const [passwordInfo, setPasswordInfo] = useState({ error: null, status: false });
  const [matchPassword, setMatchPassword] = useState({error:null,isMatching:false});

  const [error, setError] = useState("");
  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [recaptcha,setRecaptcha] = useState(false);

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
    const {status,data,error}  = await authServices.handleStudentSignUp(credentials);
    if(status){
      sessionStorage.setItem("email",data?.email);
      navigate("/register/sendMail");
    }else{
      setError(error);
      setIsErrorMsgOpen(true);
    }
    setIsLoading(false);
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setRecaptcha(!recaptcha);
  }

  return (
    <RegistrationDiv font={fonts}>
      <Row style={{ paddingTop: "10px" }}>
        <LoginCol md={6} sm={12} xs={12}>
          <LoginImg src={student} />
        </LoginCol>
        <LoginCol md={6} sm={12} xs={12}>
          <SeparateDiv>
            <Heading>STUDENT REGISTRATION</Heading>

            <Lable>Student Registration Number</Lable>
            <Input
            value={reg}
              type="text"
              onChange={(e) => {
                let val = e.target.value
                setReg(val)
                setRegInfo(Simple_Validator(val,"Registration Number"))
              }}
            />
            {regInfo.error && <Error>{regInfo.error}</Error>}

            <Lable>Name</Lable>
            <Input
            value={name}
              type="text"
              onChange={(e) => {
                let val = e.target.value
                setName(val)
                setNameInfo(Simple_Validator(val,"Company Name"))
              }}
            />
            {nameInfo.error && <Error>{nameInfo.error}</Error>}

            <Lable>Password</Lable>
            <Input
             value={password}
              type="password"
              onChange={(e) => {
                let val = e.target.value
                setPasswordInfo(Validator(val,patternPassword,"Password"))
                setpassword(e.target.value)
                setMatchPassword(passwordMatcher(val,confirmPassword))
              }}
            />
            {passwordInfo.error && <Error>{passwordInfo.error}</Error>}

            <Lable>Confirm Password</Lable>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                let value = e.target.value
                setConfirmPassword(value)
                setMatchPassword(passwordMatcher(password,value))
              }}
            />
             {!matchPassword.isMatching ? <Error>{matchPassword.error}</Error> :  <Success>Password is matching</Success>}
             <RECAPTCHA
            sitekey="6LdKyuYdAAAAALtVruhZDuwZg9mLKsdg8D7oC_01"
            onChange={onChange}
      />
            <LoginBttn submit disabled={!recaptcha ||isLoading || !nameInfo.status || !regInfo.status || !passwordInfo.status || !matchPassword.isMatching} onClick={()=>{
              if(nameInfo.status && regInfo.status && passwordInfo.status && matchPassword.isMatching){
                handleSubmit({
                  "username" : reg,
                  "password" : confirmPassword,
                  "role" : ["student"],
                  "name" : name,
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

export default StudentRegister;
