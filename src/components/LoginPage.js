import React, { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  CustomButton,
  Input,
  Lable,
} from "./CommonComponents";
import styled from "styled-components";
import loginImg from "../assets/loginImage.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/AuthServices";
import { Simple_Validator } from "../utils/validation";
import { useDispatch } from "react-redux";
import { setUserId, setUserLoggedIn, setUserRole } from "../store/userSlice";
import CustomSnackBar from "./CustomSnackBar";

const OuterDiv = styled(Container)`
  font-family: ${({ font }) => font.general};
`;

const LoginImg = styled.img`
  width: 100%;
`;

const Error = styled.p`
  color: red;
  font-size: 13px;
  margin: 0px;
  padding: 5px 0px;
`;

const Heading2 = styled.h1`
  font-size: 23px;
  text-align: left;
  padding: 10px 0px;
  font-weight: bolder;
`;

const LoginCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginButton = styled(CustomButton)`
  background: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  margin-top: 15px;
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
`;

const ForgetPassword = styled(Lable)`
  cursor: pointer;
  font-size: 13px;
  text-align: right;
`;

function LoginPage(props) {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light.button : dark.button;

  const dispatch = useDispatch();
  const user = new AuthServices();
  const navigate = useNavigate();

  const [isLoading, setisLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameInfo, setUsernameInfo] = useState({
    error: null,
    status: false,
  });

  const [password, setPassword] = useState("");
  const [passwordInfo, setPasswordInfo] = useState({
    error: null,
    status: false,
  });

  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsErrorMsgOpen(false);
  };

  const handleLogin = async () => {
    setisLoading(true);
    const { status, data, error } = await user.handleLogin({
      username: username,
      password: password,
    });
    console.log(status);
    setisLoading(false);
    if (status) {
      dispatch(setUserId(data?.id));
      dispatch(setUserLoggedIn("NBSS"));
      dispatch(setUserRole(data?.roles[0]));
      console.log("Role", data?.roles[0]);
      switch (data?.roles[0]) {
        case "ROLE_ADMIN":
          navigate("/admin/dashboard");
          break;
        case "ROLE_STUDENT":
          navigate("/student/dashboard");
          break;
        case "ROLE_COMPANY":
          navigate("/company/dashboard");
          break;
        default:
          navigate("/");
          break;
      }
    } else {
      if(error === 423){
        navigate("/423");
      }else{
        setIsErrorMsgOpen(true);
        setSubmitError(error);
      }
    }
  };

  return (
    <OuterDiv font={fonts}>
      <Row style={{ paddingTop: "10px" }}>
        <LoginCol md={6} sm={12} xs={12}>
          <LoginImg src={loginImg} />
        </LoginCol>
        <LoginCol md={6} sm={12} xs={12}>
          <SeparateDiv>
            <Heading2>Log in to an existing profile</Heading2>

            <Lable>Email Address</Lable>
            <Input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => {
                setUsername(e.target.value);
                setUsernameInfo(Simple_Validator(e.target.value, "Username"));
              }}
            />
            {usernameInfo.error != null && <Error>{usernameInfo.error}</Error>}

            <Lable>Password</Lable>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordInfo(Simple_Validator(e.target.value, "Password"));
              }}
            />
            {passwordInfo.error != null && <Error>{passwordInfo.error}</Error>}

            <LoginButton
              disabled={
                isLoading || !usernameInfo.status || !passwordInfo.status
              }
              bgColor={!isLoading ? them.login : them.disable}
              onClick={async () => {
                if (usernameInfo.status && passwordInfo.status) {
                  handleLogin();
                }
              }}
            >
              Log In
            </LoginButton>
            <ForgetPassword>Forgot Password</ForgetPassword>
          </SeparateDiv>

          {/* <SeparateDiv>
            <Heading2>Create a profile</Heading2>
            <Lable>
              If you haven‘t set up your Xsalonce profile yet, why not take a
              minute to register ? We promise it won’t take long.
            </Lable>
              <LoginBttn>Register</LoginBttn>

          </SeparateDiv> */}
        </LoginCol>
      </Row>
      <CustomSnackBar
        isOpen={isErrorMsgOpen}
        severity="error"
        handleClose={handleClose}
        message={submitError}
      />
    </OuterDiv>
  );
}

export default LoginPage;
