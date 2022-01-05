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
import { useNavigate } from "react-router-dom";
import DataService from "../services/DataService";
import FileService from "../services/FileService";

import {
  setTitle,
  setDescription,
  setImage,
  removeDescription,
  setVisibility,
} from "../store/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import setImageBuffer from "../utils/storeImage";
import Spinner from "./Spinner";
import { Simple_Validator } from "../utils/validation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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

const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px;
  padding: 5px 0px;
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
  background: ${({ bgColor }) => bgColor};
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
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const fileService = new FileService();

  const defaultNews = "https://drive.google.com/uc?id=1tfUdboMMMkR-t3miKiQMmyBNfhVFtCDs&export=download"

  const { theme, light, dark,fonts } = useContext(ThemeContext);
  const them = theme ? light.button : dark.button;
  // useS
  const [newTitle, setNewsTitle] = useState("");
  const [content, setContent] = useState("");
  const [visibility, setNewsVisibility] = useState(true);

  const [contentInfo, setContentInfo] = useState({
    error: null,
    status: false,
  });
  const [titleInfo, setTitleInfo] = useState({
    error: null,
    status: false,
  });

  const [contentList, setContentList] = useState([]);

  const [imageUrl, setImageUrl] = useState(defaultNews);

  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const storeTitle = useSelector((state) => state.news.title);
  const storeImage = useSelector((state) => state.news.image);
  const storeDescription = useSelector((state) => state.news.description);
  const storeVisibility = useSelector((state) => state.news.visibility);

  const dataService = new DataService();
  const [error, setError] = useState("");

  const handleNewsSubmit = async (payload) => {
    setIsLoading(true)
    console.log("payload", payload);
    const { status,data, error } = await dataService.handleSubmitNews(payload);
    if (status) {
      dispatch(removeDescription());
      dispatch(setImage(defaultNews));
      dispatch(setTitle(null));
      navigate(`/admin/news/${data}`);
    }else{
      console.log("error", error);
      setError(error);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    setIsLoading(true);
    if (
      storeTitle !== null ||
      storeDescription.length !== 0
    ){
      setNewsTitle(storeTitle);
      setContentList(storeDescription);
      setImageUrl(storeImage);
      setNewsVisibility(storeVisibility);
      setTitleInfo(Simple_Validator(storeTitle,"Title"));
      setContentInfo(Simple_Validator(storeDescription,"Description"));
    }
    setIsLoading(false);
  }, []);

  const updateUploadedFiles = async (files) => {
    if (files.length !== 0) {
      setFiles(files);
      console.log(files[0]);
      
      const {status,error,data} = await fileService.handleCreate(files[0]);
      
    if (status) {
      console.log("fileURL", data?.fileUrl);
      dispatch(setImage(data?.fileUrl));
      setImageUrl(data?.fileUrl);
    }else{
      console.log("error", error);
    }
      
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
                  dispatch(setTitle(e.target.value));
                  setTitleInfo(Simple_Validator(e.target.value,"Title"));
                }}
              />
              {!titleInfo.status && <Error>{titleInfo.error}</Error>}


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
              <PalestherImage image={imageUrl} />
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
                          dispatch(setDescription(list));
                          setContentInfo(Simple_Validator(list,"Description"));
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
                      dispatch(setDescription(list));
                      setContent("");
                    }
                  }}
                />
              </OuterTextArea>
              {!contentInfo.status && <Error>{contentInfo.error}</Error>}  

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
                    dispatch(setVisibility(!!val));
                  }}
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Private"
                  onChange={(e) => {
                    let val = e.target.value;
                    setNewsVisibility(!val);
                    dispatch(setVisibility(!val));
                  }}
                />
              </RadioGroup>

              <NewsButton
                onClick={() => {
                  navigate("/admin/news/preview");
                }}
              >
                Preview
              </NewsButton>
              <NewsButton
                disabled={
                  !contentInfo.status ||
                  isLoading ||
                  !titleInfo.status
                }
                bgColor={!isLoading ? them.submit : them.disable}
                onClick={() => {
                  console.log("submit");
                  if (contentInfo.status && titleInfo.status) {
                    console.log("submit inside");
                    handleNewsSubmit({
                      title: newTitle,
                      description: contentList,
                      global: visibility,
                      url: imageUrl,
                    });
                  }
                }}
              >
                Submit
              </NewsButton>
            </DetailCol>
          </Row>
        </NewContainer>
      )}
    </>
  );
}

export default AddNewsPost;
