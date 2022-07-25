import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Row, Col, CustomButton, Input, TextArea } from "../CommonComponents";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Paper, Grid, Box } from "@mui/material";
import Request from "../../assets/requestgraduate.svg";
import DataService from "../../services/DataService";
import { Recaptcha } from "../CommonComponents";
import CustomSnackBar from "../common/CustomSnackBar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

//form validation
import { Formik } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../config/pattern";

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
const TextAreas = styled(TextArea)`
  font-size: 16px;
  width: 100%;
`;
const BorderColumn = styled(Col)`
  border: 2px solid black;
  padding: 20px;
`;
const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px;
  padding: 5px 0px;
`;

function RequestGraduate() {
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
        type: "undergraduate",
        personCount: "",
        reason: "",
        email: "",
        phone: "",
        address: "",
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
          .required("Person Count is required")
          .min(5, "Person Count must be at least 5"),
        reason: Yup.string()
          .required("Reason is required")
          .min(50, "Reason must be at least 100 characters"),
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
            type: values.type,
            personCount: values.personCount,
            reason: values.reason,
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
          <Box font={fonts}>
            <MPaper>
              <Title>Request Graduate / Undergraduate</Title>
              <Box sx={{ width: "100%" }}>
                <Row style={{ paddingTop: "15px" }}>
                  <Col md={5} sm={12}>
                    <StyledImg alt="" src={Request} />
                  </Col>
                  <BorderColumn md={7} sm={12}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <h5>Enter your Details</h5>
                      </Grid>
                      <Grid item xs={6}></Grid>
                      <Grid item xs={4}>
                        <>Your Name</>
                      </Grid>
                      <Grid item xs={8}>
                        <>
                          <Inputs
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
                          <TextAreas
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
                        <>Request Person</>
                      </Grid>
                      <Grid item xs={8}>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          {...getFieldProps("type")}
                        >
                          <FormControlLabel
                            value="graduate"
                            control={<Radio />}
                            label="Graduate"
                          />
                          <FormControlLabel
                            value="undergraduate"
                            control={<Radio />}
                            label="Undergraduate"
                          />
                        </RadioGroup>
                      </Grid>
                      <Grid item xs={4}>
                        <>Request Count</>
                      </Grid>
                      <Grid item xs={8}>
                        <>
                          <Inputs
                            type="text"
                            placeholder="Enter Request Person Count"
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
                        <>Reason</>
                      </Grid>
                      <Grid item xs={8}>
                        <>
                          <TextAreas
                            placeholder="Enter a Reason"
                            rows="4"
                            {...getFieldProps("reason")}
                          />
                          <br />
                          {touched.reason && errors.reason && (
                            <Error>{touched.reason && errors.reason}</Error>
                          )}
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
                          <TextAreas
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
                        Recommendation letter(.pdf)
                      </Grid>
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
                    </Grid>
                    <Grid container sx={{ justifyContent: "center", mt: 2 }}>
                      <Recaptcha
                        onChange={(value) =>
                          setFieldValue("recaptcha", value ? true : false)
                        }
                      />
                    </Grid>
                    {errors.recaptcha && <Error>{errors.recaptcha}</Error>}
                    <Grid container sx={{ justifyContent: "center", mt: 2 }}>
                      <CustomButton disabled={!isValid} type="submit">
                        submit
                      </CustomButton>
                      <br />
                    </Grid>
                  </BorderColumn>
                </Row>
              </Box>
            </MPaper>
            <CustomSnackBar
              isOpen={snackbarOpen}
              severity={severity}
              handleClose={handleClose}
              message={message}
            />
          </Box>
        </form>
      )}
    </Formik>
  );
}

export default RequestGraduate;
