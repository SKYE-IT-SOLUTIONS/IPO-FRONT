import styled from "styled-components";
import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, CustomButton,Input} from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import {Paper,Grid,Box} from '@mui/material';
import Request from '../assets/requestgraduate.svg';
import { Form } from "react-bootstrap";
import { Simple_Validator,Validator,upload_Validator} from "../utils/validation";
import { patternMail,patternContact } from "../config/pattern";
import DataService from "../services/DataService";
import {Recaptcha} from "./CommonComponents";
import CustomSnackBar from "./CustomSnackBar";

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
    const dataService = new DataService();

    const [name,setName]=useState();
    const [nameInfo,setNameInfo]=useState({error: null,status: false});
    const [companyOrInst,setCompanyOrInst]=useState();
    const [designation,setDesignation]=useState();
    const [description,setDescription]=useState();
    const [descriptionInfo,setDescriptionInfo]=useState({error: null,status: false});
    const [count,setCount]=useState();
    const [countInfo,setCountInfo]=useState({error: null,status: false});
    const [reqperson,setReqperson]=useState("Graduate");
    const [reason,setReason]=useState();
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
    const [recaptcha,setRecaptcha]=useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [severity, setSeverity] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbarOpen(false);
      };

    const onchanage = (value) => {setRecaptcha(value)};

    const resetData = () => {
        setName("");
            setCompanyOrInst("");
            setDesignation("");
            setDescription("");
            setCount("");
            setReason("");
            setMail("");
            setNumber("");
            setAddressNo("");
            setAddressLine("");
            setCity("");
            setUpload("");
            setRecaptcha(false);
            setCityInfo({error: null,status: false});
            setMailInfo({error: null,status: false});
            setNumberInfo({error: null,status: false});
            setDescriptionInfo({error: null,status: false});
            setCountInfo({error: null,status: false});
            setNameInfo({error: null,status: false});
            setUploadInfo({error: null,status: false});
    }

    const handleSubmit = async () =>{
        const payload = {
            name:name,
            companyname:companyOrInst,
            institute:companyOrInst,
            designation: designation,
            contactNumber:number,
            email:mail,
            address: addressNo+","+addressLine+","+city,
            selfIntroduction:description,
            topic:reason,
            graduate:"Graduate" ? true : false,
            requestCount:count,
            recommendationLetter:"file url"
        }
        const {status,error} = await dataService.handleRequestTypeOther(payload);
        if(status){
            setSnackbarOpen(true);
            setMessage("Request sent successfully");
            setSeverity("success");
            //reset data
            resetData();
        }else{
            setSnackbarOpen(true);
            setMessage(error);
            setSeverity("error");
        }

    }

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
                            <H5div><h5 >Enter your Details</h5></H5div>
                        </Grid>
                        <Grid item xs={6}>
                           
                        </Grid>
                        <Grid item xs={4}>
                            <>Your Name</>
                        </Grid>
                        <Grid item xs={8}>
                            <><Inputs type="text" name="name" value={name} 
                                placeholder="Enter Your Name"
                                onChange={(e) => {
                                setName(e.target.value)
                                setNameInfo(Simple_Validator(e.target.value,"Name"));
                                }}
                                /><br/>
                                {!nameInfo.status && <Error>{nameInfo.error}</Error>}</>
                        </Grid>
                        <Grid item xs={4}>
                            <>Introduce Yourself</>
                        </Grid>
                        <Grid item xs={8}>
                            <><TextArea
                                    rows="4"
                                    value={description}
                                    placeholder="Enter Description"
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                        setDescriptionInfo(Simple_Validator(e.target.value,"Description"));
                                    }}
                                /><br/>
                                {!descriptionInfo.status && <Error>{descriptionInfo.error}</Error>}
                                </>
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
                            {console.log(reqperson)}
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
                            <><><TextArea
                                    rows="4"
                                    value={reason}
                                    placeholder="Enter Reason"
                                    onChange={(e) => {
                                        setReason(e.target.value);
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
                                value={city}  
                                onChange={(e) => {
                                setCity(e.target.value)
                                setCityInfo(Simple_Validator(e.target.value,"City"));
                                }}/>{!cityInfo.status && <Error>{cityInfo.error}</Error>}<br/>
                                </>      
                        </Grid>
                       
                    </Grid>
                    <hr/>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                            <>Upload recommendation letter</>
                        </Grid>
                        <Grid item xs={8}>
                            <>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Control type="file" 
                                 onChange = {(e) => {
                                console.log("onFileChange Triggered");
                                setUpload(e.target.files[0]);
                                console.log("selected file"+e.target.files[0]);
                                setUploadInfo(upload_Validator(e.target.files[0],"File"))
                                }}/> 
                                {(upload.name && upload.size) != null ?  <p>({(upload.size/1000000).toFixed(2)} mb)</p> : null}
                                {uploadInfo.error != null && <Error>{uploadInfo.error}</Error>}
                            </Form.Group>
                            </>
                            <span  style={{margin:"5px"}}>
                                <Recaptcha onChange={onchange}/>
                            </span>
                        </Grid>
                    </Grid>

                    <CustomButton type="submit" submit 
                     disabled={!nameInfo.status || !descriptionInfo.status || !countInfo.status || !mailInfo.status || !numberInfo.status || !cityInfo.status || !uploadInfo.status}
                        onClick={handleSubmit}
                    
                    >
                    submit
                    </CustomButton><br/>

                </Bordercol>
                
            </Row>
            </Box>
            </MPaper>
            <CustomSnackBar isOpen={snackbarOpen}  severity={severity} handleClose={handleClose} message={message}/>
        </Requestdiv>
    )
}

export default Requestgraduate
