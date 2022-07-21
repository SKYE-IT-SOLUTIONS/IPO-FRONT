/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from '@mui/icons-material/Cancel';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

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
    firstName: "Supun Tharuka",
    lastName: "Wijegunawardhana",
    email: "supun@gmail.com",
    phone: "0729744112",
    address: "201 D2 Thanayam place Ingiriya",
  });
  return (
    <Formik
      initialValues={{
        ...userData,
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        phone: Yup.string().required("Phone is required"),
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
                    if(!isDisabled){
                      resetForm();
                    }
                    setIsDisabled(!isDisabled);
                  }
                  }
                  startIcon={isDisabled?<EditIcon />:<CancelIcon />}
                  sx={{ m: 2 }}
                >
                  {isDisabled?"Edit":"Cancel"}
                </Button>
              </Grid>
            </Grid>

            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    inputProps={{readOnly: isDisabled}}
                    fullWidth
                    error={Boolean(touched.firstName && errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                    label="First name"
                    name="firstName"
                    id="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    inputProps={{readOnly: isDisabled}}
                    fullWidth
                    error={Boolean(touched.lastName && errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    label="Last name"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    inputProps={{readOnly: isDisabled}}
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    inputProps={{readOnly: isDisabled}}
                    fullWidth
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                    label="Phone Number"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    value={values.phone}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    inputProps={{readOnly: isDisabled}}
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
