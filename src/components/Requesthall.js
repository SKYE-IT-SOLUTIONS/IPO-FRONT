import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, CustomButton, Input } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Paper, Grid, Box } from "@mui/material";
import Conference from "../assets/Conference.svg";
import { Form } from "react-bootstrap";
import {
  Simple_Validator,
  Validator,
  upload_Validator,
} from "../utils/validation";
import { patternMail, patternContact } from "../config/pattern";
import { styled as muistyled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Requestdiv = styled.div`
  font-family: ${({ font }) => font.general};
`;
const Title = styled.h1`
  text-align: center;
  margin-top: -10px;
  margin-bottom: 30px;
`;
const MPaper = styled(Paper)`
  text-align: center;
  padding: 32px;
`;
const StyledImg = styled.img`
  padding: auto;
  width: 100%;
`;
const Inputs = styled(Input)`
  font-size: 16px;
  width: 100%;
`;
const TextArea = styled.textarea`
  font-size: 16px;
  width: 100%;
`;
const InputAddress = styled(Input)`
  font-size: 16px;
  width: 100%;
  margin-bottom: 5px;
`;
const H5div = styled.div`
  margin-top: -25px;
  background-color: white;
  size: 10px;
`;
const Bordercol = styled(Col)`
  border: 2px solid black;
  padding: 20px;
`;
const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px;
  padding: 5px 0px;
`;

function Requesthall() {
  const { fonts } = useContext(ThemeContext);

  const [name, setName] = useState();
  const [nameInfo, setNameInfo] = useState({ error: null, status: false });
  const [description, setDescription] = useState();
  const [descriptionInfo, setDescriptionInfo] = useState({
    error: null,
    status: false,
  });
  const [count, setCount] = useState();
  const [countInfo, setCountInfo] = useState({ error: null, status: false });
  const [reqperson, setReqperson] = useState("Graduate");
  const [reason, setReason] = useState();
  const [mail, setMail] = useState();
  const [mailInfo, setMailInfo] = useState({ error: null, status: false });
  const [number, setNumber] = useState();
  const [numberInfo, setNumberInfo] = useState({ error: null, status: false });
  const [addressNo, setAddressNo] = useState();
  const [addressLine, setAddressLine] = useState();
  const [city, setCity] = useState();
  const [cityInfo, setCityInfo] = useState({ error: null, status: false });
  const [upload, setUpload] = useState({});
  const [uploadInfo, setUploadInfo] = useState({ error: null, status: false });


  const output = [
    {
      Name: { name },
      About: { description },
      RequestPerson: { reqperson },
      RequestCount: { count },
      Reason: { reason },
      Mail: { mail },
      MobileNumber: { number },
      Address: {},
    },
  ];

  return (
    <Requestdiv font={fonts}>
      <MPaper>
        <Title>Request a Faculty Conference Hall</Title>
        <Box sx={{ width: "100%" }}>
          <Row style={{ paddingTop: "15px" }}>
            <Col md={5} sm={12}>
              <StyledImg alt="" src={Conference} />
            </Col>
            <Bordercol md={7} sm={12}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <H5div>
                    <h5>Enter your Details</h5>
                  </H5div>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={4}>
                  <>Your Name</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Enter Your Name"
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameInfo(Simple_Validator(e.target.value, "Name"));
                      }}
                    />
                    <br />
                    {!nameInfo.status && <Error>{nameInfo.error}</Error>}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Introduce Yourself</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <TextArea
                      rows="4"
                      value={description}
                      placeholder="Enter Description"
                      onChange={(e) => {
                        setDescription(e.target.value);
                        setDescriptionInfo(
                          Simple_Validator(e.target.value, "Description")
                        );
                      }}
                    />
                    <br />
                    {!descriptionInfo.status && (
                      <Error>{descriptionInfo.error}</Error>
                    )}
                  </>
                </Grid>
               

                <Grid item xs={4}>
                  <>Expected Number Of participants</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      name="name"
                      value={count}
                      placeholder="Enter Request Participant Count"
                      onChange={(e) => {
                        setCount(e.target.value);
                        setCountInfo(Simple_Validator(e.target.value, "Count"));
                      }}
                    />
                    <br />
                    {!countInfo.status && <Error>{countInfo.error}</Error>}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Duration</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      name="name"
                      value={count}
                      placeholder="Enter Duration Time"
                      onChange={(e) => {
                        setCount(e.target.value);
                        setCountInfo(Simple_Validator(e.target.value, "Count"));
                      }}
                    />
                    <br />
                    {!countInfo.status && <Error>{countInfo.error}</Error>}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Expected Time Period</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <form action="/action_page.php">
                      <input
                        type="time"
                        id="appt"
                        name="appt"
                        placeholder="Enter Request Person Count"
                        onChange={(e) => {
                          setCount(e.target.value);
                          setCountInfo(
                            Simple_Validator(e.target.value, "Count")
                          );
                        }}
                      />
                      <input type="submit" />
                    </form>
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Expected Date</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <form action="/action_page.php">
                      <input
                        type="date"
                        id="day"
                        name="day"
                        placeholder="Enter Request Person Count"
                        onChange={(e) => {
                          setCount(e.target.value);
                          setCountInfo(
                            Simple_Validator(e.target.value, "Count")
                          );
                        }}
                      />
                      <input type="submit" />
                    </form>
                  </>
                </Grid>

                <Grid item xs={4}>
                  <>Perpose of the event</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      name="name"
                      value={count}
                      placeholder="Enter Perpose of the event"
                      onChange={(e) => {
                        setCount(e.target.value);
                        setCountInfo(Simple_Validator(e.target.value, "Count"));
                      }}
                    />
                    <br />
                    {!countInfo.status && <Error>{countInfo.error}</Error>}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>event Details</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <>
                      <TextArea
                        rows="4"
                        value={reason}
                        placeholder="Enter "
                        onChange={(e) => {
                          setReason(e.target.value);
                        }}
                      />
                    </>
                  </>
                </Grid>
              </Grid>
              <hr />
              <h6>Contact Details</h6>
              <hr />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <>Mail</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="email"
                      name="email"
                      placeholder="abc@gmail.com"
                      onChange={(e) => {
                        setMail(e.target.value);
                        setMailInfo(
                          Validator(e.target.value, patternMail, "Mail")
                        );
                      }}
                    />
                    <br />
                    {!mailInfo.status && <Error>{mailInfo.error}</Error>}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Mobile Number</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Inputs
                      type="text"
                      name="name"
                      placeholder="07***********"
                      onChange={(e) => {
                        setNumber(e.target.value);
                        setNumberInfo(
                          Validator(e.target.value, patternContact, "Number")
                        );
                      }}
                    />
                    <br />
                    {!numberInfo.status && <Error>{numberInfo.error}</Error>}
                  </>
                </Grid>
                <Grid item xs={4}>
                  <>Address</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <InputAddress
                      type="text"
                      name="name"
                      placeholder="Apart No"
                      value={addressNo}
                      onChange={(e) => {
                        setAddressNo(e.target.value);
                      }}
                    />
                  </>
                  <br />
                  <>
                    <InputAddress
                      type="text"
                      name="name"
                      placeholder="Line1"
                      value={addressLine}
                      onChange={(e) => {
                        setAddressLine(e.target.value);
                      }}
                    />
                  </>
                  <br />
                  <>
                    <InputAddress
                      type="text"
                      name="name"
                      placeholder="City"
                      onChange={(e) => {
                        setCity(e.target.value);
                        setCityInfo(Simple_Validator(e.target.value, "City"));
                      }}
                    />
                    {!cityInfo.status && <Error>{cityInfo.error}</Error>}
                    <br />
                  </>
                </Grid>
              </Grid>
              <hr />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={4}>
                  <>Upload recommendation letter</>
                </Grid>
                <Grid item xs={8}>
                  <>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control
                        type="file"
                        onChange={(e) => {
                          console.log("onFileChange Triggered");
                          setUpload(e.target.files[0]);
                          console.log("selected file" + e.target.files[0]);
                          setUploadInfo(
                            upload_Validator(e.target.files[0], "File")
                          );
                        }}
                      />
                      {(upload.name && upload.size) != null ? (
                        <p>({(upload.size / 1000000).toFixed(2)} mb)</p>
                      ) : null}
                      {uploadInfo.error != null && (
                        <Error>{uploadInfo.error}</Error>
                      )}
                    </Form.Group>
                  </>
                </Grid>
              </Grid>

              <CustomButton
                type="submit"
                submit
                disabled={
                  !nameInfo.status ||
                  !descriptionInfo.status ||
                  !countInfo.status ||
                  !mailInfo.status ||
                  !numberInfo.status ||
                  !cityInfo.status ||
                  !uploadInfo.status
                }
              >
                submit
              </CustomButton>
              <br />
            </Bordercol>
          </Row>
        </Box>
      </MPaper>
    </Requestdiv>
  );
}

export default Requesthall;
