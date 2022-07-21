import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { TextField, Box, Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import FeedbackImg from "../../../assets/Feedback.svg";

const top100Films = [
  { label: "IR10563", year: 1994 },
  { label: "IR10663", year: 1972 },
  { label: "IR10960", year: 1974 },
  { label: "IR10263", year: 2008 },
];

const Feedback = () => {
  const [userData, setuserData] = useState({
    name: "Nadun Nethsara",
    email: "maximus9798@gmail.com",
    id: "",
    feedback: "",
  });

  return (
    <Formik
      initialValues={{
        ...userData,
      }}
      validationSchema={Yup.object({
        id: Yup.string().required("Internship Request id is Required"),
        feedback: Yup.string()
          .min(10, "Must be 10 characters or above")
          .max(1000, "Must be 1000 characters or less")
          .required("Feedback is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Paper elevation={24} sx={{ m: 2, px: 1,pt:3 }}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    px: 2,
                  }}
                >
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Student Feedback Form
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ my: 2, textAlign: "justify" }}
                  >
                    Please help us improve our internship requests by filling
                    out this student feedback form. We highly appreciate your
                    involvement. Thank you!
                  </Typography>
                  <TextField
                    id="outlined-error-helper-text"
                    label="Name"
                    sx={{ mt: 2 }}
                    InputProps={{
                      readOnly: true,
                    }}
                    {...formik.getFieldProps("name")}
                  />
                  <TextField
                    id="outlined-error-helper-text"
                    label="Email Address"
                    sx={{ mt: 2 }}
                    InputProps={{
                      readOnly: true,
                    }}
                    {...formik.getFieldProps("email")}
                  />
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={top100Films}
                    sx={{ mt: 2 }}
                    onChange={(event, value) => {
                      formik.setFieldValue(
                        "id",
                        value !== null ? value.label : formik.initialValues.id
                      );
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Internship Request Id"
                        error={Boolean(formik.touched.id && formik.errors.id)}
                        helperText={formik.touched.id && formik.errors.id}
                        {...formik.getFieldProps("id")}
                      />
                    )}
                  />

                  <TextField
                    label="Feedback"
                    name="feedback"
                    variant="outlined"
                    error={formik.errors.feedback && formik.touched.feedback}
                    helperText={
                      formik.touched.feedback && formik.errors.feedback
                    }
                    multiline
                    rows={3}
                    sx={{ mt: 2 }}
                    {...formik.getFieldProps("feedback")}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      py: 2,
                      px: 0,
                    }}
                  >
                    <Button type="submit" color="primary" variant="contained">
                      Send Feedback
                    </Button>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  sx={{
                    display: { sm: "none", xs: "none", md: "flex" },
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <img src={FeedbackImg} alt="" width="450px" height="450px" />
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Feedback;
