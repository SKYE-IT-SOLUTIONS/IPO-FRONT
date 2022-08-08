import React, { useContext, useState } from "react";
import {
  CustomButton,
  Input,
  Lable,
  Container,
  Row,
  Col,
} from "../CommonComponents";
import styled from "styled-components";
import student from "../../assets/studentreg.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { passwordMatcher } from "../../utils/passwordMatcher";
import { Simple_Validator, Validator } from "../../utils/validation";
import { patternPassword } from "../../config/pattern";
import AuthServices from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";
import CustomSnackBar from "../common/CustomSnackBar";
import { Recaptcha } from "../CommonComponents";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegistrationDiv = styled(Container)`
  font-family: ${({ font }) => font.general};
`;
const CustInput = styled(Input)`
  width: 50%;
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

const VerifyButton = styled(CustomButton)`
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
  color: #009933;
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

  const [error, setError] = useState("");
  const [isErrorMsgOpen, setIsErrorMsgOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsErrorMsgOpen(false);
  };

  const authServices = new AuthServices();
  const navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
    formik.setFieldValue("recaptcha", true);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      index: "",
      email: "",
      password: "",
      confirmPassword: "",
      recaptcha: false,
    },
    validationSchema: Yup.object({
      index: Yup.string()
        .required("Index is required")
        .min(10, "Index is too short"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short")
        .matches(
          patternPassword,
          "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),
      confirmPassword: Yup.string()
        .required("Confirm Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
      recaptcha: Yup.boolean().oneOf([true], "Captcha is required"),
    }),
    onSubmit: async (values) => {
      const { status, data, error } = await authServices.handleStudentSignUp({
        username: values.index,
        password: values.password,
        name: values.name,
      });
      if (status) {
        console.log(data, 1);
        navigate("/register/sendMail", { state: { email: data.email } });
      } else {
        setError(error);
        setIsErrorMsgOpen(true);
      }
    },
  });

  const verify = async () => {
    console.log("clicked");
    setIsVerified(false);
    const { status, data, error } = await authServices.verifyStudent({
      id: formik.values.index,
    });
    if (status) {
      var name = data?.email.substring(0, data?.email.lastIndexOf("@"));
      var domain = data?.email.substring(data?.email.lastIndexOf("@") + 1);
      if (name.length > 8) {
        name = name.slice(0, name.length - 6) + "******";
      } else {
        name = name.slice(0, name.length - 4) + "****";
      }
      formik.setFieldValue("email", name + "@" + domain);
      formik.setFieldValue("name", data.name);
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

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
            <CustInput type="text" {...formik.getFieldProps("index")} />
            {!isVerified ? (
              <VerifyButton
                disabled={Boolean(formik.errors.index || !formik.touched.index)}
                onClick={() => {
                  console.log("clicked-func");
                  if (!formik.errors.index) {
                    verify();
                  }
                }}
              >
                Verify Index
              </VerifyButton>
            ) : (
              <LoginBttn
                onClick={() => {
                  setIsVerified(false);
                  formik.resetForm();
                }}
              >
                Clear
              </LoginBttn>
            )}
            {Boolean(formik.errors.index && formik.touched.index) && (
              <Error>{formik.errors.index}</Error>
            )}

            <Lable>Name</Lable>
            <Input type="text" {...formik.getFieldProps("name")} disabled />
            <Lable>Email</Lable>
            <Input type="text" {...formik.getFieldProps("email")} disabled />

            <Lable>Password</Lable>
            <Input type="password" {...formik.getFieldProps("password")} />
            {Boolean(formik.errors.password && formik.touched.password) && (
              <Error>{formik.errors.password}</Error>
            )}

            <Lable>Confirm Password</Lable>
            <Input
              type="password"
              {...formik.getFieldProps("confirmPassword")}
            />
            {Boolean(
              formik.errors.confirmPassword && formik.touched.confirmPassword
            ) && <Error>{formik.errors.confirmPassword}</Error>}

            <Recaptcha onChange={onChange} />
            {Boolean(formik.errors.recaptcha && formik.touched.recaptcha) && (
              <Error>{formik.errors.recaptcha}</Error>
            )}
            <LoginBttn
              disabled={formik.isSubmitting || !formik.isValid}
              onClick={formik.handleSubmit}
            >
              Register
            </LoginBttn>
          </SeparateDiv>
        </LoginCol>
      </Row>
      <CustomSnackBar
        isOpen={isErrorMsgOpen}
        severity="error"
        handleClose={handleClose}
        message={error}
      />
    </RegistrationDiv>
  );
}

export default StudentRegister;
