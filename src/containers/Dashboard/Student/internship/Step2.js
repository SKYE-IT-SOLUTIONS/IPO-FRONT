import {
  Autocomplete,
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

const Step2 = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  resetForm,
  values,
}) => {
  const companies = [
    { id: 1, title: "Google" },
    { id: 2, title: "Facebook" },
    { id: 3, title: "Amazon" },
  ];
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
            <Typography variant="h6">CHOICE LIST</Typography>
          </Divider>
        </Grid>
      </Grid>

      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={companies.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Preferred Company/Institution (Choice I)"
                  error={Boolean(touched.company1 && errors.company1)}
                  helperText={touched.company1 && errors.company1}
                  name="company1"
                  id="company1"
                  onBlur={handleBlur}
                  onSelect={handleChange}
                  value={values.company1}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={companies.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Preferred Company/Institution (Choice II)"
                  error={Boolean(touched.company2 && errors.company2)}
                  helperText={touched.company2 && errors.company2}
                  name="company2"
                  id="company2"
                  onBlur={handleBlur}
                  onSelect={handleChange}
                  value={values.company2}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={companies.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Preferred Company/Institution (Choice III)"
                  error={Boolean(touched.company3 && errors.company3)}
                  helperText={touched.company3 && errors.company3}
                  name="company3"
                  id="company3"
                  onBlur={handleBlur}
                  onSelect={handleChange}
                  value={values.company3}
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider>
              <Typography variant="h6">DEGREE DETAILS</Typography>
            </Divider>
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Degree Program</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="degree"
                value={values.degree}
                label="Degree Program"
                onChange={handleChange}
              >
                <MenuItem value="male">Agricultural Resource Management and Technology</MenuItem>
                <MenuItem value="female">Agribusiness Management</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        </Grid>
      </CardContent>
      <Divider />
    </Container>
  );
};
export default Step2;
