import {useEffect,useState} from "react";
import {
  Container,
  Grid,
  TextField,
  Stack,
  InputAdornment,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import {
  LocationOn,
  LocalPhone,
  Fax,
  Person,
  Email,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import MapView from "./MapView";

const ContactUs = () => {
  const [ipoData, setipoData] = useState({
    address: "81100 , Matara-Kamburupitiya Rd , Mapalana",
    email: "agri.ruh@gmail.com",
    phone: "+94 412 292 386",
    fax:"+94 412 292 386",
    officer:"Supun Tharuka"
  });
  useEffect(() => {
    // ipoData.fax = "+94 412 333 386"
    setipoData({...ipoData,fax:"+94 412 333 386"})
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string().email("Invalid Email").required("Email is Required"),
      phone: Yup.string().matches(`^(?:7)[0-9]{8}$`,"Invalid Phone Number").required("Phone number is Required"),
      message: Yup.string()
        .min(10, "Message should contain 10 or above characters")
        .required("Message is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
    <div style={{width:"100%",height:"250px"}}>
    <MapView/>
    </div>
    
    <Container maxWidth="md" sx={{ my: 3 }}>
      <Grid container>
        <Grid item xs={12}>
          <Divider>
            <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
              Contact Us
            </Typography>
          </Divider>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 2,mt: 5 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
              IPO Contact Details
            </Typography>

            <TextField
              fullWidth
              color="primary"
              id="input-with-icon-textfield"
              label="Address"
              variant="outlined"
              value={ipoData.address}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              value={ipoData.email}
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              value={ipoData.phone}
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhone />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Fax"
              variant="outlined"
              value={ipoData.fax}
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Fax />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Officer"
              variant="outlined"
              value={ipoData.officer}
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
                readOnly: true,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ px: 2,mt: 5 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
              Get In Touch
            </Typography>
            <TextField
              error={formik.touched.name && formik.errors.name}
              fullWidth
              id="outlined-error-helper-text"
              label="Name"
              helperText={formik.touched.name && formik.errors.name}
              {...formik.getFieldProps("name")}
            />
            <TextField
              fullWidth
              id="outlined-error-helper-text"
              label="Email Address"
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              {...formik.getFieldProps("email")}
            />
            <TextField
              fullWidth
              id="outlined-error-helper-text"
              label="Phone"
              InputProps={{
                startAdornment: <InputAdornment position="start">+94</InputAdornment>,
              }}
              error={formik.touched.phone && formik.errors.phone}
              helperText={formik.touched.phone && formik.errors.phone}
              {...formik.getFieldProps("phone")}
            />
            <TextField
              fullWidth
              id="outlined-error-helper-text"
              label="Message"
              multiline
              rows={4}
              error={formik.touched.message && formik.errors.message}
              helperText={formik.touched.message && formik.errors.message}
              {...formik.getFieldProps("message")}
            />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={formik.handleSubmit}
            >
              SUBMIT
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
    </>
  );
};

export default ContactUs;
