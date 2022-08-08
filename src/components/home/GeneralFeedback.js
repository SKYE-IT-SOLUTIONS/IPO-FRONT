/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import styled from "styled-components";
import Feedback from "../../assets/Feedback.svg";
import { Paper, Box, TextField, Typography } from "@mui/material";
import { Container, Row, Col, CustomButton } from "../CommonComponents";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const StyledImg = styled.img`
  padding: auto;
  size: 100%;
`;
// const Paper1=styled(Paper)`
//     justify-content: center;
//     padding: 32px;
// `;
const Paper2 = styled(Paper)`
  justify-content: center;
  padding: 32px;
`;
// const LoginCol = styled(Col)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
const SubButton = styled(CustomButton)`
  width: 150px;
  margin: 15px 0px;
  background: ${({ bgColor }) => bgColor};
`;
const Error = styled.p`
  color: #dc281e;
  font-size: 13px;
  margin: 0px;
  text-align: left;
  padding: 5px 0 5px 2px;
`;
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const handleSubmit = async () => {};
export default function HoverRating() {
  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light.button : dark.button;
  const [hover, setHover] = React.useState(-1);


  const formik = useFormik({
    initialValues: {
      name: "",
      comment: "",
      rating : 3
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      comment: Yup.string().required("Comment is required").min(150, "Must be 150 characters or above"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <Container>
      <Row style={{ paddingTop: "20px" }}>
        <Col md={5} sm={12}>
          <Paper2 elevation={6}>
            <StyledImg alt="" src={Feedback} />
          </Paper2>
        </Col>

        <Col md={7} sm={12}>
          <Paper2 elevation={6}>
            <Typography variant="h4" sx={{textTransform:"uppercase"}}>Rating</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my:2
              }}
            >
              <Rating
                name="hover-feedback"
                value={formik.values.rating}
                precision={0.5}
                onChange={(event, newValue) => {
                  formik.setFieldValue("rating", newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {formik.values.rating !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : formik.values.rating]}</Box>
              )}
            </Box>
            {/* <Typography variant="h5" sx={{mb:1}}>Name</Typography> */}
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && formik.errors.name}
              {...formik.getFieldProps("name")}
            />
            <br />
            <br />
            {/* <Typography variant="h5" sx={{mb:1}}>Comment</Typography> */}
            <TextField
              fullWidth
              label="Comment"
              id="fullWidth"
              type="text"
              multiline
              rows={3}
              helperText={formik.touched.comment && formik.errors.comment}
              error={formik.touched.comment && formik.errors.comment}
              {...formik.getFieldProps("comment")}
            />
            <SubButton
              // disabled={!commentInfo.status || isLoading}
              // bgColor={!isLoading ? them.login : them.disable}
              onClick={formik.handleSubmit}>
              Submit
            </SubButton>
          </Paper2>
        </Col>
      </Row>
    </Container>
  );
}
