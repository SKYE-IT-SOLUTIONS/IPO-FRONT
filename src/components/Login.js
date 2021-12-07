import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { Input, Lable, CustomButton } from "./CommonComponents";
import { Icon } from "@iconify/react";
import AuthServices from "../services/AuthServices";

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
  background: #41295a;
  border-radius: 5px;
  margin-top: 13px;
`;

function Login(props) {
  const { fonts } = useContext(ThemeContext);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = new AuthServices();
  // console.log(seterror);

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
        <LogInput value={email} onChange={(e) => setEmail(e.target.value)} />
        {error != null && <Error>Email Format is wrong</Error>}
        <Lable>Password</Lable>
        <LogInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error != null && <Error>Password Format wrong</Error>}
        <LoginButton onClick={() => {user.handleLogin({username:email, password:password})}}>Log In</LoginButton>
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
