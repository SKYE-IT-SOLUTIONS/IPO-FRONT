import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Formik } from "formik";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import * as Yup from "yup";
import { phoneRegExp } from "../../../../config/pattern";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Personal Information",
  "Company Preferences",
  "Current Overall Performance",
];

const Internship = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const switchTab = (tab, data) => {
    console.log("tab1 data-", data);
    switch (tab) {
      case 0:
        return <Step1 {...data} />;
      case 1:
        return <Step2 {...data} />;
      case 2:
        return <Step3 {...data} />;
      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Stepper activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography variant="h6">{label}</Typography>
              </StepLabel>{" "}
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }} variant="h4">
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mb: 5 }} />
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <Formik
            initialValues={{
              nameWithInit: "",
              fullName: "",
              gender: "male",
              regNo: "",
              mobile1: "",
              mobile2: "",
              email: "",
              phone: "",
              address: "",
              gName: "",
              gMobile: "",
              gAddress: "",
              company1: "",
              company2: "",
              degree: "",
              gpaL11: 0.0,
              gpaL12: 0.0,
              gpaL21: 0.0,
              gpaL22: 0.0,
              gpaL31: 0.0,
              gpaL32: 0.0,
              overall: 0.0,
            }}
            validationSchema={Yup.object().shape({
              nameWithInit: Yup.string().required("Required"),
              fullName: Yup.string().required("Required"),
              gender: Yup.string().required("Required"),
              regNo: "",
              mobile1: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .min(9)
                .max(10)
                .required("Phone is required"),
              mobile2: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .min(9)
                .max(10)
                .required("Phone is required"),
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              address: Yup.string().required("Required"),
              gName: Yup.string().required("Required"),
              gMobile: Yup.string()
                .matches(phoneRegExp, "Phone number is not valid")
                .min(9)
                .max(10)
                .required("Phone is required"),
              gAddress: Yup.string().required("Required"),
              company1: Yup.string().required("Required"),
              company2: Yup.string().required("Required"),
              company3: Yup.string().required("Required"),
              degree: Yup.string().required("Required"),
              gpaL11: Yup.number("value must be a number")
                .min(0)
                .max(4.0)
                .required("Required"),
              gpaL12: Yup.number("value must be a number")
                .min(0)
                .max(4.0)
                .required("Required"),
              gpaL21: Yup.number("value must be a number")
                .min(0)
                .max(4.0)
                .required("Required"),
              gpaL22: Yup.number("value must be a number")
                .min(0)
                .max(4.0)
                .required("Required"),
              gpaL31: Yup.number("value must be a number")
                .min(0)
                .max(4.0)
                .required("Required"),
              gpaL32: Yup.number("value must be a number")
                .min(0)
                .max(4.0)
                .required("Required"),
            })}
          >
            {(data) => {
              console.log("data-" + data);
              return (
                <>
                  <form onSubmit={data.handleSubmit}>
                    {switchTab(activeStep, data)}
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </Button>
                      <Box sx={{ flex: "1 1 auto" }} />

                      <Button
                        type="submit"
                        onClick={() => {
                          console.log("data", data.isValid);
                          switch (activeStep) {
                            case 0:
                              if (!data.errors.fullName) {
                                data.errors = {};
                                handleNext();
                              }
                              break;
                            case 1:
                              if (!data.errors.company1) {
                                handleNext();
                              }
                              break;
                            case 2:
                              if (true) {
                                handleNext();
                              }
                              break;
                            default:
                              break;
                          }
                        }}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </Box>
                  </form>
                </>
              );
            }}
          </Formik>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Internship;
