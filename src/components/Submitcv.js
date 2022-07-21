/* eslint-disable no-unused-vars */
import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Container, Row, Col, CustomButton } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import submitCV from "../assets/submitcv.svg";
import FileUpload from "./fileupload/FileUpload";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, } from "react-redux";
import setImageBuffer from "../utils/storeImage";
import { Icon } from '@iconify/react';

const Contactcontainer = styled(Container)`
  font-family: ${({ font }) => font.general};
  padding: 20px 20px;
`;
const StyledImg = styled.img`
  padding: auto;
  height: 100%;
  width: 100%;
`;
const Title = styled.h1`
  text-align: center;
`;
// const Inputaddress = styled(Input)`
//   margin-bottom: 10px;
//   color: #808b96;
//   font-size: 14px;
// `;
// const Input2 = styled(Input)`
//   color: #808b96;
//   font-size: 16px;
// `;
const Button = styled(CustomButton)`
    position: absolute;
    bottom: 0;
    right: 100px;
`;
const PalestherImage = styled.img`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  width:300px;
  height:300px;
  margin-top:10px;
  border-radius: 10px;
`;
const Icondelete=styled(Icon)`
    width: 25px;
    height: 25px;
`;
function Submitcv() {
  // const dispatch = useDispatch();
  // let navigate = useNavigate();
  const { fonts } = useContext(ThemeContext);

  // useS

  const [imageUrl, setImageUrl] = useState(null);
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});
  const [disable, setDisable] = useState(false);


  const updateUploadedFiles = async (files) => {
    if(files.length !== 0){
      setFiles(files)
      console.log(files[0])
      const dataUrl = await setImageBuffer(files[0])
      setImageUrl(dataUrl)
    }
  };
  const deletesubmit= ()=>{
        setImageUrl(null)
  }
  return (
    <Contactcontainer font={fonts}>
      <Title>Submit Your CV</Title>
      <Row style={{ paddingTop: "15px" }}>
        <Col md={6} sm={12}>
          <StyledImg alt="" src={submitCV} />
        </Col>
        <Col md={6} sm={12}>
          <Row>
            {/* <h3>CV</h3> */}
            <FileUpload
               accept=".jpg,.png,.jpeg"
               label="News Image(s)"
               files={filesU}
               setFiles={setFilesU}
               updateFilesCb={updateUploadedFiles}
            />
              
               {imageUrl && <div><PalestherImage image={imageUrl}/><br/><Icondelete icon="fluent:delete-20-filled" onClick={deletesubmit} disabled={disable} /></div>}<br/>

            <Row>
              <Col md={6} sm={12} />
              <Col md={6} sm={12}>
                <Button type="submit" submit>
                  Submit
                </Button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Contactcontainer>
  );
}

export default Submitcv;
