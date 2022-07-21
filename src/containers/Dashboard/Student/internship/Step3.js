import {
  CardContent,
  Container,
  Divider,
  Grid,

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
  const overAllVal =(v)=>{
      const gpa =Object.keys(v).filter(k=>k.startsWith("gpa")&& v[k]).map(k=>v[k]);
      const sum = gpa.reduce((i, v) => i+v, 0);
      return Math.round(sum/gpa.length*100)/100;
  }
  return (

    <Container component="main" maxWidth="md">

      <Divider />
      <CardContent>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Divider textAlign="left">
            <Typography variant="h6">FIRST YEAR GPA</Typography>
          </Divider>
        </Grid>
          {/* <Grid item md={6} xs={12} /> */}
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              error={Boolean(touched.gpaL11 && errors.gpaL11)}
              helperText={touched.gpaL11 && errors.gpaL11}
              label="Semester 1"
              name="gpaL11"
              id="gpaL11"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gpaL11}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              error={Boolean(touched.gpaL12 && errors.gpaL12)}
              helperText={touched.gpaL12 && errors.gpaL12}
              label="Semester 2"
              name="gpaL12"
              id="gpaL12"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gpaL12}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider textAlign="left">
              <Typography variant="h6">SECOND YEAR GPA</Typography>
            </Divider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              error={Boolean(touched.gpaL21 && errors.gpaL21)}
              helperText={touched.gpaL21 && errors.gpaL21}
              label="Semester 1"
              name="gpaL21"
              id="gpaL21"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gpaL21}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              error={Boolean(touched.gpaL22 && errors.gpaL22)}
              helperText={touched.gpaL22 && errors.gpaL22}
              label="Semester 2"
              name="gpaL22"
              id="gpaL22"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gpaL22}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider textAlign="left">
              <Typography variant="h6">THIRD YEAR GPA</Typography>
            </Divider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              error={Boolean(touched.gpaL31 && errors.gpaL31)}
              helperText={touched.gpaL31 && errors.gpaL31}
              label="Semester 1"
              name="gpaL31"
              id="gpaL31"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gpaL31}
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              type="number"
              error={Boolean(touched.gpaL32 && errors.gpaL32)}
              helperText={touched.gpaL32 && errors.gpaL32}
              label="Semester 2"
              name="gpaL32"
              id="gpaL32"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.gpaL32}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider textAlign="left">
              <Typography variant="h6">OVERALL</Typography>
            </Divider>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
            disabled
              fullWidth
              type="number"
              error={Boolean(touched.overall && errors.overall)}
              helperText={touched.overall && errors.overall}
              label="Overall"
              name="overall"
              id="overall"
              // onBlur={handleBlur}
              // onChange={handleChange}
              value={overAllVal(values)}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Container>
  );
};
export default Step1;
