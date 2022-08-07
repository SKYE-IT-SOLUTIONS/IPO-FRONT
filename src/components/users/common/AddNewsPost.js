/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Lable,
  CustomButton,
} from "../../CommonComponents";
import styled from "styled-components";
import newsImage from "../../../assets/News-cuate.svg";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { styled as muistyled } from "@mui/material/styles";
import FileUpload from "../../fileupload/FileUpload";
import { useNavigate } from "react-router-dom";
import DataService from "../../../services/DataService";
import FileService from "../../../services/FileService";
// import FileUpload from "react-mui-fileuploader";

import {
  setTitle,
  setDescription,
  setImage,
  removeDescription,
  setVisibility,
  setUrl,
} from "../../../store/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../common/Spinner";
import { Simple_Validator } from "../../../utils/validation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomSnackBar from "../../common/CustomSnackBar";

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

  const defaultNews =
    "https://drive.google.com/uc?id=1tfUdboMMMkR-t3miKiQMmyBNfhVFtCDs&export=download";

  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light.button : dark.button;
  const [visibility, setNewsVisibility] = useState(true);

  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const storeTitle = useSelector((state) => state.news.title);
  const storeImage = useSelector((state) => state.news.image);
  const storeDescription = useSelector((state) => state.news.description);
  const storeVisibility = useSelector((state) => state.news.visibility);
  const storeUrl = useSelector((state) => state.news.url);

  const dataService = new DataService();
  const urlToObject = async (url) => {
    const response = await fetch(url);
    // here image is url/location of image
    const blob = await response.blob();
    const file = new File([blob], "news_image.jpg", { type: blob.type });
    console.log(file);
    return file;
  };

  const formik = useFormik({
    initialValues: {
      title: storeTitle ? storeTitle : "",
      image: "",
      description: storeDescription ? storeDescription : [""],
      visibility: storeVisibility ? storeVisibility : true,
      des_content: "",
      url: storeUrl ? storeUrl : defaultNews,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Name is Required"),
    }),
    validate: (values) => {
      const d = values.description;
      if (d.length === 0) {
        formik.errors.description = "Description is required";
        return;
      } else {
        formik.errors = {};
      }
      formik.errors = {};
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append(
        "request",
        JSON.stringify({
          title: values.title,
          description: values.description,
          global: values.visibility,
        })
      );
      const image =
        values.image === "" ? await urlToObject(values.url) : values.image;
      console.log(image);
      formData.append("file", image);
      const { status, data, error } = await dataService.addNews(formData);
      if (status) {
        dispatch(removeDescription());
        dispatch(setImage(null));
        dispatch(setTitle(null));
        dispatch(setVisibility(true));
        dispatch(setUrl(defaultNews));
        setMessage("News Added Successfully");
        setIsError(false);
        setSnackOpen(true);
        formik.resetForm();
        setTimeout(() => {
          navigate("/admin/news/list");
        }, 1000);
      } else {
        setMessage(error);
        setIsError(true);
        setSnackOpen(true);
      }
      setIsLoading(false);
    },
  });

  const updateUploadedFiles = async (files) => {
    if (files.length !== 0) {
      console.log(files[0]);
      formik.setFieldValue("image", files[0]);
      // dispatch(setImage(files[0]));
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        formik.setFieldValue("url", reader.result);
        dispatch(setUrl(reader.result));
      };
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };
  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);
  const { onChange, ...restTitleChange } = formik.getFieldProps("title");

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
                onChange={(e) => {
                  formik.setFieldValue("title", e.target.value);
                  dispatch(setTitle(e.target.value));
                }}
                {...restTitleChange}
              />
              {Boolean(formik.touched.title && formik.errors.title) && (
                <Error>{formik.errors.title}</Error>
              )}

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
              <PalestherImage image={formik.values.url} />
              <br />
              <Title>Description</Title>
              <ul>
                {formik.values.description &&
                  formik.values.description.map((value, index) => (
                    <li key={index} style={{ textAlign: "justify" }}>
                      {value}{" "}
                      <Icon
                        icon="ic:round-cancel"
                        style={{ margin: "auto 3px" }}
                        color="red"
                        height="30"
                        onClick={() => {
                          let list = formik.values.description.filter(
                            (_, ind) => ind !== index
                          );
                          formik.setFieldValue("description", list);
                          dispatch(setDescription(list));
                        }}
                      />
                    </li>
                  ))}
              </ul>
              <OuterTextArea>
                <TextArea
                  rows="4"
                  placeholder="Enter Description"
                  {...formik.getFieldProps("des_content")}
                />
                <Icon
                  icon="akar-icons:circle-plus-fill"
                  height="34"
                  color="#001e62"
                  style={{ margin: "auto 3px", cusor: "pointer" }}
                  onClick={async () => {
                    if (formik.values.des_content !== "") {
                      let list = [
                        ...formik.values.description,
                        formik.values.des_content,
                      ];
                      formik.setFieldValue("description", list);
                      dispatch(setDescription(list));
                      formik.setFieldValue("des_content", "");
                      formik.setTouched("des_content", false);
                    }
                  }}
                />
              </OuterTextArea>
              {Boolean(
                formik.touched.des_content && formik.errors.description
              ) && <Error>{formik.errors.description}</Error>}

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
                // disabled={formik.isSubmitting}
                bgColor={!formik.isSubmitting ? them.submit : them.disable}
                onClick={() => {
                  console.log("clickes");
                  formik.handleSubmit();
                }}
                type="submit"
              >
                Submit
              </NewsButton>
            </DetailCol>
          </Row>
          <CustomSnackBar
            isOpen={snackOpen}
            severity={isError ? "error" : "success"}
            handleClose={handleClose}
            message={message}
          />
        </NewContainer>
      )}
    </>
  );
}

export default AddNewsPost;
