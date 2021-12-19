import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Lable,
  CustomButton,
} from "./CommonComponents";
import styled from "styled-components";
import newsImage from "../assets/News-cuate.svg";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { styled as muistyled } from "@mui/material/styles";
import FileUpload from "./fileupload/FileUpload";
import { useNavigate ,useParams } from "react-router-dom";
import setImageBuffer from "../utils/storeImage";
import Spinner from "./Spinner";
import { Simple_Validator } from "../utils/validation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DataService from "../services/DataService";

const InputImage = muistyled("input")({
  display: "none",
});

const NewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  font-family: ${({ font }) => font.general};
  padding-top: 25px;
  @media (max-width: 600px) {
    padding: 25px 20px;
  }
  /* justify-content: start; */
  /* text-align: start; */
`;

const DetailCol = styled(Col)``;

const ApplyImage = styled.div`
  height: 80%;
  width: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (min-width: 768px) {
    height: 90%;
    width: 100%;
    margin-top: 30px;
    margin-left: -50px;
  }
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
    margin-top: -30px;
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
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;
`;

const NewsButton = styled(CustomButton)`
  margin: 25px 20px 30px 0;
`;

const Title = styled(Lable)`
  padding-top: 15px;
`;

const PalestherImage = styled.img`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100px;
  height: 100px;
  margin-top: 10px;
  border-radius: 10px;
`;

function AddNewsPost() {
  let navigate = useNavigate();
  const { id } = useParams();
  const dataService = new DataService();

  const { fonts } = useContext(ThemeContext);
  // useS
  const [newTitle, setNewsTitle] = useState("");
  const [content, setContent] = useState("");
  const [visibility, setNewsVisibility] = useState(true);

  const [contentInfo, setContentInfo] = useState({
    error: null,
    status: false,
  });

  const [error, setError] = useState("");

  const [contentList, setContentList] = useState([]);

  const [imageUrl, setImageUrl] = useState(null);

  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
        if (id !== undefined && id !== null) {
        //   console.log("Database Call");
        //   console.log(id);
        //   const { status, data, error } = id
        //     ? await dataService.handleGetNews(id)
        //     : null;
        //   if (status) {
        //     setNewsData(data);
                let rdata;
                await fetch(`http://localhost:3005/news/${id}`).then(res=>
                res.json()
                ).then(data=>{
                console.log("rdata",data)
                setNewsTitle(data.title)
                setContentList(data.description)
                setImageUrl(data.image)
                setNewsVisibility(data.visibility)
                }).catch(e=>console.log(e)).finally(()=>{
                    setIsLoading(false);
                })
          } else {
            setError(error);
            navigate("/404");
          }
        }
      fetchNews();
  }, []);

  const updateUploadedFiles = async (files) => {
    if (files.length !== 0) {
      setFiles(files);
      console.log(files[0]);
      const dataUrl = await setImageBuffer(files[0]);
      setImageUrl(dataUrl);
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
          <>
          {newTitle && 
          <NewContainer font={fonts}>
          <Row>
            <Col md={5} sm={12}>
              <ApplyImage image={newsImage} />
            </Col>
            <DetailCol md={7} sm={12}>
              <Title>Title</Title>

              <NewsInput
                type="text"
                placeholder="Enter News Title"
                value={newTitle}
                onChange={(e) => {
                  setNewsTitle(e.target.value);
                  // setTitleInfo(Simple_Validator(e.target.value,"Title"));
                }}
              />
              <Title>Image</Title>
              <FileUpload
                style={{ backgroundColor: "#ededed" }}
                accept=".jpg,.png,.jpeg"
                label="News Image(s)"
                files={filesU}
                setFiles={setFilesU}
                updateFilesCb={updateUploadedFiles}
              />
              {/* <ImageInput type="file"/> */}
              {imageUrl && <PalestherImage image={imageUrl} />}
              <br />
              <Title>Description</Title>
              <ul>
                {contentList &&
                  contentList.map((value, index) => (
                    <li key={index} style={{ textAlign: "justify" }}>
                      {value}{" "}
                      <Icon
                        icon="ic:round-cancel"
                        style={{ margin: "auto 3px" }}
                        color="red"
                        height="30"
                        onClick={() => {
                          let list = contentList.filter(
                            (_, ind) => ind !== index
                          );
                          setContentList(list);
                        }}
                      />
                    </li>
                  ))}
              </ul>
              <OuterTextArea>
                <TextArea
                  rows="4"
                  value={content}
                  placeholder="Enter Description"
                  onChange={(e) => {
                    setContent(e.target.value);
                    setContentInfo(
                      Simple_Validator(e.target.value, "Description")
                    );
                  }}
                />
                <Icon
                  icon="akar-icons:circle-plus-fill"
                  height="34"
                  color="#001e62"
                  style={{ margin: "auto 3px" }}
                  onClick={() => {
                    if (content !== "") {
                      let list = [...contentList, content];
                      setContentList(list);
                      setContent("");
                    }
                  }}
                />
              </OuterTextArea>

              <Title>News Visibility</Title>
              <RadioGroup
                row
                aria-label="visibility"
                value={visibility}
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Public"
                  onChange={(e) => {
                    let val = e.target.value;
                    setNewsVisibility(!!val);
                  }}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Private"
                  onChange={(e) => {
                    let val = e.target.value;
                    setNewsVisibility(!val);
                  }}
                />
              </RadioGroup>

              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <NewsButton
                  style={{ width: "20%" }}
                  submit
                  onClick={() => {
                    navigate("/news/preview");
                  }}
                >
                  View
                </NewsButton>
                <NewsButton
                  style={{ width: "20%" }}
                  submit
                  onClick={() => {
                    dispatch(removeDescription());
                    dispatch(setImage(null));
                    dispatch(setTitle(null));
                  }}
                >
                  Submit
                </NewsButton>
              </div> */}
              <div style={{textAlign:"right"}}>
              <NewsButton
                submit
              >
                Submit
              </NewsButton>
              </div>
              
            </DetailCol>
          </Row>
        </NewContainer>
          }
          </>

      )}
    </>
  );
}

export default AddNewsPost;
