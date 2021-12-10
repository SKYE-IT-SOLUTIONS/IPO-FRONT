import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";
import { Input, Lable, CustomButton } from "./CommonComponents";
import { Icon } from "@iconify/react";
import AuthServices from "../services/AuthServices";
import { AuthContext } from "../contexts/AuthContext";
import { Simple_Validator} from "../services/ValidationService";

const LoginBody = styled(Modal.Body)`
  font-family: ${({ fonts }) => fonts.general};
  display: flex;
  flex-direction: column;
`;

const ForgetPassword = styled(Lable)`
  cursor: pointer;
  font-size: 13px;
`;

const Error = styled.p`
  color: red;
  font-size: 13px;
  margin: 0px;
  padding: 5px 0px;
`;

const SignUp = styled(Lable)`
  cursor: pointer;
  font-size: 13px;
`;

const TableIconCol = styled.td`
  width: 42%;
  text-align: right;
  padding: 0 10px 4px 0;
`;

const LogInput = styled(Input)`
  width: 100%;
`;

const LoginButton = styled(CustomButton)`
  background: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  margin-top: 13px;
`;

function Login(props) {
  const [email, setEmail] = useState("");
  const [emailInfo, setEmailInfo] = useState({ error: null, status: false });

  const [password, setPassword] = useState("");
  const [passwordInfo, setPasswordInfo] = useState({error: null,status: false});

  const [isLoading, setisLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const them = theme ? light.button : dark.button;

  const navigate = useNavigate();

  const user = new AuthServices();

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <LoginBody fonts={fonts}>
        <table>
          <tbody>
            <tr>
              <TableIconCol>
                {/* <Icon icon="bi:shield-lock-fill" height="40" /> */}
                <Icon icon="teenyicons:lock-circle-solid" height="40" />
              </TableIconCol>
              <td style={{ textAlign: "left" }}>
                {" "}
                <h1>Log In</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <Lable>Email</Lable>
        <LogInput
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailInfo(Simple_Validator(e.target.value));
          }}
        />
        {emailInfo.error != null && <Error>{emailInfo.error}</Error>}
        <Lable>Password</Lable>
        <LogInput
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordInfo(Simple_Validator(e.target.value));
          }}
        />
        {passwordInfo.error != null && <Error>{passwordInfo.error}</Error>}
        <LoginButton
          disabled={isLoading}
          bgColor={!isLoading ? them.enable : them.disable}
          onClick={async () => {
            if (emailInfo.status && passwordInfo.status) {
              setSubmitError(null);
              setisLoading(true);
              const { status, error } = await user.handleLogin(
                {username: email,password: password,},
                setIsAuthenticated
              );
              setisLoading(false);
              if (status) {
                props.onHide();
              }
              if (status) {
                console.log(props);
                navigate("admin");
              } else {
                setSubmitError(error);
              }
            }
          }}
        >
          Log In
        </LoginButton>
        {submitError != null && <Error>{submitError}</Error>}
        <table>
          <tbody>
            <tr>
              <td>
                <ForgetPassword>Forget Password</ForgetPassword>
              </td>
              <td style={{ textAlign: "right" }}>
                <SignUp>Don't have an account? Sign Up</SignUp>
              </td>
            </tr>
          </tbody>
        </table>
      </LoginBody>
    </Modal>
  );
}

export default Login;
