import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate,Route } from "react-router-dom";
import { Input, Lable, CustomButton } from "./CommonComponents";
import { Icon } from "@iconify/react";
import AuthServices from "../services/AuthServices";
<<<<<<< Updated upstream
import { AuthContext } from "../contexts/AuthContext";
import { Simple_Validator} from "../utils/validation";
import {useSelector,useDispatch} from 'react-redux'
=======
import { Simple_Validator} from "../services/ValidationService";
import {useDispatch} from 'react-redux'
>>>>>>> Stashed changes
import { setUserId, setUserLoggedIn, setUserRole } from "../store/userSlice"
import AddNewsPost from "./AddNewsPost";
import CustomSnackBar from "./CustomSnackBar";


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
  const [username, setUsername] = useState("");
  const [usernameInfo, setUsernameInfo] = useState({ error: null, status: false });

  const [password, setPassword] = useState("");
  const [passwordInfo, setPasswordInfo] = useState({error: null,status: false});

  const [isLoading, setisLoading] = useState(false);

  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
  const [submitError, setSubmitError] = useState(null);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsErrorMsgOpen(false);
  };

  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light.button : dark.button;

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const user = new AuthServices();

  const handleLogin = async () => {
      setisLoading(true);
      const { status, data, error } = await user.handleLogin(
        {username: username,password: password},
      );
      console.log(status);
      setisLoading(false);
      if (status) {
        dispatch(setUserId(data?.id))
        dispatch(setUserLoggedIn("NBSS"))
        dispatch(setUserRole(data?.roles))
        props.onHide();
        navigate("admin");
      }else {
        setIsErrorMsgOpen(true)
        setSubmitError(error);
      }
      
  }

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
        <Lable>Username</Lable>
        <LogInput
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setUsernameInfo(Simple_Validator(e.target.value,"Username"));
          }}
        />
        {usernameInfo.error != null && <Error>{usernameInfo.error}</Error>}
        <Lable>Password</Lable>
        <LogInput
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordInfo(Simple_Validator(e.target.value,"Password"));
          }}
        />
        {passwordInfo.error != null && <Error>{passwordInfo.error}</Error>}
        <LoginButton
          disabled={isLoading || !usernameInfo.status || !passwordInfo.status}
          bgColor={!isLoading ? them.login : them.disable}
          onClick={async () => {
            if(usernameInfo.status && passwordInfo.status){
              handleLogin();
            }
          }}
        >
          Log In
        </LoginButton>
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
      <CustomSnackBar isOpen={isErrorMsgOpen}  severity="error" handleClose={handleClose} message={submitError}/>
    </Modal>
  );
}

export default Login;