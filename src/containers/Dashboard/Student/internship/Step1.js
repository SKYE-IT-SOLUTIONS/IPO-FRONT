import {
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Step1 = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  resetForm,
  values,
}) => {
  return (
    <Container component="main" maxWidth="md">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={12}>
          <Divider>
            <Typography variant="h6">PERSONAL DETAILS</Typography>
          </Divider>
        </Grid>
      </Grid>

      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.fullName && errors.fullName)}
              helperText={touched.fullName && errors.fullName}
              label=" Full Name"
              name="fullName"
              id="fullName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.nameWithInit && errors.nameWithInit)}
              helperText={touched.nameWithInit && errors.nameWithInit}
              label="Name With Initials"
              name="nameWithInit"
              id="nameWithInit"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nameWithInit}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gender"
                value={values.gender}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="male" >Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
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
              fullWidth
              error={Boolean(touched.regNo && errors.regNo)}
              helperText={touched.regNo && errors.regNo}
              label="Registration Number (AG/AT/2016/XXXX)*"
              name="regNo"
              id="regNo"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.regNo}
              variant="outlined"
            />
          </Grid>
          {/* <Grid item md={6} xs={12} /> */}
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.mobile1 && errors.mobile1)}
              helperText={touched.mobile1 && errors.mobile1}
              label="Phone 1"
              name="mobile1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile1}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.mobile2 && errors.mobile2)}
              helperText={touched.mobile2 && errors.mobile2}
              label="Phone 2"
              name="mobile2"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              value={values.mobile2}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
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
          <Grid item xs={12} sm={12}>
            <Divider>
              <Typography variant="h6">GUARDIAN DETAILS</Typography>
            </Divider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.gName && errors.gName)}
              helperText={touched.gName && errors.gName}
              label="Guardian Name"
              name="gName"
              id="gName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gName}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.gMobile && errors.gMobile)}
              helperText={touched.gMobile && errors.gMobile}
              label="Guardian Mobile"
              name="gMobile"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              value={values.gMobile}
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              error={Boolean(touched.gAddress && errors.gAddress)}
              helperText={touched.gAddress && errors.gAddress}
              label="Guardian Address"
              name="gAddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gAddress}
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Container>
  );
};
export default Step1;
