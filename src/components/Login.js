import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { Input, Lable, CustomButton } from "./CommonComponents";
import { Icon } from "@iconify/react";

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

const LoginBttn = styled(CustomButton)`
  background: #41295a;
  border-radius: 5px;
  margin-top: 13px;
`;

function Login(props) {
  const { fonts } = useContext(ThemeContext);
  const [error, seterror] = useState(null);
  console.log(seterror);

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <LoginBody fonts={fonts}>
        <table>
          <tr>
            <TableIconCol>
            {/* <Icon icon="bi:shield-lock-fill" height="40" /> */}
            <Icon  icon="teenyicons:lock-circle-solid" height="40" />
            </TableIconCol>
            <td style={{ textAlign: "left" }}>
              {" "}
              <h1>Log In</h1>
            </td>
          </tr>
        </table>
        <Lable>Email</Lable>
        <LogInput type="email" />
        {error != null && <Error>Email Format is wrong</Error>}
        <Lable>Password</Lable>
        <LogInput type="password" />
        {error != null && <Error>Password Format wrong</Error>}
        <LoginBttn>Log In</LoginBttn>
        <table>
          <tr>
            <td>
              <ForgetPassword>Forget Password</ForgetPassword>
            </td>
            <td style={{ textAlign: "right" }}>
              <SignUp>Don't have an account? Sign Up</SignUp>
            </td>
          </tr>
        </table>
      </LoginBody>
    </Modal>
  );
}

export default Login;
