import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, CustomButton,Input} from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import {Paper,Grid,Box} from '@mui/material';
import Request from '../assets/requestgraduate.svg';
import { Form } from "react-bootstrap";
import { Simple_Validator,Validator,upload_Validator} from "../utils/validation";
import { patternMail,patternContact } from "../config/pattern"

const Requestdiv=styled.div`
    font-family: ${({ font }) => font.general};
    
`;
const Title =styled.h1`
    text-align: center;
    margin-top: -10px;
    margin-bottom: 30px;
`;
const MPaper =styled(Paper)`
    text-align: center;
    padding: 32px;
`;
const StyledImg =styled.img`
  padding: auto;
  width: 100%;
`;
const Inputs=styled(Input)`
    font-size:16px;
    width: 100%;
`;
const TextArea=styled.textarea`
    font-size:16px;
    width:100%;
`;
const InputAddress=styled(Input)`
    font-size:16px;
    width: 100%;
    margin-bottom: 5px;
`;
const H5div=styled.div`
    margin-top: -25px;
    background-color: white;
    size: 10px;
`;
const Bordercol=styled(Col)`
    border:2px solid black;
    padding:20px;
`;
const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px;
  padding: 5px 0px;
`;


function Requestgraduate() {
    const { fonts } = useContext(ThemeContext);

    const [reqperson,setReqperson]=useState("Graduate");
    const [count,setCount]=useState();
    const [countInfo,setCountInfo]=useState({error: null,status: false});
    const [reason,setReason]=useState("educationalEvent");
    const [other,setOther]=useState();
    const [mail,setMail]=useState();
    const [mailInfo,setMailInfo]=useState({error: null,status: false});
    const [number,setNumber]=useState();
    const [numberInfo,setNumberInfo]=useState({error: null,status: false});
    const [addressNo,setAddressNo]=useState();
    const [addressLine,setAddressLine]=useState();
    const [city,setCity]=useState();
    const [cityInfo,setCityInfo]=useState({error: null,status: false});
    const [upload,setUpload] =useState({});
    const [uploadInfo,setUploadInfo]=useState({error: null,status: false});

   const output=[
       {
        RequestPerson:{reqperson},
        RequestCount:{count},
        Reason:{reason},
        Other:{other},
        Mail:{mail},
        MobileNumber:{number},
        Address:{},
       }
    ]
    return (
        <Requestdiv font={fonts}>
            <MPaper>
             <Title >Request Graduate / Undergraduate</Title>
             <Box sx={{ width: '100%'}}>
             <Row style={{ paddingTop: "15px" }}>
                <Col md={5} sm={12}>
                    <StyledImg
                    alt=""
                    src={Request}
                    />
                </Col>
                <Bordercol md={7} sm={12}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        <Grid item xs={6}>
                            <H5div><h5 >Enter Details</h5></H5div>
                        </Grid>
                        <Grid item xs={6}>
                           
                        </Grid>
                        
                        <Grid item xs={4}>
                            <>Request Person</>
                        </Grid>
                        <Grid item xs={8}>
                        <><Form>
                            <Form.Check
                                type="radio"
                                label="Graduate"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value="Graduate"
                                checked
                                onChange={(e) => {
                                    setReqperson(e.target.value)
                                    console.log(e.target.value)
                                    }}
                            />
                            <Form.Check
                                type="radio"
                                label="Undergraduate"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="UnderGraduate"
                                onChange={(e) => {
                                    setReqperson(e.target.value)
                                    console.log(e.target.value)
                                    }}
                            />
                            </Form>
                            </>   
                        </Grid>
                        <Grid item xs={4}>
                            <>Request Count</>
                        </Grid>
                        <Grid item xs={8}>
                            <><Inputs type="text" name="name" value={count} 
                                placeholder="Enter Request Person Count"
                                onChange={(e) => {
                                setCount(e.target.value)
                                setCountInfo(Simple_Validator(e.target.value,"Count"));
                                }}
                                /><br/>
                                {!countInfo.status && <Error>{countInfo.error}</Error>}
                                </>
                        </Grid>
                        <Grid item xs={4}>
                            <>Reason</>
                        </Grid>
                        <Grid item xs={8}>
                        <><Form>
                            <Form.Check
                                type="radio"
                                label="For educational event"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                value="educationalEvent"
                                checked
                                onChange={(e) => {
                                    setReason(e.target.value)
                                    console.log(e.target.value)
                                    }}
                            />
                            <Form.Check
                                type="radio"
                                label="For survay"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="survay"
                                onChange={(e) => {
                                    setReason(e.target.value)
                                    console.log(e.target.value)
                                    }}
                            />
                            <Form.Check
                                type="radio"
                                label="other"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="other"
                                onChange={(e) => {
                                    setReason(e.target.value)
                                    console.log(e.target.value)
                                    }}
                            />
                            </Form>
                            </>    
                        </Grid>
                        <Grid item xs={4}>
                            <>Other</>
                        </Grid>
                        <Grid item xs={8}>
                            <><><TextArea
                                    rows="4"
                                    value={other}
                                    placeholder="Enter Reason"
                                    onChange={(e) => {
                                        setOther(e.target.value);
                                    }}
                                /></></>
                        </Grid>
                        
                    </Grid>
                    <hr/>
                    <h6>Contact Details</h6>
                    <hr/>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <>Mail</>
                        </Grid>
                        <Grid item xs={8}>
                            <><Inputs type="email" name="email" 
                                placeholder="abc@gmail.com"
                                onChange={(e) => {
                                setMail(e.target.value)
                                setMailInfo(Validator(e.target.value,patternMail,"Mail"));
                                }}/><br/>
                                {!mailInfo.status && <Error>{mailInfo.error}</Error>}
                                </>
                        </Grid>
                        <Grid item xs={4}>
                            <>Mobile Number</>
                        </Grid>
                        <Grid item xs={8}>
                            <><Inputs type="text" name="name" 
                                placeholder="07***********"
                                onChange={(e) => {
                                setNumber(e.target.value)
                                setNumberInfo(Validator(e.target.value,patternContact,"Number"));
                                }}/><br/>
                                {!numberInfo.status && <Error>{numberInfo.error}</Error>}
                                </>
                        </Grid>
                        <Grid item xs={4}>
                            <>Address</>
                        </Grid>
                        <Grid item xs={8}>
                            <><InputAddress type="text" name="name" placeholder="Apart No" value={addressNo} 
                                onChange={(e) => {
                                setAddressNo(e.target.value)
                                }}/></><br/>
                            <><InputAddress type="text" name="name" placeholder="Line1" value={addressLine} 
                                onChange={(e) => {
                                setAddressLine(e.target.value)
                                }}/></><br/>
                            <><InputAddress type="text" name="name" placeholder="City"  
                                onChange={(e) => {
                                setCity(e.target.value)
                                setCityInfo(Simple_Validator(e.target.value,"City"));
                                }}/>{!cityInfo.status && <Error>{cityInfo.error}</Error>}<br/>
                                </>     
                        </Grid>
                       
                    </Grid>

                    <CustomButton type="submit" submit 
                     disabled={!countInfo.status || !mailInfo.status || !numberInfo.status || !cityInfo.status || !uploadInfo.status}
                     
                    >
                    submit
                    </CustomButton><br/>

                </Bordercol>
                
            </Row>
            </Box>
            </MPaper>
        </Requestdiv>
    )
}

export default Requestgraduate
