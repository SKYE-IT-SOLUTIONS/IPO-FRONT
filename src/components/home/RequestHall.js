/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Row, Col, CustomButton, Input } from "../CommonComponents";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Paper, Grid, Box } from "@mui/material";
import Conference from "../../assets/Conference.svg";
import DataService from "../../services/DataService";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Recaptcha } from "../CommonComponents";

//form validation
import { Formik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../config/pattern";

const Requestdiv = styled.div`
  font-family: ${({ font }) => font.general};
`;
const Title = styled.h1`
  text-align: center;
  margin-top: -10px;
  margin-bottom: 30px;
`;
const MPaper = styled(Paper)`
  text-align: center;
  padding: 32px;
`;
const StyledImg = styled.img`
  padding: auto;
  width: 100%;
`;
const Inputs = styled(Input)`
  font-size: 16px;
  width: 100%;
`;
const TextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
`;
const H5div = styled.div`
  margin-top: -25px;
  background-color: white;
  size: 10px;
`;
const Bordercol = styled(Col)`
  border: 2px solid black;
  padding: 20px;
`;
const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px;
  padding: 5px 0px;
`;

function RequestHall() {
  const { fonts } = useContext(ThemeContext);
  const dataService = new DataService();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [severity, setSeverity] = useState("");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Formik
    initialValues={{
      name: "",
      introPerson: "",
      personCount: "",
      duration:"",
      time:"",
      date:"",
      purpose:"",
      eventDetails:"",
      email:"",
      phone:"",
      address:"",
      file: "",
      recaptcha: false,
      systemUser: false,
     
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Name is required"),
      introPerson: Yup.string()
        .required("Introduction is required")
        .min(50, "Description must be at least 50 characters"),
      personCount: Yup.number()
        .required("Person Count is required"),
      duration: Yup.number()
        .required("Duration is required")
        .min(0.1, "Duration must be greater than 0"),
      date: Yup.date()
      .min(
        new Date(new Date().setDate(new Date().getDate() - 1)),
        "Pickup date must be today or later"
      )
      .required("Date id required"),
      purpose: Yup.string()
        .required("Reason is required")
        .min(50, "Reason must be at least 100 characters"),
      eventDetails: Yup.string().required("EventDetails is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      phone: Yup.string()
          .matches(phoneRegExp, "Invalid phone number")
          .required("Phone Number is required"),
      address: Yup.string().required("Address is required"),
      file: Yup.mixed()
          .required("File is required")
          .test(
            "fileFormat",
            "File format is not supported(supported format: pdf)",
            (file) =>
              file &&
              ["pdf"].includes(
                file.name.split(".")[file.name.split(".").length - 1]
              )
          )
          .test(
            "fileSize",
            "File size must be less than 5MB",
            (file) => file && file.size <= 5000000
          ),
      recaptcha: Yup.boolean().oneOf(
          [true],
          "Please verify that you are not a robot"
        ),
    })}
    onSubmit={async (values, { setSubmitting, resetForm }) => {
      var data = new FormData();
      data.append("file", values.file);
      data.append(
        "request",
        JSON.stringify({
          name: values.name,
          introPerson: values.introPerson,
          personCount: values.personCount,
          duration: values.duration,
          time: values.time,
          date: values.date,
          purpose: values.purpose,
          eventDetails: values.eventDetails,
          email: values.email,
          phone: values.phone,
          address: values.address,
          systemUser: false,
        })
      );
      const { status, error } = await dataService.handleRequestPerson(data);

      if (status) {
        setSnackbarOpen(true);
        setMessage("Request sent successfully");
        setSeverity("success");
        //reset data
        resetForm();
      } else {
        setSnackbarOpen(true);
        setMessage(error);
        setSeverity("error");
      }
    }}
    >
      {({
        errors,
        touched,
        getFieldProps,
        setFieldValue,
        handleSubmit,
        handleBlur,
        isSubmitting,
        isValid,
      }) => (
    <form onSubmit={handleSubmit}>
    <Requestdiv font={fonts}>
      <MPaper>
        <Title>Request a Faculty Conference Hall</Title>
        <Box sx={{ width: "100%" }}>
          <Row style={{ paddingTop: "15px" }}>
            <Col md={5} sm={12}>
              <StyledImg alt="" src={Conference} />
            </Col>
            <Bordercol md={7} sm={12}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <H5div>
                    <h5>Enter your Details</h5>
                  </H5div>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                  <>Your Name</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      placeholder="Enter Your Name"
                      {...getFieldProps("name")}
                    />
                    <br />
                    {touched.name && errors.name && (
                      <Error>{touched.name && errors.name}</Error>
                    )}
                   
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Introduce Yourself</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <TextArea
                      rows="4"
                      placeholder="Enter Description"
                      {...getFieldProps("introPerson")}
                    />
                    <br />
                    {touched.introPerson && errors.introPerson && (
                        <Error>
                          {touched.introPerson && errors.introPerson}
                        </Error>
                    )}
                  </>
                </Grid>

                <Grid item xs={4}>
                  <>Expected Number Of participants</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      placeholder="Enter Request Participant Count"
                      {...getFieldProps("personCount")}
                    />
                    <br />
                    {touched.personCount && errors.personCount && (
                      <Error>
                        {touched.personCount && errors.personCount}
                      </Error>
                    )}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Duration</>
                </Grid>
                <Grid item xs={8}>
                  <>
                     <TextField
                        label="Enter Days"
                        id="filled-start-adornment"
                        defaultValue="0"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                          endAdornment: <InputAdornment position="start">days</InputAdornment>,
                        }}
                        variant="filled"
                      />
                       <TextField
                        label="Enter Hours"
                        id="filled-start-adornment"
                        defaultValue="0"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                          endAdornment: <InputAdornment position="start">hr</InputAdornment>,
                        }}
                        variant="filled"
                        {...getFieldProps("duration")}
                      />
                      <br/>
                      {touched.duration && errors.duration && (
                      <Error>
                        {touched.duration && errors.duration}
                      </Error>
                    )}
                     
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Expected Date and time</>
                </Grid>
                <Grid item xs={8}>
                  <>
                  <TextField
                      id="datetime-local"
                      type="date"
                      sx={{ width: 250 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      {...getFieldProps("date")}
                    />
                    <br/>
                    {touched.date && errors.date && (
                      <Error>
                        {touched.date && errors.date}
                      </Error>
                    )}
                  </>
                </Grid>

                <Grid item xs={4}>
                  <>Purpose of the event</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      placeholder="Enter Perpose of the event"
                      {...getFieldProps("purpose")}
                    />
                    <br />
                    {touched.purpose && errors.purpose && (
                      <Error>
                        {touched.purpose && errors.purpose}
                      </Error>
                    )}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>event Details</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <>
                      <TextArea
                        rows="4"
                        placeholder="Enter "
                        {...getFieldProps("eventDetails")}
                      />
                      <br/>
                      {touched.eventDetails && errors.eventDetails && (
                      <Error>
                        {touched.eventDetails && errors.eventDetails}
                      </Error>
                    )}
                    </>
                  </>
                </Grid>
              </Grid>
              <hr />
              <h6>Contact Details</h6>
              <hr />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <>Mail</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                     type="email"
                     placeholder="abc@gmail.com"
                     {...getFieldProps("email")}
                    />
                    <br />
                    {touched.email && errors.email && (
                      <Error>{touched.email && errors.email}</Error>
                    )}
                 
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Mobile Number</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      placeholder="07***********"
                      {...getFieldProps("phone")}
                    />
                    <br />
                    {touched.phone && errors.phone && (
                      <Error>{touched.phone && errors.phone}</Error>
                    )}
                  
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Address</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <TextArea
                       placeholder="Enter a Address"
                       rows="4"
                       {...getFieldProps("address")}
                    
                    />
                    <br />
                  {touched.address && errors.address && (
                    <Error>{touched.address && errors.address}</Error>
                  )}
                  </>
                </Grid>
              </Grid>
              <hr />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <>Upload recommendation letter</>
                </Grid>
                <Grid item xs={8}>
                  <>
                  <Grid item xs={8}>
                        <>
                          <Inputs
                            type="file"
                            accept="application/pdf"
                            onChange={(event) => {
                              setFieldValue("file", event.target.files[0]);
                            }}
                          />
                          <br />
                          {errors.file && <Error>{errors.file}</Error>}
                        </>
                  </Grid>
                  <Grid container sx={{ justifyContent:"flex-start", mt: 2 }}>
                      <Recaptcha
                        onChange={(value) =>
                          setFieldValue("recaptcha", value ? true : false)
                        }
                      />
                    </Grid>
                    {errors.recaptcha && <Error>{errors.recaptcha}</Error>}
                  </>
                </Grid>
              </Grid>

              <Grid container sx={{ justifyContent: "center", mt: 2 }}>
                      <CustomButton disabled={!isValid} type="submit">
                        submit
                      </CustomButton>
                      <br />
              </Grid>
              <br />
            </Bordercol>
          </Row>
        </Box>
      </MPaper>
    </Requestdiv>
    </form>
      )}
    </Formik>
  );
}

export default RequestHall;
