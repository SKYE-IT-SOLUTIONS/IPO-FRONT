import React, { useContext , useState } from "react";
import { Container, Row, Col, Input, Lable, CustomButton } from "./CommonComponents";
import styled from "styled-components";
import newsImage from "../assets/News-cuate.svg";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { styled as muistyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileUpload from "./fileupload/FileUpload";



const InputImage = muistyled("input")({
  display: "none",
});

const NewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  font-family: ${({ font }) => font.general};
  padding-top:25px;
  @media (max-width: 600px) {
    padding: 25px 20px;
  }
  /* justify-content: start; */
  /* text-align: start; */
`;

const DetailCol = styled(Col)``;

const ApplyImage = styled.div`
  height: 512px;
  width: 512px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  @media (min-width: 768px) and (max-width: 1040px) {
    height: 360px;
    width: 360px;
  }
  @media (max-width: 768px) {
    height: 360px;
    width: 360px;
  }
`;

const Collection = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

const NewsInput = styled(Input)`
  width: 100%;
  /* @media (max-width: 1040px) {
    font-size: 13px;
  } */
`;

const OuterTextArea = styled.div`
display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;
`;

const NewsButton = styled(CustomButton)`
    margin: 15px 0;
`

const Title = styled(Lable)`
    padding-top: 15px;
`

function AddNewsPost() {
  const { fonts } = useContext(ThemeContext);

  // useS

  const [content, setContent] = useState("");
  const [contentList, setContentList] = useState([]);
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});

  const uploadPackageImages = (files, requestId) =>null;
    // packageService.packageImagesUpload(files, requestId);

  const updateUploadedFiles = (files) => setFiles(files);

  return (
    <NewContainer font={fonts}>
      <Row>
        <Col md={6} sm={12}>
          <ApplyImage image={newsImage} />
        </Col>
        <DetailCol md={6} sm={12}>
            <Title>Title</Title>
            <NewsInput type="text" placeholder="Enter News Title" />
          {/* <Collection>
            <Title>Image</Title>
            <label htmlFor="contained-button-file">
              <InputImage
                accept="image/*"
                id="contained-button-file"
                type="file"
              />
              <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
                Upload
              </Button>
            </label>
          </Collection> */}
          <FileUpload style={{ backgroundColor:'#ededed',}}
                  accept=".jpg,.png,.jpeg"
                  multiple
                  label="News Image(s)"
                  files={filesU}
                  setFiles={setFilesU}
                  updateFilesCb={updateUploadedFiles}
                />
            {/* <ImageInput type="file"/> */}
          <Title>Description</Title>
          <ul>
            {contentList && contentList.map((value,index) => ( 
                <li key={index} style={{textAlign:"justify"}}>{value} <Icon
                    icon="ic:round-cancel"
                    style={{margin:"auto 3px"}}
                    color="red"
                    height="30"
                    onClick={()=>{
                        setContentList(contentList.filter((_, ind) => ind !== index));
                    }}
                  /></li>
                
            ))}
          </ul>
          <OuterTextArea>
          <TextArea rows="4" value={content} placeholder="Enter Description" onChange={(e) => {
            setContent(e.target.value)
          }}/>
          <Icon
                icon="akar-icons:circle-plus-fill"
                height="34"
                color="#001e62"
                style={{margin:"auto 3px"}}
                onClick={() => {
                    if(content !== ""){
                        setContentList([...contentList,content])
                        setContent("")
                    }
                }}
              />
          </OuterTextArea>
          <NewsButton submit onClick={()=>{
            console.log("List  : ",contentList)
          }}>Submit</NewsButton>
        </DetailCol>
      </Row>
    </NewContainer>
  );
}

export default AddNewsPost;