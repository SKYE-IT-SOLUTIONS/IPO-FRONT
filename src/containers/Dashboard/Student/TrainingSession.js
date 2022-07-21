import {
  Autocomplete,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";

const typeOptions = [
  { label: "How to prepare a CV" },
  { label: "Facing an interview" },
  { label: "Finding a job" },
  { label: "Personal development" },
  { label: "Finding scholarships" },
  { label: "Foreign Employment" },
  { label: "Plot the career path" },
];

const TrainingSession = () => {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Divider>
            <Typography variant="h5">Event</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} md={6}>
          <Autocomplete
            disablePortal
            freeSolo
            options={typeOptions}
            renderInput={(params) => (
              <TextField {...params} label="Type" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Number of participants"
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Purpose" fullWidth multiline minRows={2} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Details" fullWidth multiline minRows={2} />
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Time"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          <Autocomplete
            disablePortal
            options={["Online", "Physical", "Both"]}
            renderInput={(params) => (
              <TextField {...params} label="Conducting media" fullWidth />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider textAlign="left">
            <Typography variant="h6">Duration</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Hours"
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Minutes"
            fullWidth
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider textAlign="left">
            <Typography variant="h6">Contact Details</Typography>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Full name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Mobile number" fullWidth />
        </Grid>
        <Grid item xs={12} textAlign="end">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrainingSession;
