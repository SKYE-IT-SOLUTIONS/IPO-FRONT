import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { patternPassword } from "../../../config/pattern";

export const PasswordChange = (props) => {
  return (
    <Formik
      initialValues={{
        oldPassword: "",
        newPassword: "",
        confirm: "",
      }}
      validationSchema={Yup.object().shape({
        oldPassword: Yup.string().required("Password Required"),
        newPassword: Yup.string()
          .required("Password Required")
          .matches(
            patternPassword,
            "Password should contain 8 characters,at least a number and a capital letter"
          ),
        confirm: Yup.string().required("Password Required"),
      })}
      validate={(values) => {
        const errors = {};
        if (values?.newPassword !== values?.confirm) {
          errors.confirm = "Password not match matched";
        }
        return errors;
      }}
      handleSubmit=""
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <form {...props} onSubmit={handleSubmit}>
          <Card>
            <Grid spacing={3} sx={{ mt: 1, p: 2 }}>
              <Grid item xs={10} sm={6}>
                <CardHeader
                  //   subheader="The information can be edited"
                  title="Change Password"
                />
              </Grid>
              <Divider />
              <TextField
                fullWidth
                label="Old Password"
                error={Boolean(touched.oldPassword && errors.oldPassword)}
                helperText={touched.oldPassword && errors.oldPassword}
                margin="normal"
                name="oldPassword"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.oldPassword}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="New Password"
                margin="normal"
                error={Boolean(touched.newPassword && errors.newPassword)}
                helperText={touched.newPassword && errors.newPassword}
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                value={values.newPassword}
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Confirm password"
                error={Boolean(touched.confirm && errors.confirm)}
                helperText={touched.confirm && errors.confirm}
                margin="normal"
                name="confirm"
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                value={values.confirm}
                variant="outlined"
              />
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  p: 2,
                }}
              >
                <Button type="submit" color="primary" variant="contained">
                  Update
                </Button>
              </Box>
            </Grid>
          </Card>
        </form>
      )}
    </Formik>
  );
};
