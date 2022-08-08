/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useContext } from "react";
import { useFormik } from "formik";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Grid, Box, Typography } from "@mui/material";
import Request from "../../assets/requestgraduate.svg";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import * as Yup from "yup";

const StyledImg = styled.img`
  padding: auto;
  width: 100%;
`;

function Requestworkshop() {
  const formik = useFormik({
    initialValues: {
      type: "",
      participantsCount: "",
      purpose: "",
      details: "",
      heldDate: "",
      heldTime: "",
      days: 0,
      hours: 0.5,
    },
    validationSchema: Yup.object({
      type: Yup.string().required("Required"),
      participantsCount: Yup.number()
        .required("Required")
        .positive("Must be positive value")
        .integer("Must be integer"),
      purpose: Yup.string().required("Required"),
      details: Yup.string().required("Required"),
      heldDate: Yup.date()
        .required("Required")
        .min(
          new Date(new Date().setDate(new Date().getDate() - 1)),
          "Date must be today or later"
        ),
      heldTime: Yup.string().required("Required"),
      days: Yup.number()
        .min(0, "Must be positive number")
        .max(30, "Must be less than 30")
        .integer("Must be integer"),
      hours: Yup.number()
        .required("Required")
        .positive("Must be positive value")
        .min(0.5, "Must be at least 0.5")
        .max(24, "Must be less than 24"),
    }),
    onSubmit: (values) => {
      let { days, hours, heldDate, ...rest } = values;
      if (days === "") days = 0;
      alert(
        JSON.stringify(
          {
            ...rest,
            duration: hours * 60 + days * 24 * 60,
            heldDate: new Date(heldDate),
          },
          null,
          2
        )
      );
    },
  });

  return (
    <Container maxWidth="md" sx={{ my: "auto" }}>
      <Box sx={{ my: 3 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Request Workshop / Training Programme
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <StyledImg alt="" src={Request} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Type of your programme"
                variant="outlined"
                fullWidth
                helperText={formik.touched.type && formik.errors.type}
                error={formik.touched.type && formik.errors.type}
                {...formik.getFieldProps("type")}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Expected Number Of participants"
                variant="outlined"
                fullWidth
                type="number"
                helperText={
                  formik.touched.participantsCount &&
                  formik.errors.participantsCount
                }
                error={
                  formik.touched.participantsCount &&
                  formik.errors.participantsCount
                }
                {...formik.getFieldProps("participantsCount")}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                id="outlined-basic"
                label="Purpose of your programme"
                variant="outlined"
                fullWidth
                multiline
                rows={2}
                helperText={formik.touched.purpose && formik.errors.purpose}
                error={formik.touched.purpose && formik.errors.purpose}
                {...formik.getFieldProps("purpose")}
              />
            </Grid>
            <Grid item xs={12} md={12} sx={{mb:1.5}}>
              <TextField
                id="outlined-basic"
                label="Introduce about your programme"
                variant="outlined"
                multiline
                rows={3}
                fullWidth
                helperText={formik.touched.details && formik.errors.details}
                error={formik.touched.details && formik.errors.details}
                {...formik.getFieldProps("details")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="date"
                label="Expected Date"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={formik.touched.heldDate && formik.errors.heldDate}
                error={formik.touched.heldDate && formik.errors.heldDate}
                {...formik.getFieldProps("heldDate")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="time"
                label="Start Time"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                helperText={formik.touched.heldTime && formik.errors.heldTime}
                error={formik.touched.heldTime && formik.errors.heldTime}
                {...formik.getFieldProps("heldTime")}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle2" sx={{textAlign:"center"}}>Duration</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                focused
                label="Days"
                type="number"
                id="outlined-start-adornment"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">days</InputAdornment>
                  ),
                }}
                helperText={formik.touched.days && formik.errors.days}
                error={formik.touched.days && formik.errors.days}
                {...formik.getFieldProps("days")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                focused
                label="Hours"
                type="number"
                id="outlined-start-adornment"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">h</InputAdornment>
                  ),
                }}
                helperText={formik.touched.hours && formik.errors.hours}
                error={formik.touched.hours && formik.errors.hours}
                {...formik.getFieldProps("hours")}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={formik.handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Requestworkshop;
