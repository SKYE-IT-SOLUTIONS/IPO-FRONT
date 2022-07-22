/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { LocalPhone } from "@mui/icons-material";
import { phoneRegExp } from "../../config/pattern";

const city = [
  {
    value: "horana",
    label: "Horana",
  },
  {
    value: "matugama",
    label: "Matugama",
  },
  {
    value: "ingiriya",
    label: "Ingiriya",
  },
];

const ProfileDetails = (props) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [userData, setUserData] = useState({
    name: "Supun Tharuka",
    email: "supun@gmail.com",
    phone: "729744112",
    address: "201 D2 Thanayam place Ingiriya",
  });
  return (
    <Formik
      initialValues={{
        ...userData,
      }}
      validationSchema={Yup.object().shape({
        // name: Yup.string().required("First name is required"),
        // email: Yup.string()
        //   .email("Email is invalid")
        //   .required("Email is required"),
        phone: Yup.string()
          .matches(phoneRegExp, "Invalid Phone Number")
          .min(9, "Phone number must contain 10 characters")
          .max(9, "Phone number must contain 10 characters")
          .required("Phone number is Required"),
        address: Yup.string().required("Address is required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        resetForm,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Card>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={10} sm={6}>
                <CardHeader
                  subheader="The information can be edited"
                  title="Profile"
                />
              </Grid>
              <Grid
                item
                xs={2}
                sm={6}
                sx={{ justifyContent: "right", flexGrow: 1, display: "flex" }}
              >
                <Button
                  onClick={() => {
                    if (!isDisabled) {
                      resetForm();
                    }
                    setIsDisabled(!isDisabled);
                  }}
                  startIcon={isDisabled ? <EditIcon /> : <CancelIcon />}
                  sx={{ m: 2 }}
                >
                  {isDisabled ? "Edit" : "Cancel"}
                </Button>
              </Grid>
            </Grid>

            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField
                    inputProps={{ readOnly: true }}
                    fullWidth
                    label="First name"
                    name="name"
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    inputProps={{ readOnly: true }}
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    inputProps={{ readOnly: isDisabled }}
                    fullWidth
                    id="outlined-error-helper-text"
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    type="text"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+94</InputAdornment>
                      ),
                    }}
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    inputProps={{ readOnly: isDisabled }}
                    fullWidth
                    error={Boolean(touched.address && errors.address)}
                    helperText={touched.address && errors.address}
                    label="Address"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    variant="outlined"
                    multiline
                    rows={3}
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={JSON.stringify(userData) === JSON.stringify(values)}
              >
                Save details
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};
export default ProfileDetails;
