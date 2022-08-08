/* eslint-disable no-unused-vars */
import React, { useCallback, useContext, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Lable, CustomButton } from "../CommonComponents";
import CustomSnackBar from "../common/CustomSnackBar";
import DataService from "../../services/DataService";
import SubscribeImg from "../../assets/Subscriber.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Stack from "@mui/material/Stack";
import { Grid, TextField } from "@mui/material";
import { styled as muistyle } from "@mui/material/styles";
import { Recaptcha } from "../CommonComponents";
import { Box } from "@mui/system";

const CssTextField = muistyle(TextField)({
  margin: "8px auto",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
  },
});

const Img = styled.img`
  width: 450px;
  height: 450px;

  @media (min-width: 1000px) and (max-width: 1263px) {
    height: 360px;
    width: 360px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const SubscriptDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-family: ${({ fonts }) => fonts.general};
  /* background: linear-gradient(to top, #00b09b, #96c93d); */
`;

const InfoLabel = styled(Lable)`
  font-size: 13px;
  color: black;
  padding-top: 0px;
  padding-bottom: 0px;
`;

const SubIcon = styled(Icon)`
  margin: auto;
  color: #0f3443;
`;

const SubscribeButton = styled(CustomButton)`
  margin: 10px auto;
  padding: auto;
`;

const Title = styled.h1`
  font-family: ${({ fonts }) => fonts.title};
  font-size: 25px;
  color: blue;
`;
const RECAPTCHA = styled(Recaptcha)`
  margin: auto;
  /* display: flex;
   justify-content: center;
   transform: translateX(50%); */
`;

function Subscription() {
  const { fonts } = useContext(ThemeContext);

  const [isLoading, setisLoading] = useState(false);
  // const [submitError, setSubmitError] = useState(null);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [severity, setSeverity] = useState("");
  const [recaptcha, setRecaptcha] = useState(false);
  const dataService = new DataService();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      recaptcha: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email Address is Required"),
      recaptcha: Yup.boolean().oneOf(
        [true],
        "Please verify that you are not a robot"
      ),
    }),
    onSubmit:async (values,{resetForm}) => {
      const payload = {
         name: values.name,
         email: values.email
      };
      const {status, error} = await dataService.subscribeMail(payload);
      if(status){
        setSnackbarOpen(true);
        setMessage("Subscription Successful");
        setSeverity("success");
        resetForm();
      }else{
         setSnackbarOpen(true);
         setMessage(error);
         setSeverity("error");
      }
    },
  });

  const handleClose = (__event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Stack
      direction={{ md: "row", sm: "column", xs: "column" }}
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <SubscriptDiv fonts={fonts} md={7} sm={12}>
        <SubIcon icon="entypo:mail" width="70" />
        <Title fonts={fonts}>SUBSCRIBE US</Title>
        <InfoLabel>
          Join our subscribe list to get the latest news & updates
        </InfoLabel>
        <CssTextField
          fullWidth
          label="Name"
          id="custom-css-outlined-input"
          error={formik.touched.name && formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          {...formik.getFieldProps("name")}
        />
        <CssTextField
          fullWidth
          label="Email Address"
          id="custom-css-outlined-input"
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps("email")}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container sx={{justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <RECAPTCHA
              onChange={(value) =>
                formik.setFieldValue("recaptcha", value ? true : false)
              }
            />
            {formik.errors.recaptcha && (
              <span style={{ color: "red" }}>{formik.errors.recaptcha}</span>
            )}
          </Grid>
        </Box>
        <SubscribeButton
         disabled={!formik.isValid}
          onClick={formik.handleSubmit}
        >
          SUBMIT
        </SubscribeButton>
        <CustomSnackBar
          isOpen={snackbarOpen}
          severity={severity}
          handleClose={handleClose}
          message={message}
        />
      </SubscriptDiv>
      <Img src={SubscribeImg} alt="" />
    </Stack>
  );
}

export default Subscription;
