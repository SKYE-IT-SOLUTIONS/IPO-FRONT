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
import { TextField } from "@mui/material";
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

const InfoLable = styled(Lable)`
   font-size: 13px;
   color: black;
   padding-top: 0px;
   padding-bottom: 0px;
`;

const SubIcon = styled(Icon)`
   margin: auto;
   color: #0f3443;
`;

const SubBttn = styled(CustomButton)`
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

   const [name, setName] = useState("");
   const [nameInfo, setNameInfo] = useState({ error: null, status: false });

   const [email, setEmail] = useState("");
   const [emailInfo, setEmailInfo] = useState({ error: null, status: false });

   const [isLoading, setisLoading] = useState(false);
   // const [submitError, setSubmitError] = useState(null);

   const [snackbarOpen, setSnackbarOpen] = useState(false);
   const [message, setMessage] = useState(null);
   const [severity, setSeverity] = useState("");
   const [recaptcha, setRecaptcha] = useState(false);
   const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

   const formik = useFormik({
      initialValues: {
         name: "",
         email: "",
      },
      validationSchema: Yup.object({
         name: Yup.string().required("Name is Required"),
         email: Yup.string()
            .email("Invalid Email Address")
            .required("Email Address is Required"),
      }),
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
   });

   const handleClose = (event, reason) => {
      if (reason === "clickaway") {
         return;
      }

      setSnackbarOpen(false);
   };

   const dataService = new DataService();

   const handleSubscribe = async () => {
      if (nameInfo.status && emailInfo.status) {
         setisLoading(true);
         const { status, error } = await dataService.handleSubscription({
            name: name,
            email: email,
         });
         if (status) {
            setMessage("Subscribed Successfully");
            setSeverity("success");
            setSnackbarOpen(true);
            setName("");
            setEmail("");
            setNameInfo({ error: null, status: false });
            setEmailInfo({ error: null, status: false });
         } else {
            setMessage(error);
            setSeverity("error");
            setSnackbarOpen(true);
         }
         setisLoading(false);
      }
   };

   function onChange(value) {
      console.log("Captcha value:", value);
      setRecaptcha(!recaptcha);
   }

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
            <InfoLable>
               Join our subscribe list to get the latest news & updates
            </InfoLable>
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
               <RECAPTCHA onChange={onChange} />
            </Box>
            <SubBttn
               // disabled={
               //   isLoading || !nameInfo.status || !emailInfo.status || !recaptcha
               // }
               onClick={formik.handleSubmit}
            >
               SUBMIT
            </SubBttn>
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
